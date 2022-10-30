import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DataType } from '../../components/Questions/models';
import { data } from '../../data';
import Head from 'next/head';
import s from '../../components/Qwiz/Qwiz.module.css';
import { QwizItem } from '../../components/Qwiz/components/QwizItem';

const Qwiz = () => {
  const [qwiz, setQwiz] = useState<DataType[]>(data);
  const [filtredQwiz, setFiltredQwiz] = useState<DataType[]>(qwiz);
  const [seacrh, setSearch] = useState('');

  useEffect(() => {
    const filtredData = qwiz.filter((item) => item.name.includes(seacrh));
    setFiltredQwiz(filtredData);
  }, [qwiz, seacrh]);

  const qwizList = filtredQwiz.map((item) => {
    return <QwizItem key={item.id} item={item} />;
  });

  return (
    <>
      <Head>
        <title>Qwiz</title>
      </Head>
      <div className={s.container}>
        <h1 className={s.title}>Тесты</h1>
        <div className={s.search}>
          <input
            placeholder="Поиск"
            value={seacrh}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <p className={s.par}>Список:</p>
        <div className={s.qwiz}>{qwizList}</div>
      </div>
    </>
  );
};

export default Qwiz;
