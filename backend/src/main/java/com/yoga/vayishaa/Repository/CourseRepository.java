package com.yoga.vayishaa.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.yoga.vayishaa.model.Course;

public interface CourseRepository extends JpaRepository<Course,String>{
    
}
