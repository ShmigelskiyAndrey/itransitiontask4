import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import FormaSignIn from "../FormaSignIn/FormaSignIn";
import FormaSignUp from "../FormaSignUp/FormaSignUp";
import styles from "./Authorization.module.css";
import Button from "react-bootstrap/Button";

export default function Authorization() {
  return (
    <div className="vw-100  vh-100 d-flex flex-column justify-content-center align-items-center h-100">
      <div className={styles.obertka}>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className={`mb-3  ${styles.tabs}`}
          justify
        >
          <Tab eventKey="home" title="Sign in" className="w-100 ">
            <FormaSignIn className="d-flex flex-column justify-content-center align-items-center" />
            <Button variant="primary" className="w-100">
              Sign in
            </Button>
          </Tab>
          <Tab eventKey="profile" title="Sign up" className="w-100 ">
            <FormaSignUp className="d-flex flex-column justify-content-center align-items-center" />
            <Button variant="primary" className="w-100">
              Sign up
            </Button>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
