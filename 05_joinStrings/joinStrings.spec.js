const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is John', () => {
    expect(values.firstName).toEqual('John');
  });
  test('lastName is Doe', () => {
    expect(values.lastName).toEqual('Doe');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1975', () => {
    expect(values.birthYear).toEqual(1975);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is John Doe and I am 50 years old.');
  });
});

describe('step 3', () => {
  test('fullName is John Doe', () => {
    expect(values.fullName).toEqual('John Doe');
  });
  test('age is 50', () => {
    expect(values.age).toEqual(50);
  });
});
