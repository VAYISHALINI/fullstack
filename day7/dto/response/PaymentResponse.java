package com.yoga.vayishaa.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResponse {
  private String payment_id;
  private String user_id;
  private String usercourse_id;
  private Long amount;
}
