export type TagsData = {
  link: string;
  text: string;
};

export type YearsData = {
  link: string;
  text: string;
};

export type HeaderData = {
  homeLink: string;
  headerText: string;
  tags: TagsData[];
  years: YearsData[];
};

export type ArticlesData = {
  articleLink: string;
  articleTitle: string;
  articleViews: string;
  articleBrief: string;
  articleDate: string;
  tags: TagsData[];
};

export type ArticlesByDateData = {
  date: YearsData;
  articles: ArticlesData[];
};

export type FooterData = {
  homeLink: string;
};

export type indexData = {
  title: string;
  header: HeaderData;
  articlesByDate: ArticlesByDateData[];
  footer: FooterData;
};
