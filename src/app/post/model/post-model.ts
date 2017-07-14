import {User} from "../../user/model/user-model";
/**
 * Created by littlefisher on 2017/7/11.
 */
export class Post {
  private _id?: number;
  private _title?: string;
  private _createdDate?: Date;
  private _content?: string;
  private _originalUrl?: string;
  private _type?: string;
  private _lastModifyDate?: Date;
  private _readTimes?: number;
  private _likedTimes?: number;
  private _commentTime?: number;
  private _userId?: number;
  private _enableComment?: string;
  private _state?: string;
  private _stateDate?: Date;
  private _author?: User;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get createdDate(): Date {
    return this._createdDate;
  }

  set createdDate(value: Date) {
    this._createdDate = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get originalUrl(): string {
    return this._originalUrl;
  }

  set originalUrl(value: string) {
    this._originalUrl = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get lastModifyDate(): Date {
    return this._lastModifyDate;
  }

  set lastModifyDate(value: Date) {
    this._lastModifyDate = value;
  }

  get readTimes(): number {
    return this._readTimes;
  }

  set readTimes(value: number) {
    this._readTimes = value;
  }

  get likedTimes(): number {
    return this._likedTimes;
  }

  set likedTimes(value: number) {
    this._likedTimes = value;
  }

  get commentTime(): number {
    return this._commentTime;
  }

  set commentTime(value: number) {
    this._commentTime = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get enableComment(): string {
    return this._enableComment;
  }

  set enableComment(value: string) {
    this._enableComment = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get stateDate(): Date {
    return this._stateDate;
  }

  set stateDate(value: Date) {
    this._stateDate = value;
  }

  get author(): User {
    return this._author;
  }

  set author(value: User) {
    this._author = value;
  }
}
