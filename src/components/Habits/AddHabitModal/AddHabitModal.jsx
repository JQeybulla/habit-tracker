import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AddHabitModal.scss';
import {CloseButton} from "react-bootstrap";
import {useState} from "react";

function AddHabitModal(props) {
  const [habitTitle, setHabitTitle] = useState('');
  const [habitDesc, setHabitDesc] = useState('');

  const onTitleInputChange = (e) => {
    setHabitTitle(e.target.value);
  }
  const onDescInputChange = (e) => {
    setHabitDesc(e.target.value);
  }
  const addHabit = async () => {
    console.log(habitTitle);
    console.log(habitDesc);
    console.log(new Date());

    setHabitTitle('');
    setHabitDesc('')
    props.onHide();
  }
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <CloseButton onClick={props.onHide}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title of new Habit</Form.Label>
              <Form.Control
                type="email"
                placeholder="My New Habit"
                autoFocus
                value={habitTitle}
                onChange={(e) => onTitleInputChange(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={habitDesc}
                onChange={(e) => onDescInputChange(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={addHabit}
          >
            Add Habit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddHabitModal;
