package com.yoga.vayishaa.Service;

import com.yoga.vayishaa.dto.request.PaymentRequest;

import com.yoga.vayishaa.dto.response.RegisterResponse;


public interface PaymentService {
   public RegisterResponse addPayment(PaymentRequest request);

}
