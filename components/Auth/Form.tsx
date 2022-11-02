import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import s from './Auth.module.css';

interface FormProps {
  title: string;
  isRegister?: boolean;
}

export const Form = ({ title, isRegister = false }: FormProps) => {
  return (
    <div className={s.form}>
      <h2 className={s.formTitle}>{isRegister ? 'Регистрация' : 'Логин'}</h2>
      <div className={s.inputs}>
        {isRegister && <TextField label="Имя" variant="standard" />}
        <TextField type="email" label="Email" variant="standard" />
        <TextField type="password" label="Пароль" variant="standard" />
      </div>
      <div className={s.buttons}>
        <Button variant="outlined">{title}</Button>
        {!isRegister && (
          <Link className={s.link} href={'/register'}>
            Нет аккаунта?
          </Link>
        )}
        {isRegister && (
          <Link className={s.link} href={'/'}>
            Есть аккаунт?
          </Link>
        )}
      </div>
    </div>
  );
};
