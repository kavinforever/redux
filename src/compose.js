/**
 * `compose` 可以接受一组函数参数，从右到左来组合多个函数，然后返回一个组合函数；
 * compose的代码不难理解，它调用了ES5的Array.prototype.reduce方法，将形如fn(arg1)(arg2)(arg3)...的柯里化函数按照顺序执行。
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
