import { create } from "zustand";
import { setValue } from "@/functions/setValue";
import { PasswordRecoveryStoreTypes } from "./types";

const usePasswordRecoveryStore = create<PasswordRecoveryStoreTypes>((set) => ({
  setValue: (path, value) => {
    set((state) => setValue(state, path, value));
  },
  PasswordRecoveryState: {
    email: "",
  },
}));

export default usePasswordRecoveryStore;
