
import '../assets/css/signup.css';
import { Link } from 'react-router-dom';
import { Form, ButtonToolbar, Button, Stack, SelectPicker, Input} from 'rsuite';

import { useState } from 'react';
// eslint-disable-next-line react/display-name
import { adduserCourse } from '../services/user';


const data = ['2 months','3 months','6 months'].map(
    item => ({ label: item, value: item })
  );
  const data1 = ['Bikram yoga','Anusara yoga','Givamukthi yoga','Hathi yoga','Ashtanga yoga','vinsaya yoga'].map(
    item => ({ label: item, value: item })
  );
const Admission = () => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
 

  // const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handleNameChange = (value) => {
    setUserName(value);
};

 

const handleCourseChange = (value) => {
  setCourse(value);
};
const handleDurationChange = (value) => {
  setDuration(value);
};

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          user_name: username ,
          email: email,
          course_name : course,
           duration : duration


      }
      adduserCourse(form)
          .then(() => {
              
              // sessionStorage.setItem('token', res.data.token);
              setUserName("");
              setEmail("");
              setDuration("");
              setCourse("");
              
          })
          .catch((err) => {
            setUserName("");
            setEmail("");
            setDuration("");
            setCourse("");
              console.log(err);
             
          });
  };

  return(
  <>
  <div className='gif'>

 </div>
 <div className='sig'>
  <Form>
    <h1 style={{marginLeft:"-300px"}}>Admission form</h1>
    <br/>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control  placeholder="UserName" name="username" autoComplete="off" onChange={handleNameChange} value={username}/>
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email} />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="mobile">
      <Form.ControlLabel>Mobile No</Form.ControlLabel>
      <Form.Control name="mobile"  />
      <Form.HelpText tooltip>Mobile no is required</Form.HelpText>
    </Form.Group>
    
    <Form.Group controlId="password">
    <Form.ControlLabel>Duration</Form.ControlLabel>
    <Stack spacing={10} direction="column" alignItems="flex-start">
  
    <SelectPicker
      data={data}
      searchable={false}
      style={{ width: 224 }}
      placeholder="Select your duration"
      name="duration" autoComplete="off" onChange={handleDurationChange} value={duration}
    />
  </Stack>
  </Form.Group>
  <Form.Group controlId="password">
    <Form.ControlLabel>Course Name</Form.ControlLabel>
    <Stack spacing={10} direction="column" alignItems="flex-start">
  
    <SelectPicker
      data={data1}
      searchable={false}
      style={{ width: 224 }}
      placeholder="Select your course"
      name="course" autoComplete="off" onChange={handleCourseChange} value={course}
    />
  </Stack>
  </Form.Group>
  {/* <Form.Group controlId="textarea">
      <Form.ControlLabel>Health Information</Form.ControlLabel>
      <Form.Control rows={5} name="textarea" accepter={Textarea} />
    </Form.Group> */}
    <Form.Group>
      <ButtonToolbar>
        <Link to="/payment"><Button appearance="primary" onSubmit={handleFormSubmit}>Submit</Button></Link>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>

  
  

  </div>
  </>
  );
  };
export default Admission;
