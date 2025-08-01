import { create } from "zustand";

type User = {
  id: string;
  email: string;
  username: string;
};

type userStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const useUserStore = create<userStore>((set) => ({
    user: null,
    setUser: (user) => set({user}),
    clearUser: () => set({user: null})
}))

export default useUserStore