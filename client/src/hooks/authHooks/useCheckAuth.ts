import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../reduxHooks';
import { checkUserThunk } from '../../features/redux/slices/user/UserThunks';
import { checkOwnerThunk } from '../../features/redux/slices/authOwner/authOwnerThunks';

const useCheckAuth = (): void => {
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.role.status);

  useEffect(() => {
    if (role === 'user') {
      void dispatch(checkUserThunk());
    }
    if (role === 'owner') {
      void dispatch(checkOwnerThunk());
    }
  }, []);
};

export default useCheckAuth;
