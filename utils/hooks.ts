import { useSelector } from 'react-redux';
import { useAppSelector } from '../store';
import { selectEmail, selectId, selectName } from '../store/slices/userSlice';

export const useAuth = () => {
  const email = useAppSelector(selectEmail);
  const name = useAppSelector(selectName);
  const id = useAppSelector(selectId);

  return {
    isAuth: !!email,
    email,
    name,
    id,
  };
};
