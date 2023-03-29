const scoreboard = require ('./ConvertScore');

test('scoreboard() should return array(numbers) with score', () => {
    expect(scoreboard("The score is four nil")).toStrictEqual([4, 0])
    expect(scoreboard("new score: two three")).toStrictEqual([2, 3])
    expect(scoreboard("two two")).toStrictEqual([2, 2])
    expect(scoreboard("Arsenal just conceded another goal, two nil")).toStrictEqual([2, 0])
    expect(scoreboard("The score is nil nil")).toStrictEqual([0, 0])
}
)