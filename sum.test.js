import sum from './sum.js';


describe('sum function', () => {

 test('adds 3 + 2 to equal 5', () => {
  expect(sum(3, 2)).toBe(5);
 }); 

  test('adds -1 + -2 to equal 5', () => {
  expect(sum(-1, -2)).toBe(-3);
 }); 


})


