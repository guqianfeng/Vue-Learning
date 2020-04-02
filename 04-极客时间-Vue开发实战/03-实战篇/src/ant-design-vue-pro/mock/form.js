function form (method) {
  let res = null
  switch (method) {
    case 'POST':
      res = { message: 'OK' }
      break
  
    default:
      res = null
      break
  }
  return res
}

module.exports = form