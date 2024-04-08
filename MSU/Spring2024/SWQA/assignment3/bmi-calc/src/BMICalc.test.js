const { calculateBMI } = require('./BMICalc');
const { classifyBMI } = require('./BMICalc');

test('calculateBMI should return 29.3 for 150 and 60', () => {
    expect(calculateBMI(150, 5, 0)).toBe("29.3");
});

test('calculateBMI should return 20.3 for 150 and 72', () => {
    expect(calculateBMI(150, 6, 0)).toBe("20.3");
});

test('calculateBMI should return 39.1 for 200 and 60', () => {
    expect(calculateBMI(200, 5, 0)).toBe("39.1");
});







test('classifyBMI should return Underweight for BMI less than 18.5', () => {
    expect(classifyBMI(18.4)).toBe('Underweight');
});

test('classifyBMI should return Normal weight for BMI less than 25', () => {
    expect(classifyBMI(18.5)).toBe('Normal weight');
    expect(classifyBMI(24.9)).toBe('Normal weight');
});

test('classifyBMI should return Overweight for BMI less than 30', () => {
    expect(classifyBMI(25)).toBe('Overweight');
    expect(classifyBMI(29.9)).toBe('Overweight');
});

test('classifyBMI should return Obese for BMI greater than or equal to 30', () => {
    expect(classifyBMI(30)).toBe('Obese');
    expect(classifyBMI(30.1)).toBe('Obese');
});