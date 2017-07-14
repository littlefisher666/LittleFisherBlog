export class User {
  private _id?: number;
  private _accNbr?: string;
  private _email?: string;
  private _realName?: string;
  private _nickName?: string;
  private _enName?: string;
  private _qq?: string;
  private _wechat?: string;
  private _phoneNbr?: string;
  private _userDesc?: string;
  private _state?: string;
  private _regDate?: Date;
  private _lastLoginDate?: Date;
  private _remeberMe?: boolean;
  private _password?: string;
  private _confirmPassword?: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get accNbr(): string {
    return this._accNbr;
  }

  set accNbr(value: string) {
    this._accNbr = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get realName(): string {
    return this._realName;
  }

  set realName(value: string) {
    this._realName = value;
  }

  get nickName(): string {
    return this._nickName;
  }

  set nickName(value: string) {
    this._nickName = value;
  }

  get enName(): string {
    return this._enName;
  }

  set enName(value: string) {
    this._enName = value;
  }

  get qq(): string {
    return this._qq;
  }

  set qq(value: string) {
    this._qq = value;
  }

  get wechat(): string {
    return this._wechat;
  }

  set wechat(value: string) {
    this._wechat = value;
  }

  get phoneNbr(): string {
    return this._phoneNbr;
  }

  set phoneNbr(value: string) {
    this._phoneNbr = value;
  }

  get userDesc(): string {
    return this._userDesc;
  }

  set userDesc(value: string) {
    this._userDesc = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get regDate(): Date {
    return this._regDate;
  }

  set regDate(value: Date) {
    this._regDate = value;
  }

  get lastLoginDate(): Date {
    return this._lastLoginDate;
  }

  set lastLoginDate(value: Date) {
    this._lastLoginDate = value;
  }

  get remeberMe(): boolean {
    return this._remeberMe;
  }

  set remeberMe(value: boolean) {
    this._remeberMe = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }
}
