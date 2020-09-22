const add = (a, b) => a + b
const generateGreeting = (name) => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4)
    expect(result).toBe(7)
})

test('should return a name', () => {
    const result = generateGreeting('Atsushi Nonaka')
    expect(result).toBe('Hello Atsushi Nonaka!')
})