package com.yoga.vayishaa.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponse {
    private String course_id;
    private String duration;
    private String institution;
    private String course_name;
    private String description;
    private String image;

}
