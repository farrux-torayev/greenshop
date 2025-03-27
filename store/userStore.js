import { create } from "zustand";

const useStore = create((set) => ({
  users: [],
  fetchUsers: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    set({ users: data });
  },
}));
export default useStore;
