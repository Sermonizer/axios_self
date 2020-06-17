/*
 * @Author: your name
 * @Date: 2020-06-17 20:00:08
 * @LastEditTime: 2020-06-17 20:10:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Tx_axios\axios-master\lib\cancel\Cancel.js
 */
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

// 用于标识是一个取消的error
Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;
