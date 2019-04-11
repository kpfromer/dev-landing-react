export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type SocialIconType = {
  url: string;
  icon: any;
}

export type ProjectType = {
  name: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
}

export type Tag = {
  id: string;
  name: string;
  color: string;
}