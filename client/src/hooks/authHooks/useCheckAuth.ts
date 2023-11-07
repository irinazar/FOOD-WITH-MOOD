import { useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../reduxHooks';
import type { AuthType } from '../../types/authType/authTypes';
import { setOwner } from '../../features/redux/slices/authOwner/authOwnerSlice';
import { setUser } from '../../features/redux/slices/user/UserSlice';

const useCheckAuth = (): void => {
  const dispatch = useAppDispatch();

  const { VITE_BASE_URL } = import.meta.env as unknown as { VITE_BASE_URL: string };

  useEffect(() => {
    axios
      .get<AuthType>(`${VITE_BASE_URL}/user/check`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.isOwner) {
          void dispatch(setOwner(response.data));
          void dispatch(setUser({ status: 'guest' }));
        } else {
          void dispatch(setUser(response.data));
          void dispatch(setOwner({ status: 'guest' }));
        }
      })
      .catch((err) => {
        void dispatch(setUser({ status: 'guest' }));
        void dispatch(setOwner({ status: 'guest' }));
      });
  }, []);
};

export default useCheckAuth;
