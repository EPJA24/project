export type Edition = {
  title: string;
  url: string | undefined;
  imageSrc: string | undefined;
}

export type Book = {
  id: string;
  bookName: string;
  numberOfPages: number;
  rating: number;
  publishYear: number;
  bookUrl: string;
}