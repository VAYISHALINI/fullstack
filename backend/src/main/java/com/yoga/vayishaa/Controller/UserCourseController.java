package com.yoga.vayishaa.Controller;

import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.vayishaa.Service.UserCourseService;
import com.yoga.vayishaa.dto.request.CourseRequest;
import com.yoga.vayishaa.dto.request.UserCourseRequest;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;
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
   

    @DeleteMapping(MyConstant.DELETEUSERCOURSE + "/{usercourse_id}")
    public ResponseEntity<BasicResponse<UserCourseResponse>> deleteusercourse(@PathVariable String usercourse_id) {
        BasicResponse<UserCourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserCourseResponse> deletedBookingResponse = userCourseService.deleteusercourse(usercourse_id);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete course: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

      @PostMapping(MyConstant.ADDUSERCOURSE)
       public ResponseEntity<RegisterResponse> login(@RequestBody UserCourseRequest request)
       {
           RegisterResponse response=new RegisterResponse();
           try{
                response=userCourseService.addCourse(request);
                return new ResponseEntity<>(response,HttpStatus.OK);
           }catch(Exception e)
           {    
               response.setMessage("something went wrong!");
       
               // LoginResponse.builder().message("Something went wrong!").token("").build();
               return  new ResponseEntity<>(response,EXPECTATION_FAILED);
           }
       }

   
}
