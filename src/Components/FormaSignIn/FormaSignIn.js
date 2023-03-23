import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function FormaSignIn() {
  return (
    <div>
      <InputGroup className="mb-3 w-100">
        <Form.Control placeholder="Email" />
      </InputGroup>

      <InputGroup className="mb-3 w-100">
        <Form.Control type="password" placeholder="Password" />
      </InputGroup>
    </div>
  );
}
