import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const Quiz = ({setIsFinished}) => {
  let [answer, setAnswer] = useState('');
  let [prompts, setPrompts] = useState([]);
  let [currPrompt, setCurrPrompt] = useState('')
  let [currPromptId, setCurrPromptId] = useState('')

  const THREE_MINUTE_MS = 180000;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/question/?format=json');
      setPrompts(result.data);
      setCurrPrompt(result.data[0])
      setCurrPromptId(0)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => moveToNextQuestion(), THREE_MINUTE_MS);
    return () => clearInterval(interval);
  }, [currPrompt])

  const handleClick = async (event) => {
    event.preventDefault();
    await axios.post('/api/answer/', { question_text: currPrompt.text, answer_text: answer });
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    let nextPromptId = currPromptId + 1
    if (nextPromptId >= prompts.length) {
      setIsFinished((true))
    }
    let nextPrompt = prompts[nextPromptId]
    setCurrPromptId(nextPromptId)
    setCurrPrompt(nextPrompt);
    setAnswer("")
  }

  return (
    <div className="card">
      <Card>
        <Card.Header >
          {currPrompt.text} Question {currPromptId+1} of {prompts.length}
        </Card.Header>
        <Card.Body>
          <Form>
            <div className="field">
              <Form.Label
              className=""
              type="text"
              />
              <Form.Control type="response" placeholder="Enter your response..." 
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}/>
            </div>
            <Button type="submit" variant="primary" onClick={handleClick}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Quiz;
