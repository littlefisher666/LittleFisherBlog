/**
 * Created by littlefisher on 2017/7/7.
 */
export class FriendLink {
  private _friendName?: string;
  private _webUrl?: string;


  get friendName(): string {
    return this._friendName;
  }

  set friendName(value: string) {
    this._friendName = value;
  }

  get webUrl(): string {
    return this._webUrl;
  }

  set webUrl(value: string) {
    this._webUrl = value;
  }
}
