function chart (method) {
  let res = null
  switch (method) {
    case 'GET':
      res = [90, 40, 100, 20, 30, 48]
      break
  
    default:
      res = null
      break
  }
  return res
}

module.exports = chart