const addNumbers = (a, b) => {
    return a + b
}

test('Should return sum', () => {
    expect(addNumbers(999, 897)).toBe(1896)
})
