// Arquivo destinado a tipos globais da aplicação


//========================= LOGIN =============================
export type POSTLoginRequest =
  | {
    data: {
      emailResetPassword: string;
    };
    errors: { id: number; message: string }[];
  }
  | number;

export type LoginResponseType = {
  data: {
    token: string;
    expirationDate: string;
  };
}

export type LoginRequestBody = {
  user: string;
  password: string;
}
export type AuthStore = {
  token: string;
  expirationDate: string;
  setToken: (newToken: string) => void;
  setExpirationDate: (newDate: string) => void;
  clearToken: () => void;
  getTokenLocalStorage: () => string;
  logout: () => void;
}