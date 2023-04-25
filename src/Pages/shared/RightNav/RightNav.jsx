import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../../QZone/QZone";

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-dark">
        {" "}
        <FaGithub /> Login With GitHub
      </Button>

      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="p-4 position-relative">
        <img src="../../../public/assets/bg.png" alt="" />
        <div className="text-center position-absolute top-50 start-50 translate-middle text-white">
                <h3>
                Create an Amazing Newspaper
                </h3>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
