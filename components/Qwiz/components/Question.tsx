import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import s from '../Qwiz.module.css';
import { QuestionItem } from './QuestionItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface QuestionProps {
  handleCounter: () => void;
  image: StaticImageData;
  question: string;
  answers: string[];
  rightAnswer: string;
  wrongExp: string;
  rightExp: string;
}

export const Question = ({
  handleCounter,
  image,
  question,
  answers,
  rightAnswer,
  wrongExp,
  rightExp,
}: QuestionProps) => {
  const [answer, setAnswer] = useState('');
  const [isAnswerRight, setIsAnswerRight] = useState(2);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnswer((e.target as HTMLElement).innerText);
  };

  const setBackground = (index: number) => {
    if (answer === answers[index]) {
      if (isAnswerRight === 0) {
        return 'red';
      } else if (isAnswerRight === 1) {
        return 'green';
      } else {
        return '';
      }
    }

    if (isAnswerRight === 0) {
      if (rightAnswer === answers[index]) {
        return 'green';
      }
    }
  };

  const handleSubmitAnswer = () => {
    if (answer === rightAnswer) {
      setIsAnswerRight(1);
    } else {
      setIsAnswerRight(0);
    }
  };

  const answersList = answers.map((answerOption, index) => {
    return (
      <QuestionItem
        key={answerOption}
        setBackground={setBackground}
        answer={answer}
        answerOption={answerOption}
        index={index}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className={s.box}>
      <Image
        src={image}
        alt="ip picture"
        width={600}
        className={s.image}
        placeholder="blur"
      />
      <h2 className={s.question}>{question}</h2>
      <ul className={s.answers}>{answersList}</ul>
      <div className={s.buttons}>
        <button className={s.button} onClick={handleSubmitAnswer}>
          Ответить
        </button>
        <button className={s.next} onClick={handleCounter}>
          <ArrowForwardIcon />
        </button>
      </div>

      <div className={s.exp}>
        {isAnswerRight === 0 && wrongExp}
        {isAnswerRight === 1 && rightExp}
      </div>
    </div>
  );
};
