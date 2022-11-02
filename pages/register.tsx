import Image from 'next/image';
import React from 'react';
import { Form } from '../components/Auth/Form';
import s from '../components/Auth/Auth.module.css';
import logo from '../static/images/logo2.png';

const Register = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Добро пожаловать</h1>
      <div className={s.info}>
        <Image width={400} src={logo} alt="logo" />
        <Form title="Продолжить" isRegister={true} />
      </div>
    </div>
  );
};

export default Register;
