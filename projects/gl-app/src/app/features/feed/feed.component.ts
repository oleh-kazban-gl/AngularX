import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gl-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent {
  posts: Array<any> = [];
  gridTitle = 'Feed';

  onGridUpdate(): void {
    this.gridTitle = 'Updated Feed';
    this.getData();
  }

  private addRecord() {
    return {
      id: '57585e90-96d9-4a39-8830-6e0802aaf4e4',
      title: 'Post #005',
      content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
      postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
      updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
      preview: 'http://placeimg.com/640/400',
      avatar: 'http://placeimg.com/640/400',
    };
  }

  private getData(): void {
    if (!this.posts.length) {
      this.posts = [
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
        },
        {
          id: '57fc2d4c-cadf-4e8f-9a32-3932b53c5f8f',
          title: 'Post #001',
          content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
          postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
          updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
          preview: 'http://placeimg.com/640/640',
          avatar: 'http://placeimg.com/640/400',
        },
        {
          id: '6cd0d556-fb4d-42f9-af63-0c385303752e',
          title: 'Post #002',
          subTitle: 'Post #002',
          content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
          postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
          updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
          preview: 'http://placeimg.com/640/600',
          avatar: 'http://placeimg.com/640/400',
        },
        {
          id: '24191a4e-e132-4f80-91a3-1b3cd6985991',
          title: 'Post #003',
          content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
          postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
          updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
          preview: 'http://placeimg.com/640/480',
          avatar: 'http://placeimg.com/640/400',
        },
        {
          id: '90e32dd6-2e97-4a02-8c68-5b4d1a7ff6c6',
          title: 'Post #004',
          content: `Sint laudantium culpa at voluptate illo provident velit iure. Dolorem tempora nam amet suscipit nemo repellat aut. A molestias corrupti consequatur. Incidunt ut id voluptas enim soluta cumque fugit iste. Eaque dolores perspiciatis rem esse vel dolor minus eligendi.

      Voluptas beatae excepturi et ab hic qui sunt voluptatum iste. Consectetur doloremque voluptatem non architecto nulla. Cupiditate corrupti fuga excepturi dolor possimus perspiciatis perspiciatis blanditiis alias. Est voluptatem est quasi at. Veritatis consequatur sapiente repudiandae.

      Rerum molestiae in quisquam et odio quod ut odio. Dignissimos facere excepturi reprehenderit omnis. Accusantium voluptate pariatur pariatur. Non dolores doloremque non beatae similique rem expedita aperiam. Deleniti quo in et inventore.`,
          postedAt: 'Mon Jun 27 2022 11:21:48 GMT+0300 (Eastern European Summer Time)',
          updatedAt: 'Mon Aug 01 2022 21:48:53 GMT+0300 (Eastern European Summer Time)',
          preview: 'http://placeimg.com/640/480',
          avatar: 'http://placeimg.com/640/400',
        }
      ];
    } else {
      this.posts.push(this.addRecord());
    }
  }

}
