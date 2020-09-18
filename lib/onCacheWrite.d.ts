export interface TriggerFunctionConfig<T> {
  cache: any;
}
declare const _default: <T>({
  cache,
}: TriggerFunctionConfig<T>) => (persist: () => void) => () => void;
export default _default;
