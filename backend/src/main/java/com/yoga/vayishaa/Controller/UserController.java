package com.yoga.vayishaa.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.vayishaa.Service.UserService;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserCourseResponse;
import com.yoga.vayishaa.dto.response.UserResponse;
import com.yoga.vayishaa.utils.MyConstant;

import lombok.RequiredArgsConstructor;
import static com.yoga.vayishaa.utils.MyConstant.USERLIST;
import static com.yoga.vayishaa.utils.MyConstant.User;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RequestMapping(User)
@RestController
@RequiredArgsConstructor
public class UserController {
       private final UserService userService;
       @GetMapping(USERLIST)
       public ResponseEntity<BasicResponse<UserResponse>> create() {
        BasicResponse<UserResponse> response=new BasicResponse<>();


           try {
               response=userService.getAllUser();
               return new ResponseEntity<>(response, OK);
           } catch (Exception e) {
               response.setMessage("Something went wrong!");
               return new ResponseEntity<>(response, EXPECTATION_FAILED);
           }
       }
   

         @DeleteMapping(MyConstant.DELETEUSER + "/{user_id}")
    public ResponseEntity<BasicResponse<UserCourseResponse>> deleteusercourse(@PathVariable String user_id) {
        BasicResponse<UserCourseResponse> response = new BasicResponse<>();
        try {
            BasicResponse<UserCourseResponse> deletedBookingResponse = userService.deleteuser(user_id);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete course: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   
}
