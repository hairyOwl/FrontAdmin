/*
 * @Description:验证规则
 * @Author: hairyOwl
 * @Date: 2022-07-24 17:03:58
 * @LastEditors: hairyOwl
 * @LastEditTime: 2022-07-24 17:09:23
 */
// 密码验证规则
const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'));
    } else {
      callback();
    }
  };
};

export { validatePassword };
