import {addNumbers} from './app'

test('Should return sum', () => {
    expect(addNumbers(999, 897)).toBe(1896)
})
