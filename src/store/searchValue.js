import { create } from "zustand";
import { produce } from "immer";

const initSearchValue = {
  
}

export const useLikeStore = create()(
  (set) => ({
    ...initSearchValue,
    setSearchValue: (payload) => {
      set(produce((state) => {
        state.userLike = state.userLike.filter(likeElement => likeElement !== payload)
      }))
    },
  })
)