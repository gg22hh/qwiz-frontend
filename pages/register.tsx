import Image from 'next/image';
import React from 'react';
import { Form } from '../components/Auth/Form';
import s from '../components/Auth/Auth.module.css';
import logo from '../static/images/logo2.png';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRegister = (email: string, pass: string, name?: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            name: name,
            id: user.uid,
          })
        );
        router.replace('/qwiz');
      })
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={s.box}>
      <h1 className={s.title}>Добро пожаловать</h1>
      <div className={s.info}>
        <Image width={400} src={logo} alt="logo" />
        <Form submitForm={handleRegister} isRegister={true} />
      </div>
    </div>
  );
};

export default Register;
