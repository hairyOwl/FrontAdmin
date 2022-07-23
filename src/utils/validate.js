/*
 * @Description:工具类 验证是否为web资源
 * @Author: hairyOwl
 * @Date: 2022-07-23 09:20:58
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-23 17:37:27
 */
/* 
判断是否为外部资源
*/
function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export { isExternal };
