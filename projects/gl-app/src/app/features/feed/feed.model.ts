export interface IPost {
  id: string;
  title: string;
  subTitle?: string;
  content: string;
  postedAt: Date | string;
  updatedAt?: Date | string;
  preview: string;
  avatar: string;
  footer?: string;
  requiredIdentity: Array<string>;
}
