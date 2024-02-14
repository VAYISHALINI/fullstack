package com.yoga.vayishaa.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.UserRepository;
import com.yoga.vayishaa.Service.UserService;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;
import com.yoga.vayishaa.dto.response.UserResponse;
import com.yoga.vayishaa.model.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
   
    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user->UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .role(user.getRole())
        .image(user.getImage())
        .phoneNumber(user.getPhoneNumber())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserResponse>builder()
        .message("User data fetched successfully!")
          .data(userResponses)
          .build();
        
    }

     @Override
    public BasicResponse<UserCourseResponse> deleteuser(String user_id) {
       
        if (userRepository.existsById(user_id)) {
            userRepository.deleteById(user_id);
            return BasicResponse.<UserCourseResponse>builder()
                .message("User deleted successfully")
                .build();
        } else {
            return BasicResponse.<UserCourseResponse>builder()
                .message("User not found with ID: " + user_id)
                .build();
        }
    }

}
