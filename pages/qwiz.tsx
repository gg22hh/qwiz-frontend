import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { Question } from '../components/Qwiz/components/Question';
import { QuizEnd } from '../components/Qwiz/components/QuizEnd';
import { QuestionType } from '../components/Qwiz/models';
import s from '../components/Qwiz/Qwiz.module.css';
import { data } from '../data.js';
import bg from '../static/images/16161.jpg';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import useSound from 'use-sound';

const Qwiz = () => {
  const [counter, setCounter] = useState(1);
  const [questions, setQuestions] = useState<QuestionType[]>(data);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [isSoundPlay, setIsSoundPlay] = useState(false);
  const [play, { stop }] = useSound('/static/images/ip/ip-audio.mp3');

  const handleSetRightAnswers = () => {
    setRightAnswers((prev) => prev + 1);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handlePlaySound = () => {
    if (!isSoundPlay) {
      play();
      setIsSoundPlay(true);
    } else {
      stop();
      setIsSoundPlay(false);
    }
  };

  const questionList = questions.map((question) => {
    return (
      counter === +question.id && (
        <Question
          key={question.id}
          {...question}
          total={questions.length}
          handleSetRightAnswers={handleSetRightAnswers}
          handleCounter={handleCounter}
        />
      )
    );
  });
  return (
    <>
      <Head>
        <title>Qwiz</title>
      </Head>
      <div className={s.background}>
        <Image src={bg} fill placeholder="blur" alt="bg" />
      </div>
      <div className={s.main}>
        <button className={s.sound} onClick={handlePlaySound}>
          {isSoundPlay ? (
            <VolumeUpIcon fontSize="large" />
          ) : (
            <VolumeOffIcon fontSize="large" />
          )}
        </button>
        <h1 className={s.title}>Игра Престолов</h1>
        {questionList}
        {counter > questions.length && (
          <QuizEnd
            rightAnswers={rightAnswers}
            totalQuestions={questions.length}
          />
        )}
      </div>
    </>
  );
};

export default Qwiz;
