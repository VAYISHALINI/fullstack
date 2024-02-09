package com.yoga.vayishaa.Service;

import com.yoga.vayishaa.dto.response.BasicResponse;

import com.yoga.vayishaa.dto.response.UserCourseResponse;

public interface UserCourseService {
   BasicResponse<UserCourseResponse> getAllUserCourse();
}
