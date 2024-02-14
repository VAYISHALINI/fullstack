package com.yoga.vayishaa.Service.impl;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.CourseRepository;

import com.yoga.vayishaa.Service.CourseService;
import com.yoga.vayishaa.dto.request.CourseRequest;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.CourseResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;
import com.yoga.vayishaa.model.Course;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {
  

    private final CourseRepository courseRepository;
   
    @Override
    public BasicResponse<CourseResponse> getAllCourse() {
        List<Course> courses = courseRepository.findAll();
        List<CourseResponse> courseResponses = courses.stream().map(course->CourseResponse.builder()
        .course_id(course.getCourse_id())
        .description(course.getDescription())
        .duration(course.getDuration())
        .institution(course.getInstitution())
        .course_name(course.getCourse_name())
        .image(course.getImage())
        .build())
        .collect(Collectors.toList()); 
        return BasicResponse.<CourseResponse>builder()
        .message("Course data fetched successfully!")
          .data(courseResponses)
          .build();
        
    }
   
    @Override
    public RegisterResponse addCourse(CourseRequest request) {
    
        var user=Course.builder()
                .course_name(request.getCourse_name())
                .duration(request.getDuration())
                .institution(request.getInstitution())
                .build();
                courseRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("course create successfully!")
        .build();
    }


  

    @Override
    public BasicResponse<CourseResponse> deletecourse(String course_id) {
       
        if (courseRepository.existsById(course_id)) {
            courseRepository.deleteById(course_id);
            return BasicResponse.<CourseResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } else {
            return BasicResponse.<CourseResponse>builder()
                .message("Booking not found with ID: " + course_id)
                .build();
        }
    }

}
