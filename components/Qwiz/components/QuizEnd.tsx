import Image from 'next/image';
import React from 'react';
import s from '../Qwiz.module.css';
import end from '../../../static/images/ip/end.jpeg';

interface QuizEndProps {
  rightAnswers: number;
  totalQuestions: number;
}

export const QuizEnd = ({ rightAnswers, totalQuestions }: QuizEndProps) => {
  const markText = () => {
    if (rightAnswers === 10) {
      return 'Подать сюда трон знатоку! Ты настоящий фанат, даже мы не знали ответы на все эти вопросы. Апплодируем стоя!';
    } else if (rightAnswers > 5 && rightAnswers < 10) {
      return 'Очень неплохо! 8 сезонов явно прошли для тебя не бесследно. Конечно, усесться на Железный трон не предлагаем, но похвалу и серебряную звездочку на лоб ты точно заслужил.';
    } else {
      return 'Ты почти ничего не знаешь! Будто и не смотрел вовсе. Ну, пересматривать советовать не будем, все-таки 8 сезонов заново - не для слабонервных.';
    }
  };
  return (
    <div className={s.box}>
      <Image
        src={end}
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
