import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import fire from "../../fire";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../../assets/images/TwinkleToDos2.svg";

const HomeMenuComponent = () => {
  const handleLogout = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/home">
            <img src={Logo} alt="" width="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="ml-auto ">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="icon user circle"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Link to="/">
                      <Button onClick={handleLogout} variant="outline-danger">
                        Logout
                      </Button>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default HomeMenuComponent;
