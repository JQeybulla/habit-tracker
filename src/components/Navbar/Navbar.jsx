import React from 'react';
import './Navbar.scss';
import {Col, Row} from "react-bootstrap";
import {Avatar} from "@mui/material";
import { deepOrange } from '@mui/material/colors';

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
              <Avatar sx={{ bgcolor: deepOrange[500] }}>Q</Avatar>
            </div>
          </Col>
        </Row>
      </section>
    );
}

export default Navbar;
