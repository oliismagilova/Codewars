function kebabize(str) {
  const regex = /(?=[A-Z])/;
  const dash = '-';
  const nums = /[0-9]/g
  
  return str.replace(nums, '').split(regex).join(dash).toLowerCase()
}

module.exports = kebabize;