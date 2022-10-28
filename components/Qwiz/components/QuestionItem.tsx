import React from 'react';
import s from '../Qwiz.module.css';

interface QuestionItemProps {
  setBackground: (index: number) => string | undefined;
  answer: string;
  answerOption: string;
  index: number;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const QuestionItem = ({
  setBackground,
  answer,
  answerOption,
  index,
  handleClick,
}: QuestionItemProps) => {
  return (
    <li
      style={{
        background: setBackground(index),
      }}
      className={answer === answerOption ? s.active : ''}
      onClick={handleClick}
    >
      {answerOption}
    </li>
  );
};
