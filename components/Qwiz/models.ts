import { StaticImageData } from 'next/image';
import React from 'react';

export type QuestionType = {
  id: string;
  image: StaticImageData;
  question: string;
  rightAnswer: string;
  answers: string[];
  wrongExp: string;
  rightExp: string;
};
