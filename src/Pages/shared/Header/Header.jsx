import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container} from "react-bootstrap";


const Header = () => {
  return (
    <Container className="mb-4">
      <div className="text-center">
        <img src="../../../../public/assets/logo.png" alt="" />
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>

        <p> {moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
      <Button variant="danger">Latest</Button>
      <Marquee speed={100}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
      </div>
     
    </Container>
  );
};

export default Header;
