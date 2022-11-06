import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import s from './NotFound.module.css';

export const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={s.noMatch}>
      <div className={s.title}>
        404. <p>Страница не найдена</p>
      </div>
      <div className={s.text}>
        Возможно, она была перемещена или вы просто ввели неверный адрес
        страницы.
      </div>
    </div>
  );
};
