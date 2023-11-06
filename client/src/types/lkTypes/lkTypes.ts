export type CountryType = {
  id: number;
  name: string;
  description: string;
  img: string;
};

export type ImagesType = {
  id: number;
  restaurantId: number;
  image: string;
};

export type OwnerType = {
  id: number;
  telephone: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  active: boolean;
  Restaurants: SubmitRestaurantType[];
};

export type PreferenceType = {
  id: number;
  userId: number;
  countryId: number;
};

export type UserLkType = {
  id: number;
  telephone: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  active: boolean;
  isAdmin?: boolean;
  Preferences: PreferenceType[];
};

export type SubmitUserType = {
  telephone: string;
  name: string;
  email: string;
  file: File;
};

export type FormDataType = {
  telephone: string;
  name: string;
  email: string;
  file: File;
  id: number;
  countryId: string;
};

export type SubmitUserType2 = {
  id: number;
  formData: FormData;
};

export type SubmitUserTypeHTML = {
  telephone: HTMLInputElement;
  name: HTMLInputElement;
  email: HTMLInputElement;
  file: HTMLInputElement & { files: FileList };
  id: HTMLInputElement;
};
export type SubmitRestTypeHTML = {
  title: HTMLInputElement;
  adress: HTMLInputElement;
  countryId: HTMLInputElement;
  file: HTMLInputElement & { files: FileList };
  coordX: HTMLInputElement;
  coordY: HTMLInputElement;

  id: HTMLInputElement;

  description: HTMLInputElement;
};

export type SubmitRestaurantType = {
  title: string;
  id?: string;
  adress: string;
  countryId: string;
  description: string;
  coordX: number;
  coordY: number;
  img: string;
  status: string;
  resOwnerId: number;
  file?: File;
  Images: ImagesType[];
};

export type RestFormType = {
  id?: number;
  title: string;
  adress: string;
  countryId: string;
  description: string;
  coordX: number;
  coordY: number;

  file: File;
};

export type SubmitRestaurantType2 = {
  FormData: FormData;
};

export type CommentRepliesType = {
  id: number;
  body: string;
  commentId: number;
  restOwnerId: number;
};

export type CommentResponseType = {
  id: number;
  body: string;
  userId: number;
  restaurantId: number;
  createdAt: string;
  User: UserLkType;
  CommentReplies: CommentRepliesType[];
  Restaurant: RestFormType;
};
