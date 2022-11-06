import React, { useEffect, useState } from 'react';
import { DataType } from '../../components/Questions/models';
import { data } from '../../data';
import Head from 'next/head';
import s from '../../components/Qwiz/Qwiz.module.css';
import { QwizItem } from '../../components/Qwiz/components/QwizItem';
import { TextField } from '@mui/material';
import { useAuth } from '../../utils/hooks';
import { NotFound } from '../../components/NotFound/NotFound';

const Qwiz = () => {
  const [qwiz, setQwiz] = useState<DataType[]>(data);
  const [filtredQwiz, setFiltredQwiz] = useState<DataType[]>(qwiz);
  const [seacrh, setSearch] = useState('');
  const { name, isAuth } = useAuth();

  useEffect(() => {
    const filtredData = qwiz.filter((item) =>
      item.name.toLowerCase().includes(seacrh)
    );
    setFiltredQwiz(filtredData);
  }, [qwiz, seacrh]);

  const qwizList = filtredQwiz.map((item) => {
    return <QwizItem key={item.id} item={item} />;
  });

  return (
    <>
      {isAuth ? (
        <>
          <Head>
            <title>Qwiz</title>
          </Head>
          <div className={s.container}>
            <h1 className={s.title}>Привет, {name}! &#x1f64b; </h1>
            <TextField
              className={s.search}
              label="Поиск"
              variant="filled"
              value={seacrh}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
            />
            <p className={s.par}>Список:</p>
            <div className={s.qwiz}>{qwizList}</div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Qwiz;
