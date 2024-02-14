package com.yoga.vayishaa.Service.impl;

import org.springframework.stereotype.Service;

import com.yoga.vayishaa.Repository.PaymentRepository;
import com.yoga.vayishaa.Service.PaymentService;

import com.yoga.vayishaa.dto.request.PaymentRequest;

import com.yoga.vayishaa.dto.response.RegisterResponse;

import com.yoga.vayishaa.model.Payment;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService{
    private final PaymentRepository paymentRepository;
     @Override
    public RegisterResponse addPayment(PaymentRequest request) {
        var user=Payment.builder()
                .amount(request.getAmount())
                // .user(User.builder().id(request.getUser_id()).build())
                // .usercourses(UserCourse.builder().userCourse_id(request.getUsercourse_id()).build())
                // .usercourse_id(request.getUsercourse_id())
                .build();
                paymentRepository.save(user);
        // throw new UnsupportedOperationException("Unimplemented method 'register'");
        return RegisterResponse.builder()
        .message("payment create successfully!")
        .build();
    }
  
}
