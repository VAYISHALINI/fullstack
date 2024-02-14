package com.yoga.vayishaa.Service.impl;

import static com.yoga.vayishaa.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.UserRepository;
import com.yoga.vayishaa.Service.AuthenticationService;
import com.yoga.vayishaa.dto.request.LoginRequest;
import com.yoga.vayishaa.dto.request.RegisterRequest;
import com.yoga.vayishaa.dto.response.LoginResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;
import com.yoga.vayishaa.model.User;
import com.yoga.vayishaa.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){
            return RegisterResponse.builder().message("User with mail id" + request.getEmail() + "is already exists!")
            .build();
        }
        var user=User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(USER)
                .build();
                userRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("User create successfully!")
        .build();
   
    }
    @Override
    public LoginResponse login(LoginRequest request) {
       authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
       var user=userRepository.findByEmail(request.getEmail()).orElseThrow();
       
       String token=jwtUtil.generateToken(user);
       return LoginResponse.builder().message("User logged in successfully")
               .token(token)
               .build();
        
        
   
    }
    
}
