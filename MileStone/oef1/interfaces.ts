export interface Publisher {
    id: string;
    name: string;
    logoUrl: string;
    foundedYear: number;
    country: string;
  }
  
  export interface Book {
    id: string;
    title: string;
    description: string;
    pageCount: number;
    isAvailable: boolean;
    publishDate: string;
    imageUrl: string;
    genre: string;
    tags: string[];
    publisher: Publisher;
  }