function greetDevelopers(list) {
  for (let i=0; i < list.length; i++) {
      for (let key in list[i]) {
          list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
      }
  }
  return list;
}

module.exports = greetDevelopers;