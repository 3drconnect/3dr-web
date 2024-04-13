export type PasswordRecoveryState = {
  email: string;
}

export type PasswordRecoveryStoreTypes = {
  setValue: (path: string, value: any) => void;
  PasswordRecoveryState: PasswordRecoveryState
  [key: string]: any;
}