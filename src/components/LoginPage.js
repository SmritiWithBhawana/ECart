import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const emailId = useRef("");

  const printEmailAd = (e) => {
    let PrintedEmailID = e.target.value;
    emailId.current = PrintedEmailID;
    setEmail(PrintedEmailID);
  };

  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          Email address: <span>{email}</span>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={printEmailAd}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" href="/welcome">
        Submit
      </Button>
    </Form>
  );
}

export default LoginPage;
