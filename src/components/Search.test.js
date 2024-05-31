// search.test.js

const search = require('D:/Project_Fro/my-app-next/src/app/Search.js');

// Test case 1: Basic search functionality
test('Search function returns correct results', () => {
  const items = ['apple', 'banana', 'orange', 'grape'];
  const query = 'an';
  const result = search(query, items);
  expect(result).toEqual(['banana', 'orange']);
});

// Test case 2: Search with an empty query should return all items
test('Search function returns all items with empty query', () => {
  const items = ['apple', 'banana', 'orange', 'grape'];
  const query = '';
  const result = search(query, items);
  expect(result).toEqual(items);
});

// Test case 3: Search with a non-matching query should return an empty array
test('Search function returns empty array for non-matching query', () => {
  const items = ['apple', 'banana', 'orange', 'grape'];
  const query = 'watermelon';
  const result = search(query, items);
  expect(result).toEqual([]);
});