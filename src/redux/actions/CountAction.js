import { ADD_COUNT, SUBSTRACT_COUNT} from './ActionType'

export const addCount = count => ({
    type: ADD_COUNT,
    payload: { count: count + 1 }
  });

export const minusCount = count => ({
  type: SUBSTRACT_COUNT,
  payload: { count: count - 1 }
  });
