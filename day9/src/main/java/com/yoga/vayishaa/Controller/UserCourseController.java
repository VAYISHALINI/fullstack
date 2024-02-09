package com.yoga.vayishaa.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.vayishaa.Service.UserCourseService;

import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;

import com.yoga.vayishaa.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RequestMapping(MyConstant.User)
@RestController
@RequiredArgsConstructor
public class UserCourseController {
     private final UserCourseService userCourseService;
       @GetMapping(MyConstant.USERCOURSELIST)
       public ResponseEntity<BasicResponse<UserCourseResponse>> create() {
        BasicResponse<UserCourseResponse> response=new BasicResponse<>();


           try {
               response=userCourseService.getAllUserCourse();
               return new ResponseEntity<>(response, OK);
           } catch (Exception e) {
               response.setMessage("Something went wrong!");
               return new ResponseEntity<>(response, EXPECTATION_FAILED);
           }
       }
   
   
}
