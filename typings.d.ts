type Articles = {
  author: string | null;
  category: string;
  country: string;
  description: string | null;
  image: string;
  language: string;
  published_at: string;
  sources: string;
  title: string;
  url: string;
};

type Pagination = {
  count: int;
  limit: int;
  offset: int;
  total: int;
};

type NewsResponse = {
  pagination: Pagination;
  data: Articles[];
};

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";
