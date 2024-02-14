package com.yoga.vayishaa.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserCourse {
     @Id
   @GeneratedValue(strategy=GenerationType.UUID)
   private String userCourse_id;
   @Column(nullable=true)
   private String user_name;
  @Column(nullable=true)
   private String course_name;
   @Column(nullable=true)
   private String duration;





}
