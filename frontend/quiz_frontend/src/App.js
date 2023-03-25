import React, { useState } from 'react';
import QuizForm from './components/QuizForm';
import Quiz from './components/Quiz';
import Finished from './components/Finished';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  let [isFinished, setIsFinished] = useState(false)

  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={!isFinished ? <Quiz setIsFinished={setIsFinished}/> : <Finished />} />
            <Route path="admin" element={<QuizForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
