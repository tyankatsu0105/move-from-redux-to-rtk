import * as React from "react";
import * as ReactHookForm from "react-hook-form";

import * as Presenter from "../../application/domain/todos/presenter";

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  create: () => void;
  formHandler: ReactHookForm.UseFormReturn<Presenter.CreteInputValues>;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <div>
    <input type="text" {...props.formHandler.register("description")} />
    <button type="submit" onClick={props.create}>
      create
    </button>
  </div>
);
