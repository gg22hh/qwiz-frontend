import { Button, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import s from '../components/Auth/Auth.module.css';
import { Form } from '../components/Auth/Form';
import logo from '../static/images/logo.png';

const Auth: NextPage = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Добро пожаловать</h1>
      <div className={s.info}>
        <Image width={400} src={logo} alt="logo" />
        <Form title="Войти" />
      </div>
    </div>
  );
};

export default Auth;
