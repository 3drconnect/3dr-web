export type ResetPasswordState = {
  password: string
  confirmPassword: string
  email: string
}

export type ResetPasswordStoreTypes = {
  ResetPasswordState: ResetPasswordState
  setValue: (path: string, value: any) => void;
}