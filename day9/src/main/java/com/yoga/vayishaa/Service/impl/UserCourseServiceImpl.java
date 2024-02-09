package com.yoga.vayishaa.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.UserCourseRepository;

import com.yoga.vayishaa.Service.UserCourseService;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;

import com.yoga.vayishaa.model.UserCourse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCourseServiceImpl implements UserCourseService {
     
   private final UserCourseRepository userCourseRepository;

     
    @Override
    public BasicResponse<UserCourseResponse> getAllUserCourse() {
        List<UserCourse> users = userCourseRepository.findAll();
        List<UserCourseResponse> userCourseResponses = users.stream().map(user->UserCourseResponse.builder()
        .userCourse_id(user.getUserCourse_id())
        .course_id(user.getCourse().getCourse_id()) // Assuming Course entity has an 'id' field
        .user_id(user.getUser().getId())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserCourseResponse>builder()
        .message("User data fetched successfully!")
          .data(userCourseResponses)
          .build();
        
    }
}
