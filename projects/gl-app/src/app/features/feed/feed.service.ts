import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IGridOptions } from '@gl/components';
import { APP_ENDPOINTS } from '@gl/shared';
import { Observable } from 'rxjs';
import { IFeed } from './state+/feed/feed.models';
import { IPost } from './state+/posts/posts.models';

const customHeaders = {
  headers: new HttpHeaders({
    'x-custom-sorting': 'id:asc',
    'x-custom-filtering': ['id!=null'],
    'x-custom-paging': '1:50',
  })
}

@Injectable()
export class FeedService {
  constructor(
    @Inject(APP_ENDPOINTS) private appEndpoints: any,
    private http: HttpClient,
  ) { }

  getPosts(options?: IGridOptions): Observable<IFeed> {
    console.log('getPosts: ', options);

    // customHeaders.headers = customHeaders.headers.set('x-custom-paging', '10:100');

    // console.log('has custom sorting: ', customHeaders.headers.has('x-custom-sorting'));
    // console.log('get custom sorting: ', customHeaders.headers.get('x-custom-sorting'));
    // console.log('get custom sorting: ', customHeaders.headers.keys());

    // const mutatedHeaders = customHeaders.headers.append('x-mutation', 'true');


    return this.http.get<IFeed>(`${this.appEndpoints.api}/posts`, {
      headers: customHeaders.headers,
      params: options as any
    });
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${this.appEndpoints.api}/posts/${id}`);
  }
}
