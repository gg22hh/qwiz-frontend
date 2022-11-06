import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from '../components/Auth/Auth.module.css';
import { Form } from '../components/Auth/Form';
import logo from '../static/images/logo.png';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';

const Auth: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            id: user.uid,
          })
        );
        router.replace('/qwiz');
      })
      .catch(() => alert('Invalid user!'));
  };

  return (
    <div className={s.box}>
      <h1 className={s.title}>Добро пожаловать</h1>
      <div className={s.info}>
        <Image width={400} src={logo} alt="logo" />
        <Form submitForm={handleLogin} />
      </div>
    </div>
  );
};

export default Auth;
