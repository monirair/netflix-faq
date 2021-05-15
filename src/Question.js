import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const Question = ({ title, info, id }) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggle = (id) => {
    if (showInfo === id) {
      //if clicked question is already active, then close it
      return setShowInfo(null);
    }

    setShowInfo(id);
  };

  return (
    <article>
      <header onClick={() => toggle(id)}>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo === id ? <p>{info}</p> : null}
    </article>
  );
};

export default Question;
