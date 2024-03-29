export type AuthType = {
  id: number;
  name: string;
  email: string;
  isOwner?: boolean;
  isAdmin?: boolean; 

};

export type AuthSignUpType = Omit<AuthType, 'id'> & { password: string };
export type AuthLoginType = Omit<AuthSignUpType, 'name'>;

export type ConfirmType = {
  id: number;
  randomString: string;
};
export type CreateConfirmType = Omit<ConfirmType, 'id'>;

export type AuthLoadingType =
  
  | (AuthType & { status: 'logged' })
  | { status: 'loading' }
  | { status: 'guest' }


export type AuthRole = 'user' | 'owner';
