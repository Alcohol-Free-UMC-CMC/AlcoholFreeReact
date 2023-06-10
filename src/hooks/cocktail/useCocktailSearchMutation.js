import { postCocktailSearch } from "../../apis/cocktail/cocktail";
import { useMutation, useQueryClient } from 'react-query';

export const useCocktailSearchMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((tag, ingredient) => postCocktailSearch(tag, ingredient), {
    onSuccess: () => {
      queryClient.invalidateQueries("cocktail");
    }
  });
};