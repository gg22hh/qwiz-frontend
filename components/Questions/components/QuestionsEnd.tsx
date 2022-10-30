import Image, { StaticImageData } from 'next/image';
import React from 'react';
import s from '../Questions.module.css';
import { MarksType } from '../models';

interface QuizEndProps {
  rightAnswers: number;
  totalQuestions: number;
  marks: MarksType;
  endImage: StaticImageData;
}

export const QuizEnd = ({
  rightAnswers,
  totalQuestions,
  marks,
  endImage,
}: QuizEndProps) => {
  const markText = () => {
    if (rightAnswers <= totalQuestions && rightAnswers >= totalQuestions - 2) {
      return marks.best;
    } else if (
      rightAnswers > totalQuestions / 2 &&
      rightAnswers < totalQuestions - 2
    ) {
      return marks.good;
    } else {
      return marks.bad;
    }
  };
  return (
    <div className={s.box}>
      <Image
        src={endImage}
        alt="ip end"
        width={600}
        className={s.image}
        placeholder="blur"
      />
      <h1 className={s.mark}>
        {rightAnswers}/{totalQuestions}
      </h1>
      <div className={s.markText}>{markText()}</div>
    </div>
  );
};
