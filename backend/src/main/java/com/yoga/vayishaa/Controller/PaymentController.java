package com.yoga.vayishaa.Controller;

import static com.yoga.vayishaa.utils.MyConstant.PAYMENTLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yoga.vayishaa.Service.PaymentService;

import com.yoga.vayishaa.dto.request.PaymentRequest;

import com.yoga.vayishaa.dto.response.RegisterResponse;
import com.yoga.vayishaa.utils.MyConstant;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RequestMapping(MyConstant.Pay)
@RestController
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
     @PostMapping(PAYMENTLIST)
       public ResponseEntity<RegisterResponse> addPayment(@RequestBody PaymentRequest request)
       {
           RegisterResponse response=new RegisterResponse();
           try{
                response=paymentService.addPayment(request);
                return new ResponseEntity<>(response,HttpStatus.OK);
           }catch(Exception e)
           {    
            //    System.out.print(e);
               response.setMessage("something went wrong!");
       
               // LoginResponse.builder().message("Something went wrong!").token("").build();
               return  new ResponseEntity<>(response,EXPECTATION_FAILED);
           }
       }
}
