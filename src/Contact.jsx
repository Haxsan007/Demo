import React, { useState } from 'react';
import { Form , Button} from 'react-bootstrap';

const Contact = () => {

  const [data, SetData] = useState({
    fullname: "",
    phoneno: "",
    email: "", 
    message: "",
  });

  const InputEvent =(event ) =>{
    const {name, value} = event.target;
    SetData((preval)=>{
      return{
        ...preval, 
        [name]:value,
      }
    })
    
  }
  const formsubmit = (e) =>{
    e.preventDefault();
    alert(`I'm ${data.fullname}. ${data.phoneno} It's my Phone No. And this is my email ${data.email}. I just want to say ${data.message}`);  
    
  }


  return (
    <div>
      <div className='my-3'>
        <h1 className='text-center'>Contact Us!</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <Form   onSubmit={formsubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Your Phone No</Form.Label>
                <Form.Control type="number" name='phoneno' value={data.phoneno} onChange={InputEvent} placeholder="+923000000000" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label >Your Message</Form.Label>
                <Form.Control as="textarea" rows={3}  name='message' value={data.message} onChange={InputEvent} placeholder="Type your Message"/>
              </Form.Group>
              <Button type="submit" variant="outline-success">Submit form</Button>
              </Form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;
