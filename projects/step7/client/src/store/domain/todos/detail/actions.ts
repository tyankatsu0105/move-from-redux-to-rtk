import * as ReduxToolkit from "@reduxjs/toolkit";

import * as Types from "./types";
import * as Entity from "../../../../application/domain/todos/entity";

export const fetch = ReduxToolkit.createAction<{ todo?: Entity.Todo | null }>(
  Types.FETCH
);
