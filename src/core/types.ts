export interface IArticle {
  id: number;
  title: string;
  abstract: string;
  source: string;
  published_date: Date;
  updated: Date;
  section: string;
  subsection: string;
  byline: string;
  adx_keywords: string;
  des_facet: string[];
  per_facet: string[];
  media: IMedia[];
}

export interface IMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": IImage[];
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}
