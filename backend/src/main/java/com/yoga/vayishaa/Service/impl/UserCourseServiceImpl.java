package com.yoga.vayishaa.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.UserCourseRepository;

import com.yoga.vayishaa.Service.UserCourseService;
import com.yoga.vayishaa.dto.request.CourseRequest;
import com.yoga.vayishaa.dto.request.UserCourseRequest;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;
import com.yoga.vayishaa.model.Course;
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
        .course_name(user.getCourse_name()) // Assuming Course entity has an 'id' field
        .duration(user.getDuration())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<UserCourseResponse>builder()
        .message("User data fetched successfully!")
          .data(userCourseResponses)
          .build();
        
    }

    
    @Override
    public BasicResponse<UserCourseResponse> deleteusercourse(String usercourse_id) {
       
        if (userCourseRepository.existsById(usercourse_id)) {
          userCourseRepository.deleteById(usercourse_id);
            return BasicResponse.<UserCourseResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } else {
            return BasicResponse.<UserCourseResponse>builder()
                .message("Booking not found with ID: " + usercourse_id)
                .build();
        }
    }


      @Override
    public RegisterResponse addCourse(UserCourseRequest request) {
    
        var user=UserCourse.builder()
                .course_name(request.getCourse_name())
                .duration(request.getDuration())
                .user_name(request.getUser_name())
                .build();
                userCourseRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("course create successfully!")
        .build();
    }

}
