import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const QuizForm = () => {
  const [questionText, setQuestionText] = useState('');

  const handleClick = async (event) => {
    event.preventDefault();
    await axios.post('/api/question/', { text: questionText });
    setQuestionText('');
  };

  return (
    <div className="card">
      <Card>
        <Card.Header >
          Admin Page
        </Card.Header>
        <Card.Body>
          <Form>
            <div className="field">
              <Form.Label
              className=""
              type="text"
              />
              <Form.Control type="text" placeholder="Enter a new question..." 
              value={questionText}
              onChange={(event) => setQuestionText(event.target.value)}/>
            </div>
            <Button type="submit" variant="primary" onClick={handleClick}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default QuizForm;
