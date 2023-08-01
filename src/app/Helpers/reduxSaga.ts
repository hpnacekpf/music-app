import { select as RSSelect, call as RSCall, SagaReturnType } from 'redux-saga/effects';

export function* select<S, T>(selector: (state: S) => T) {
  const slice: T = yield RSSelect(selector);
  return slice;
}

export function* call<Fn extends (...args: Array<any>) => any>(fn: Fn, ...args: Parameters<Fn>) {
  const value: SagaReturnType<typeof fn> = yield RSCall(fn, ...args);
  return value;
}
