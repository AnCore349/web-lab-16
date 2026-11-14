import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./data', () => [
  {
    id: 1,
    title: 'Pancakes',
    category: 'breakfast',
    price: 8,
    img: './images/item-1.jpeg',
    desc: 'Breakfast item',
  },
  {
    id: 2,
    title: 'Omelette',
    category: 'breakfast',
    price: 9,
    img: './images/item-2.jpeg',
    desc: 'Another breakfast item',
  },
  {
    id: 3,
    title: 'Burger',
    category: 'lunch',
    price: 12,
    img: './images/item-3.jpeg',
    desc: 'Lunch item',
  },
  {
    id: 4,
    title: 'Seasonal special',
    category: 'seasonal',
    price: 14,
    img: './images/item-4.jpeg',
    desc: 'A new category',
  },
]);

test('creates one filter for each unique category, including new categories', () => {
  render(<App />);

  expect(screen.getAllByRole('button')).toHaveLength(4);
  expect(screen.getByRole('button', { name: 'seasonal' })).toBeTruthy();
});

test('filters items by category and restores all items with the all filter', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'breakfast' }));
  expect(screen.getAllByRole('img')).toHaveLength(2);
  expect(
    screen.getByRole('button', { name: 'breakfast' }).getAttribute('aria-pressed')
  ).toBe('true');

  fireEvent.click(screen.getByRole('button', { name: 'all' }));
  expect(screen.getAllByRole('img')).toHaveLength(4);
}, 30000);
