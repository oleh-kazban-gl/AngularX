import { Injectable } from '@angular/core';
import { DataTypeEnum } from '@gl/components';

import { UserService } from './user.service';

@Injectable()
export class DataService {
  private _data: Array<any> = [
    {
      id: '89445053-4fd3-4f1f-ad49-f15f6c3488b2',
      title: 'Post #000',
      subTitle: 'Post #000',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/300',
      avatar: 'http://placeimg.com/640/400',
      footer: 'some test caption for footer...',
      requiredIdentity: ['user', 'admin']
    },
    {
      id: '57fc2d4c-cadf-4e8f-9a32-3932b53c5f8f',
      authorId: '0f2620ba-fb99-417a-9ddb-f6e1d26a7bd5',
      title: 'Post #001',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/640',
      avatar: 'http://placeimg.com/640/400',
      requiredIdentity: ['admin']
    },
    {
      id: '6cd0d556-fb4d-42f9-af63-0c385303752e',
      authorId: '0f2620ba-fb99-417a-9ddb-f6e1d26a7bd5',
      title: 'Post #002',
      subTitle: 'Post #002',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/600',
      avatar: 'http://placeimg.com/640/400',
      requiredIdentity: ['user', 'admin']
    },
    {
      id: '24191a4e-e132-4f80-91a3-1b3cd6985991',
      authorId: '0f2620ba-fb99-417a-9ddb-f6e1d26a7bd5',
      title: 'Post #003',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/480',
      avatar: 'http://placeimg.com/640/400',
      requiredIdentity: ['user', 'admin']
    },
    {
      id: '90e32dd6-2e97-4a02-8c68-5b4d1a7ff6c6',
      authorId: '0f2620ba-fb99-417a-9ddb-f6e1d26a7bd5',
      title: 'Post #004',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/480',
      avatar: 'http://placeimg.com/640/400',
      requiredIdentity: ['user', 'admin']
    }
  ];

  constructor(
    private userService: UserService
  ) { }

  public getData() {
    return this._data;
  }

  public getDataByAuthorId(id: string) {
    return this._data.filter(d => d.authorId === id);
  }

  public getDataByCurrentUser() {
    const currentUser = this.userService.getCurrentUser();

    return this.getDataByAuthorId(currentUser.uuid);
  }

  public getDataByType(type: DataTypeEnum) {
    switch (type) {
      case 'currentUser': return this.getDataByCurrentUser()
      default: return this.getData();
    }
  }
}