import "./ContactMe.css"
import { Form, Button, InputGroup, FormControl, FloatingLabel } from "react-bootstrap"
import { Github, Linkedin, Send } from "react-bootstrap-icons";

export default function ContactMe() {
    return (
        <div className="myContainer">
            <div className="myHeader">
                <h1>CONTACT ME</h1>
            </div>
            <div className="myContent">
                <Form>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Name</InputGroup.Text>
                        <FormControl aria-label="First name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Email</InputGroup.Text>
                        <FormControl aria-label="Email" />
                    </InputGroup>
                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Type your message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Send <Send color="white" />
                    </Button>
                </Form>
            </div>
        </div>
    )
}