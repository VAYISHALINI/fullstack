package com.yoga.vayishaa.Controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.yoga.vayishaa.Service.AuthenticationService;
import com.yoga.vayishaa.dto.request.LoginRequest;
import com.yoga.vayishaa.dto.request.RegisterRequest;
import com.yoga.vayishaa.dto.response.LoginResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;

import lombok.RequiredArgsConstructor;

import static com.yoga.vayishaa.utils.MyConstant.AUTH;
import static com.yoga.vayishaa.utils.MyConstant.LOGIN;
import static com.yoga.vayishaa.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping(AUTH)
@RequiredArgsConstructor
public class AuthenticationController {
     

    private final AuthenticationService authenticationService;
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse>register(@RequestBody RegisterRequest request)
    {
        RegisterResponse response=new RegisterResponse();
        try{
            response=authenticationService.register(request);
            return new ResponseEntity<>(response,ACCEPTED);
        }catch (Exception e)
        {
            System.out.println(e);
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }
     @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request)
    {
        LoginResponse response=new LoginResponse();
        try{
             response=authenticationService.login(request);
             return new ResponseEntity<>(response,ACCEPTED);
        }catch(Exception e)
        {    
            response.setMessage("something went wrong!");
            response.setToken("");
            // LoginResponse.builder().message("Something went wrong!").token("").build();
            return  new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

}
