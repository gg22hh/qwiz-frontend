import Image from 'next/image';
import React, { useState } from 'react';
import { Question } from '../components/Qwiz/components/Question';
import { QuestionType } from '../components/Qwiz/models';
import s from '../components/Qwiz/Qwiz.module.css';
import { data } from '../data.js';
import bg from '../static/images/16161.jpg';

const Qwiz = () => {
  const [counter, setCounter] = useState(1);
  const [questions, setQuestions] = useState<QuestionType[]>(data);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const questionList = questions.map((question) => {
    return (
      counter === +question.id && (
        <Question
          key={question.id}
          {...question}
          handleCounter={handleCounter}
        />
      )
    );
  });
  return (
    <>
      <div className={s.background}>
        <Image src={bg} fill placeholder="blur" alt="bg" />
      </div>
      <div className={s.main}>
        <h1 className={s.title}>Игра Престолов</h1>
        {questionList}
      </div>
    </>
  );
};

export default Qwiz;
