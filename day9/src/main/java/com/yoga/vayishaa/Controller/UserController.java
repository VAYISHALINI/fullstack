package com.yoga.vayishaa.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.vayishaa.Service.UserService;
import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserResponse;
import lombok.RequiredArgsConstructor;
import static com.yoga.vayishaa.utils.MyConstant.USERLIST;
import static com.yoga.vayishaa.utils.MyConstant.User;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


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
   
   
}
