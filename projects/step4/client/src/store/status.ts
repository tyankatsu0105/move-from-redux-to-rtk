/**
 * @see https://blog.codeminer42.com/scalable-frontend-3-the-state-layer-b23ed69ca57c/
 * >The idea of a state machine is to define a set of possible states and the transitions between them.
 */
export const status = {
  /**
   * 無効
   */
  INVALID: "INVALID",
  /**
   * 初期値
   */
  PRISTINE: "PRISTINE",
  /**
   * 申請中
   */
  SUBMITTING: "SUBMITTING",
  /**
   * 成功
   */
  SUCCESS: "SUCCESS",
  /**
   * 有効
   */
  VALID: "VALID",
} as const;

export type Status<Key = keyof typeof status> = Key extends keyof typeof status
  ? typeof status[Key]
  : never;
