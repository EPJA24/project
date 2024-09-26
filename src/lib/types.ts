export type Edition = {
  title: string;
  url: string | undefined;
  imageSrc: string | undefined;
};

export type Review = {
  userId: string;
  rating: number;
  comment?: string;
  timestamp: Date;
};

export type Book = {
  id: string;
  imageSrc: string | undefined;
  description: string;
  bookName: string;
  numberOfPages: number;
  rating: number;
  publishYear: number;
  bookUrl: string | undefined;
  isFinished: boolean;
  usersReview: Review[];
};
