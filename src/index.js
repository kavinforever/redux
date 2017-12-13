import createStore from './createStore'
import combineReducers from './combineReducers'
import bindActionCreators from './bindActionCreators'
import applyMiddleware from './applyMiddleware'
import compose from './compose'
import warning from './utils/warning'
import __DO_NOT_USE__ActionTypes from './utils/actionTypes'

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 * 验证非生产环境下redux是否被压缩，如果被压缩给出一个warn提示
 * https://github.com/dushao103500/blog/issues/1
 */
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  warning(
    "You are currently using minified code outside of NODE_ENV === 'production'. " +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
      'to ensure you have the correct code for your production build.'
  )
}

export {
  createStore,  //创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store
  combineReducers,  //这个函数可以组合一组 reducers(对象) ，然后返回一个新的 reducer 函数给 `createStore` 使用。
  bindActionCreators, //生成直接触发 action 的函数
  applyMiddleware, //applyMiddleware接收中间件为参数，并返回一个以createStore为参数的函数
  compose,   //调用了ES5的Array.prototype.reduce方法，将形如fn(arg1)(arg2)(arg3)...的柯里化函数按照顺序执行
  __DO_NOT_USE__ActionTypes
}
