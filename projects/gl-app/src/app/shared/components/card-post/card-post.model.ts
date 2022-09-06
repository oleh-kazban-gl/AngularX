import { ICard } from '../card';

export interface ICardPost extends ICard {
  postedAt: string;
  updatedAt: string;
  requiredIdentity: Array<string>;
}
