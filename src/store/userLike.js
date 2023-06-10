import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { produce } from "immer";

const initUserLike = {
  userLike: []
}

export const useLikeStore = create()(
  persist(
    (set) => ({
      ...initUserLike,
      cancelLike: (payload) => {
        set(produce((state) => {
          state.userLike = state.userLike.filter(likeElement => likeElement !== payload)
        }))
      },
      addLike: (payload) => {
        set(produce((state) => {
          state.userLike.push(payload)
        }))
      }
    }),
    {
      name: 'user-like-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)