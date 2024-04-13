import { create } from "zustand";
import { setValue } from "@/functions/setValue";
import { ResetPasswordStoreTypes } from "./types";

const useResetPasswordStore = create<ResetPasswordStoreTypes>((set) => ({
  setValue: (path, value) => {
    set((state) => setValue(state, path, value));
  },
  ResetPasswordState: {
    password: "",
    confirmPassword: "",
    email: "",
  },
}));

export default useResetPasswordStore;
