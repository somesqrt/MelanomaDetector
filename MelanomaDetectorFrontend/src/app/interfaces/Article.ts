export interface Article {
  id: number;
  order: string;
  mainPoint: string;
  content: string;
}

export interface ShortArticle {
  id: number;
  image: string;
  short_description: string;
  slug: string;
  title: string;
}

export interface FullArticle {
  authors: string,
  category: string,
  date: string,
  html_content: string,
  id: number,
  language: string,
  short_description: string,
  slug: string,
  source: string,
  title: string,
  url_source: string
}



