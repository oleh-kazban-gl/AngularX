import { HttpErrorResponse } from '@angular/common/http';
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

export interface IPostState {
  id: number;
  data: IPost,
  loaded: boolean;
  loading: boolean;
  error: HttpErrorResponse | null
}
