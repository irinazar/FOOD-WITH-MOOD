export type UserType = {
  id: number;
  name: string;
  email: string;
  //   active: boolean;
};

export type UserSignUpType = Omit<UserType, 'id'> & { password: string };
export type UserLoginType = Omit<UserSignUpType, 'username'>;

export type ConfirmType = {
  id: number;
  randomString: string;
  //   userId: number;
};
export type CreateConfirmType = Omit<ConfirmType, 'id'>;

export type UserLoadingType =
  | (UserType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' }
  | { status: 'logged' };
