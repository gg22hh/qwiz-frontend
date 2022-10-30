import React from 'react';
import s from '../Questions.module.css';

interface QuestionItemProps {
  setBackground: (index: number) => string | undefined;
  answer: string;
  answerOption: string;
  index: number;
  disable: boolean;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export const QuestionItem = ({
  setBackground,
  answer,
  answerOption,
  index,
  disable,
  handleClick,
}: QuestionItemProps) => {
  return (
    <button
      disabled={disable}
      style={{
        background: setBackground(index),
      }}
      className={answer === answerOption ? s.active : ''}
      onClick={handleClick}
    >
      {answerOption}
    </button>
  );
};
