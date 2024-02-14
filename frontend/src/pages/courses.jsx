import { useState, useEffect } from 'react';

import CustomNavbar from '../components/CustomNavbar';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { courseList } from '../services/user';
export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
}, []);

const fetchCourses = () => {
    courseList()
        .then(response => {
            setCourses(response.data.data);
        })
        .catch(error => {
            console.error("Error fetching courses:", error);
        });
};
  return (
   
      <>
      <CustomNavbar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.map(course => (
          <Card
            key={course.course_id} // Assuming course_id is unique
            sx={{ maxWidth: 345, margin: '20px' }}
          >
            <CardMedia component="img" alt={course.course_name} height="160" src={course.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {course.course_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`/admission`}>Enroll</Link>
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
