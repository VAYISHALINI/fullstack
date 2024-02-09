package com.yoga.vayishaa.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Payment {
    @Id
   @GeneratedValue(strategy=GenerationType.UUID)
   private String payment_id;

   @Column(nullable=false)
   private Long amount;
   
   @ManyToOne
   @JoinColumn(name="user_id")
   private User user;
    
   @ManyToOne
   @JoinColumn(name="usercourse_id")
   private UserCourse usercourses;


  


}
