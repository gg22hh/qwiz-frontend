import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DataType } from '../../Questions/models';
import s from '../Qwiz.module.css';

interface QwizItemProps {
  item: DataType;
}

export const QwizItem = ({ item }: QwizItemProps) => {
  return (
    <Link href={`/qwiz/${item.id}`}>
      <div className={s.item}>
        <div className={s.overlay} />
        <Image
          className={s.img}
          src={item.preview}
          alt="preview"
          fill
          sizes="normal"
        />

        <div className={s.info}>
          <p>{item.text}</p>
        </div>
      </div>
      <h1 className={s.name}>{item.name}</h1>
    </Link>
  );
};
