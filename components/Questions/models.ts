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

export type MarksType = {
  bad: string;
  good: string;
  best: string;
};

export type DataType = {
  id: string;
  name: string;
  background: StaticImageData;
  endImage: StaticImageData;
  preview: StaticImageData;
  text: string;
  marks: MarksType;
  questions: QuestionType[];
};
