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
    google_books_id: string;
    id: number;
    title: string;
    description: string;
    authors: string;
    cover_url: string;
    publisher: string;
    published_date: string;
    page_count: number;
};
