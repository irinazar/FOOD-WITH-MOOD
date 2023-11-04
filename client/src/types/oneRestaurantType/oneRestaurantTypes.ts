export type CommentType = {
  body: string;
  userName: string;
  avatar: string;
};

export type OneRestaurantType = {
  id: number;
  title: string;
  description: string;
  adress: string;
  coordX: number;
  coordY: number;
  img: string[];
  status: string;
  countryId: number;
  restOwnerId: number;
  averageRating?: number;
};
