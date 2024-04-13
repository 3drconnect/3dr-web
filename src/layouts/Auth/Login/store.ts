import { create } from "zustand";
import { setValue } from "@/functions/setValue";
import { LoginPageStoreTypes } from "@/Layouts/Auth/Login/types";

const useLoginStore = create<LoginPageStoreTypes>((set) => ({
  setValue: (path, value) => {
    set((state) => setValue(state, path, value));
  },
  loginData: {
    userName: "",
    password: "",
  },
}));

export default useLoginStore;
