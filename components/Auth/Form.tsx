import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import s from './Auth.module.css';

interface FormProps {
  isRegister?: boolean;
  submitForm: (email: string, pass: string, name?: string) => void;
}

export const Form = ({ isRegister = false, submitForm }: FormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      submitForm(email, pass, name);
    } else {
      submitForm(email, pass);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <h2 className={s.formTitle}>{isRegister ? 'Регистрация' : 'Логин'}</h2>
      <div className={s.inputs}>
        {isRegister && (
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            label="Имя"
            variant="standard"
          />
        )}
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          label="Email"
          variant="standard"
        />
        <TextField
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          label="Пароль"
          variant="standard"
        />
      </div>
      <div className={s.buttons}>
        <Button type="submit" variant="outlined">
          {isRegister ? 'Продолжить' : 'Войти'}
        </Button>
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
    </form>
  );
};
