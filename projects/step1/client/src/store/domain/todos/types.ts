import { mergedFeatureKey } from "./constants";

export const CREATE = `${mergedFeatureKey}/create` as const;
export const UPDATE = `${mergedFeatureKey}/update` as const;
export const REMOVE = `${mergedFeatureKey}/remove` as const;
