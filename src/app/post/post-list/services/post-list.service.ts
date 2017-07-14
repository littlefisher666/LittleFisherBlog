import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Post} from "../../model/post-model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostListService {

  // public postListUrl: string = globalProp.rootPath + "/api/blog/v1/posts/pager";
  public postListUrl: string = "mock-data/postList-mock.json";

  constructor(public http: Http) {
  }

  public getPostList(): Observable<Post[]> {
    console.log(this.postListUrl);

    return this.http
      .get(this.postListUrl)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error || "Server error"));
  }
}
