function whosOnline(friends) {
    if (friends.length == 0) return {}
    let online = [];
    let offline = [];
    let away = [];

    for (let i = 0; i < friends.length; i++) {

        if (friends[i].status == 'online' && friends[i].lastActivity <= 10) {
            online.push(friends[i].username)
        } else if (friends[i].lastActivity > 10 && friends[i].status == 'online') {
            away.push(friends[i].username)
        } else if (friends[i].status == 'offline') {
            offline.push(friends[i].username)

        }
    }
    if (online.length !== 0) {
        return { online, offline, away }
    } else {
        return { offline, away }
    }
    if (offline.length !== 0) {
        return { online, offline, away }
    } else {
        return { online, away }
    }
    if (away.length !== 0) {
        return { online, offline, away }
    } else {
        return { online, offline }
    }

}

module.exports = whosOnline;