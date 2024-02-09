package com.yoga.vayishaa.Service;

import com.yoga.vayishaa.dto.request.CourseRequest;

import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.CourseResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;


public interface CourseService {
    BasicResponse<CourseResponse> getAllCourse();
     RegisterResponse addCourse(CourseRequest request);
    // BasicResponse<RegisterResponse> deletecourse(String course_id);
    BasicResponse<CourseResponse> deletecourse(String course_id);
    // BasicResponse<CourseResponse> updateCourse(String course_id,CourseRequest request);
}
