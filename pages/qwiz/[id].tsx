import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Question } from '../../components/Questions/components/Question';
import { QuizEnd } from '../../components/Questions/components/QuestionsEnd';
import s from '../../components/Questions/Questions.module.css';
import { data } from '../../data.js';
import { useRouter } from 'next/router';
import { DataType } from '../../components/Questions/models';

const Questions = () => {
  const router = useRouter();
  const { id } = router.query;
  const [qwiz, setQwiz] = useState<DataType>();
  const [counter, setCounter] = useState(1);
  const [rightAnswers, setRightAnswers] = useState(0);
  const questions = qwiz?.questions;

  useEffect(() => {
    const currentQwiz = data.filter((item) => item.id === id);
    console.log(currentQwiz[0]);
    setQwiz(currentQwiz[0]);
  }, [id]);

  const handleSetRightAnswers = () => {
    setRightAnswers((prev) => prev + 1);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const questionList = questions?.map((question) => {
    return (
      counter === +question.id && (
        <Question
          key={question.id}
          {...question}
          total={questions?.length}
          handleSetRightAnswers={handleSetRightAnswers}
          handleCounter={handleCounter}
        />
      )
    );
  });
  return (
    <>
      <Head>
        <title>{qwiz?.name}</title>
      </Head>

      <div className={s.background}>
        {qwiz && (
          <Image
            className={s.img}
            src={qwiz?.background}
            fill
            placeholder="blur"
            alt="bg"
          />
        )}
      </div>
      <div className={s.main}>
        <h1 className={s.title}>{qwiz?.name}</h1>
        {questionList}
        {questions && counter > questions?.length && (
          <QuizEnd
            rightAnswers={rightAnswers}
            totalQuestions={questions?.length}
            marks={qwiz.marks}
            endImage={qwiz.endImage}
          />
        )}
      </div>
    </>
  );
};

export default Questions;
