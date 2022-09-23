export const ACTION_COUNTER_SET = 'set';
export const ACTION_COUNTER_INCREMENT = 'increment';
export const ACTION_COUNTER_DECREMENT = 'decrement';

export function increment() {
  return { type: ACTION_COUNTER_INCREMENT };
}
export function decrement() {
  return { type: ACTION_COUNTER_DECREMENT };
}
export function set(payload) {
  return { type: ACTION_COUNTER_SET, payload };
}