package com.yoga.vayishaa.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserCourseRequest {
     private String userCourse_id;
     private String course_id;
     private String user_id;

}







