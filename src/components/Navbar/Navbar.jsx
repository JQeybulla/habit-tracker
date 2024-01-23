import React from 'react';
import './Navbar.scss';
import {Col, Row} from "react-bootstrap";
import {Avatar} from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { auth } from "../../config/firebase";

function Navbar(props) {
    return (
      <section id='navbar'>
        <Row>
          <Col className='display-flex align-items-center'>
            <div className="navbarLeft">
              <h3>Qeybulla's habit tracker</h3>
            </div>
          </Col>
          <Col>
            <div className="navbarRight">
              <h6>{ auth?.currentUser?.email }</h6>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>Q</Avatar>
            </div>
          </Col>
        </Row>
      </section>
    );
}

export default Navbar;
