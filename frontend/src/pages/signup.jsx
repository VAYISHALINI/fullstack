import React from 'react';
import '../assets/css/signup.css';
import { Form, ButtonToolbar, Button, Stack, SelectPicker, Input} from 'rsuite';
import { Link } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


const data = ['Male','Female'].map(
    item => ({ label: item, value: item })
  );
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [healthinformation, setHealthinformation] = useState("");

  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handleNameChange = (value) => {
    setName(value);
};

  const handlePasswordChange = (value) => {
    setPassword(value);
};

const handleGenderChange = (value) => {
  setGender(value);
};
const handleHealthChange = (value) => {
  setHealthinformation(value);
};

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          name: name ,
          email: email,
          password: password,
          gender : gender,
          healthinformation : healthinformation


      }
      signUp(form)
          .then(() => {
              
              // sessionStorage.setItem('token', res.data.token);
              setName("");
              setEmail("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              navigate('/login');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              console.log(err);
             
          });
  };
  return(
  <>
  <div className='gif'>

 </div>
 <div className='sig'>
  <Form>
    <h1 style={{marginLeft:"-400px"}}>Register</h1>
    <br/>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control placeholder="UserName" name="name" autoComplete="off" onChange={handleNameChange} value={name} />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email}  />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password} />
    </Form.Group>
    <Form.Group controlId="password">
    <Form.ControlLabel>Gender</Form.ControlLabel>
   
    <Stack spacing={10} direction="column" alignItems="flex-start">
  
    <SelectPicker
      data={data}
      searchable={false}
      style={{ width: 224 }}
      name="gender"  autoComplete="off" onChange={handleGenderChange} value={gender}
      placeholder="Select your gender"
    />
   
  </Stack>
  </Form.Group>
  <Form.Group controlId="textarea">
      <Form.ControlLabel>Health Information</Form.ControlLabel>
      <Form.Control rows={5} name="healthinformation" accepter={Textarea}  onChange={handleHealthChange} value={healthinformation} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Link to="/login"><Button appearance="primary"   onClick={handleFormSubmit}>Submit</Button></Link>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </>
);
};
export default Signup;
