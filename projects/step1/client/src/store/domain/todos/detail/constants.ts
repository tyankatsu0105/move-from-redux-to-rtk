import * as ParentConstants from "../../constants";

export const parents = [...ParentConstants.parents, ParentConstants.featureKey];

export const parentsKey = parents.join("/");
export const featureKey = "detail";
