import React from 'react';
import '../assets/css/signup.css';
import { Form, ButtonToolbar, Button, Stack, SelectPicker, Input} from 'rsuite';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);


const data = ['Male','Female'].map(
    item => ({ label: item, value: item })
  );
const Signup = () => (
  <>
  <div className='gif'>

 </div>
 <div className='sig'>
  <Form>
    <h1 style={{marginLeft:"-400px"}}>Register</h1>
    <br/>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="password">
    <Form.ControlLabel>Gender</Form.ControlLabel>
    <Stack spacing={10} direction="column" alignItems="flex-start">
  
    <SelectPicker
      data={data}
      searchable={false}
      style={{ width: 224 }}
      placeholder="Select your gender"
    />
   
  </Stack>
  </Form.Group>
  <Form.Group controlId="textarea">
      <Form.ControlLabel>Health Information</Form.ControlLabel>
      <Form.Control rows={5} name="textarea" accepter={Textarea} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Link to="/login"><Button appearance="primary">Submit</Button></Link>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </>
);
export default Signup;
