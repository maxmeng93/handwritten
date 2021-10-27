/**
 * 手写Promise
 * Promise/A+ 规范原文：https://promisesaplus.com/
 */

type State = 'pending' | 'resolved' | 'rejected';

// @ts-ignore
class Promise {
  // 状态描述
  state: State = 'pending';
  // 成功结果
  value = undefined;
  // 失败原因
  reason = undefined;

  constructor(executor: Function) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {

  }

  reject(reason) {

  }

  then(onFulfilled, onRejected) {

  }
}