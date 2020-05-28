import { ADD_NO } from './ActionType'


export const addNo = no => ({
    type: ADD_NO,
    payload: { no: no + 1 }
    });