package com.yoga.vayishaa.Service;


import com.yoga.vayishaa.dto.request.LoginRequest;
import com.yoga.vayishaa.dto.request.RegisterRequest;
import com.yoga.vayishaa.dto.response.LoginResponse;
import com.yoga.vayishaa.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);
    LoginResponse login(LoginRequest request);
}
