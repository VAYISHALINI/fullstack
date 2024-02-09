package com.yoga.vayishaa.model;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
   @ManyToOne
   @JoinColumn(name="course_id")
   private Course course;

   
   @ManyToOne
   @JoinColumn(name="user_id")
   private User user;

   @OneToMany(mappedBy = "usercourses")
    private List<Payment> payments;

}
