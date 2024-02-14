package com.yoga.vayishaa.dto.response;

import com.yoga.vayishaa.enumerated.Role;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
@AllArgsConstructor
public class UserResponse {
    private String id;
   private String name;
   private String email;
    private Role role;
    private String image;
    private Long phoneNumber;

   
    
   

}
