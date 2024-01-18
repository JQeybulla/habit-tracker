import React, {useEffect, useState} from 'react';
import './Home.scss';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
function Home(props) {
  const [phrase, setPhrase] = useState(null);
  const [author, setAuthor] = useState(null);
  const [currentTime, setCurrntTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrntTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    console.log('Hello world');
    getPhrase();
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  const getPhrase = () => {
    const headers = {
      'X-Api-Key': 'TQQrwQJqoQGXN6aq6pcgJw==BUs8rHmin9V6AK0p'
    }
    axios.get('https://api.api-ninjas.com/v1/quotes?category=inspirational', {headers})
      .then(res => {
        setPhrase(res.data[0].quote);
        setAuthor(res.data[0].author);
      })
      .catch(err => console.log(err));
  }
  return (
    <section id='home'>
      <Navbar />
      <Row>
        <Col>
          <div className="button">
            <Button variant='outlined' className='goToHabits'>
              <Link className='habits' to='habits'>My habits</Link>
            </Button>
          </div>
        </Col>
      </Row>
      <Row className='timeAndPhrase'>
        <Col lg={6} md={6} sm={6}>
          <div className="time">
            <p>{formattedTime}</p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6} className='display-flex align-items-center justify-content-end'>
          <div className="phrase">
            <p className='quote'>{phrase}</p>
            <p className='author'>{author}</p>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Home;
