package com.yoga.vayishaa.Service;

import com.yoga.vayishaa.dto.response.BasicResponse;
import com.yoga.vayishaa.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
