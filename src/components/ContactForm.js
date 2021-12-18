import React from 'react'
import { Form,  Button } from 'react-bootstrap'
import emailjs from 'emailjs-com'

const ContactForm = props => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_flalmf3','template_cjxu76w', e.target, 'user_EBgfHBnyIaWEhqu6jcd9I')
        .then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }

    return (
        <div className="contactformbackground">
            <Form onSubmit={sendEmail} className="contactform">
                <h1 className="contactmeheading">Contact Me</h1>
                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="visitorname" placeholder="Full Name" required/>
                    </Form.Group>
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  name="visitoremail" placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text"  name="subject" placeholder="Reason of Approach" required/>
                    </Form.Group>
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Phone/Mobile Number</Form.Label>
                        <Form.Control type="number"  name="contact" placeholder="+49 123 456 7890" required/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please describe shortly here...</Form.Label>
                        <Form.Control as="textarea"  name="message" placeholder="Write here" rows={3} required/>
                    </Form.Group>
                    <Button className="sidebar__item sidebar__email mb-2" type="submit">
                        Submit
                    </Button>
            </Form>
        </div>
    )
}

export default ContactForm;
