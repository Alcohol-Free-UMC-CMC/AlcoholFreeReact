import GptRecipePage from "../pages/gptrecipe/GptRecipePage/GptRecipePage";
import RecipePage from "../pages/recipe/RecipePage/RecipePage";
import { GrHomeRounded } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { CiFaceSmile } from "react-icons/ci";

const BottomMenu = [
  {
    id: 1,
    name: "GPT레시피",
    path: "/gptrecipe",
    components: <GptRecipePage />,
    icon: <GrBook size={20} />,
  },
  {
    id: 2,
    name: "홈",
    path: "/",
    components: <RecipePage />,
    icon: <GrHomeRounded size={20} />,
  },
  {
    id: 3,
    name: "마이페이지",
    path: "/guide",
    components: <></>,
    icon: <CiFaceSmile size={25} />,
  },
];

export { BottomMenu };
