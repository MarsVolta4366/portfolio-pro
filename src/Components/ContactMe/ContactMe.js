import "./ContactMe.css"
import { Form, Button, InputGroup, FormControl, FloatingLabel, Alert } from "react-bootstrap"
import { Send } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Result = () => {
    return (
        <Alert variant={"success"} style={{marginTop: "20px"}}>
            Thanks for the message! I'll get back to you as soon as possible.
        </Alert>
    )
}

export default function ContactMe() {

    let [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dq64wyi', 'template_zl69gy6', e.target, 'user_Knvt3cfypK9FqZMBLgV6s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset()
        showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 15000)

    return (
        <div className="myContainer">
            <div className="myHeader">
                <h1>CONTACT ME</h1>
            </div>
            <div className="myContent">
                <Form action="" onSubmit={sendEmail}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Full Name</InputGroup.Text>
                        <FormControl name="fullName" required placeholder="Full Name" aria-label="First name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl name="email" required placeholder="Email" aria-label="Email" />
                    </InputGroup>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Type your message here"
                                style={{ height: '100px' }}
                                name="message"
                                required
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Send <Send color="white" />
                    </Button>
                    <div>
                        {result ? <Result /> : null}
                    </div>
                </Form>
            </div>
        </div>
    )
}