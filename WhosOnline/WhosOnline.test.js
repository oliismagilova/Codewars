const whosOnline = require('./WhosOnline');
describe('whoOnline()', () => {
    var data1 = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }];

    var res1 = {
        online: ['David'],
        offline: ['Lucy'],
        away: ['Bob']
    }
    var data2 = [{
        username: 'David',
        status: 'offline',
        lastActivity: 11
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }];

    var res2 = { offline: ['David', 'Lucy'], away: ['Bob'] }
    test('whosOnline() should return the obj with status and name', () => {
        expect(whosOnline(data1)).toStrictEqual(res1);
        expect(whosOnline([])).toStrictEqual({});
        expect(whosOnline(data2)).toStrictEqual(res2);
    }
    )
})