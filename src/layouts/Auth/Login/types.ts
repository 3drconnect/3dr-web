export type LoginState = {
  loginData: {
    userName: string;
    password: string;
  }
};

export type LoginPageStoreTypes = {
  setValue: (path: string, value: any) => void;
  loginData: LoginState["loginData"];
  [key: string]: any;
}
