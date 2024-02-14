package com.yoga.vayishaa.Service;



import com.yoga.vayishaa.dto.request.UserCourseRequest;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;

public interface UserCourseService {
   BasicResponse<UserCourseResponse> getAllUserCourse();
   BasicResponse<UserCourseResponse> deleteusercourse(String usercourse_id);
   RegisterResponse addCourse(UserCourseRequest request) ;
}
