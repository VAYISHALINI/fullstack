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

   @Column(nullable=true)
   private String duration;
   @Column(nullable=true)
   private String description;
    @Column(nullable=true)
    private String institution;
    @Column(nullable=true)
    private String course_name;
    @Column(nullable=true)
    private String image;

    
 

}
