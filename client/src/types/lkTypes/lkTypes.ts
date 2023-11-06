export type CountryType = {
  id: number;
  name: string;
  description: string;
  img: string;
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
};

export type SubmitRestaurantType2 = {
  id?: number;
  title: string;
  adress: string;
  countryId: string;
  description: string;
  coordX: number;
  coordY: number;

  file: File;
};

export type CommentsType = {
  body: string;
  userId: number;
  restaurantId: number;
};
