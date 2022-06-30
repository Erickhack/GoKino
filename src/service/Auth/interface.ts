export interface ILoginData {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id: string;
  name: string;
  roleName: string;
  email: string;
  token: string;
}

export interface IRegisterData {
  email: string;
  name: string;
  password: string;
}

export interface IRegisterResponse {
  statusCode: number;
  message: string;
}
