const suma = require ('./suma');

test ('2 + 6 = 8', () => {
  expect(suma(2,6)).toBe(7);
});

test ('2 + 5 = NaN', () => {
  expect(suma('a',5)).toBe(NaN);
});
