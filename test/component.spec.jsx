/* eslint-env jasmine */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TestHello from '../src/components/TestHello.jsx';

describe('TestHello component', () => {
  it('renders the provided name', () => {
    render(<TestHello name="Basti" />);
    const el = screen.getByText(/Hola, /i);
    expect(el).toBeTruthy();
    expect(el.textContent).toContain('Basti');
  });
});
