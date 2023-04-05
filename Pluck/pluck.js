function pluck(objs, name) {
  return objs.map(item=>item[name]);
}


module.exports = pluck;