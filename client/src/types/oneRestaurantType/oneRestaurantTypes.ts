export type UserComments = {
  userName: string;
  avatar: string;
};

export type CommentType = {
  restaurantId: number;
  body: string;
  user: UserComments;
};

export type PictureType = {
  restaurantId: number;
  image: string;
};

export type RatingType = {
  userId: number;
  restaurantId: number;
  rating: number;
};

export type OneRestaurantType = {
  id: number;
  title: string;
  description: string;
  adress: string;
  phone: string;
  coordX: number;
  coordY: number;
  status: string;
  countryId: number;
  restOwnerId: number;
  averageRating?: RatingType;
  pictures: PictureType[];
  Images: PictureType[]

};

export type BookingType = {
  userId: number;
  restaurantId: number;
  bookerName: string;
  bookerPhone: string;
  date: string;
};

export type BookingInputType = {
  bookerName: string;
  bookerPhone: string;
  date: string;
};
