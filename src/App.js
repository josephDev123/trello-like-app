import React from 'react';
import './component/app.css'
import Header from './component/Header';
import { useState, useRef } from 'react';
import Form from './component/Form';
import Board_wrapper from './component/Board_wrapper';
import Board from './component/Board';
// import { label} from './component/data';


function App() {
   return (
    <div className="container">
      <Header/>
      <Form />
      <Board_wrapper>
        <Board >
          hello hello  hello  hello hello hello hello hello hello hello
        </Board >
      </Board_wrapper >
    </div>
  );
}

export default App;
