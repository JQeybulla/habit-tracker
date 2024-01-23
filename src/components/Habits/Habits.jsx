import React, {useEffect, useState} from 'react';
import './Habits.scss';
import {Col, Container, Row} from "react-bootstrap";
import Habit from "./Habit/Habit";
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import AddHabitModal from "./AddHabitModal/AddHabitModal";
function Habits(props) {
  const [habitList, setHabitList] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const habitListRef = collection(db, 'habits');

  useEffect(() => {
    getHabitList();
  }, []);

  const getHabitList = async () => {
    console.log('Hello world');
    try {
      const receivedHabitsList = await getDocs(habitListRef);
      const filteredHabitList = receivedHabitsList.docs.map(
        (doc) => {
          return {
            ...doc.data(),
            id: doc.id
          }
        }
      );

      setHabitList(filteredHabitList);
      console.log(habitList);
    } catch (e) {
      console.log('Error occurred!');
      console.error(e);
    }
  }
  return (
    <section id='habits'>
      <Container>
        <Row>
          <h1 className='display-flex justify-content-center'>Manage your habits</h1>
        </Row>
      </Container>
      <Container>
        <Row>
          <div className="addHabitButton display-flex justify-content-end">
            <button
              className='btn btn-outline-light'
              onClick={() => {
                console.log('Hello world');
                setModalShow(true)
              }}>
              Add habit
            </button>
          </div>
        </Row>

      </Container>
      <Container>
        <AddHabitModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Row>
          {habitList && habitList.map((habit) => {
            return (
              <Col lg={3} md={6} sm={12} key={habit.id}>
                <Habit
                  title={habit.title}
                  createDate={habit.createDate}
                ></Habit>
              </Col>)
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Habits;
