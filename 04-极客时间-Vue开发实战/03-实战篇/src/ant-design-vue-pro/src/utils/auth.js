export function getCurrentAuthority () {
  // 后端返回，这边先模拟下数据，获取当前权限
  return ['user']
  // return ['admin']
}

export function check (authority) {
  // 检查是否拥有权限
  const current = getCurrentAuthority()
  return current.some(item => authority.includes(item))
}

export function isLogin () {
  // 每个系统判断方式不一样，这边就随手写一个不等于guest就说明登录了
  const current = getCurrentAuthority()
  return current && current[0] !== 'guest'
}