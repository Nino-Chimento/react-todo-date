import { Utility } from "../../utils/Utility";
import {
  ACTION_ADD_CARD,
  ACTION_ADD_WISH,
  ACTION_REMOVE_CARD,
  ACTION_REMOVE_WISH,
} from "../actions";

export const reducerCart = (prevState: any = {}, action: any) => {
  let clonedState = Utility.clone(prevState);

  switch (action.type) {
    case ACTION_ADD_CARD:
      clonedState.card = [...clonedState.card, action.payload];
      break;
    case ACTION_ADD_WISH:
      clonedState.likeCard = [...clonedState.likeCard, action.payload];
      break;
    case ACTION_REMOVE_WISH:
      clonedState.likeCard = clonedState.likeCard.filter(
        (item: any) => item.uuid !== action.payload.uuid
      );
      break;
    case ACTION_REMOVE_CARD:
      clonedState.card = clonedState.card.filter(
        (item: any) => item.uuid !== action.payload.uuid
      );
      break;
    default:
      break;
  }
  return clonedState;
};
