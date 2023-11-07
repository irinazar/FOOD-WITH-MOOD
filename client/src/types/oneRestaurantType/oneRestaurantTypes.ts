export type UserComments = {
  userName: string;
  avatar: string;
};

export type CommentType = {
  id: number
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
  Images: PictureType[];
  Ratings: RatingType[]; 

};

export type BookingRestType = {
  title: string
}

export type BookingResponse = {
  id: number;
  userId: number;
  restaurantId: number;
  bookerName: string;
  bookerPhone: string;
  date: string;
  bookings: BookingType[];
  Restaurant: BookingRestType;
}
export type BookingType = {
  id: number;
  userId: number;
  restaurantId: number;
  bookerName: string;
  bookerPhone: string;
  date: string;
  Restaurant: BookingRestType;
};

export type BookingInputType = {
  bookerName: string;
  bookerPhone: string;
  date: string;
};
