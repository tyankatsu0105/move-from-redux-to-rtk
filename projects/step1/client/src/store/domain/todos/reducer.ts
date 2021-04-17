import produce from "immer";

import * as Types from "./types";
import * as Status from "../../status";
import { Actions } from "./actions";

export type State = {
  status: Status.Status;
};

const initialState: State = {
  status: Status.status.PRISTINE,
};

export const reducer = produce((state, action: Actions) => {
  switch (action.type) {
    case Types.CREATE: {
      state.status = Status.status.SUBMITTING;
      break;
    }

    default:
      break;
  }
}, initialState);
