package com.yoga.vayishaa.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Course {
    @Id
   @GeneratedValue(strategy=GenerationType.UUID)
   private String course_id;

   @Column(nullable=false)
   private String duration;
    @Column(nullable=false)
    private String institution;
    @Column(nullable=false)
    private String course_name;

    
    @OneToMany(mappedBy = "course")
    private List<UserCourse> userCourses;

    

   
}
