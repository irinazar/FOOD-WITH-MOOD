import { useEffect } from 'react';

import { useAppDispatch } from './reduxHooks';
import { checkUserThunk } from '../features/redux/slices/user/UserThuncks';

const useUserCheck = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);
};

export default useUserCheck;
