import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const App = () => {
  const [questions] = useState(data);
  return (
    <main className='py-100'>
      <div className='container'>
        <h2 className='heading'>Netflix FAQ</h2>
        <div className='row '>
          <div className='col-lg-7 mx-auto'>
            <div className='faq'>
              {questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
