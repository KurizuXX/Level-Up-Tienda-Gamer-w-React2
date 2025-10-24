/* eslint-env jasmine */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../src/components/Navbar.jsx';
import { setStored, getStored, STORAGE_KEYS } from '../src/utils/storage.js';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('shows cart badge and user greeting when session exists and removes them on logout', () => {
    // prepare localStorage
    setStored(STORAGE_KEYS.CART, [{ id: 1, qty: 2 }]);
    setStored(STORAGE_KEYS.SESSION, { email: 'test@x.com' });

    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // greeting exists
    expect(container.textContent).toContain('Hola');
    expect(container.textContent).toContain('test@x.com');

    // cart badge shows quantity
    expect(container.querySelector('.cart-badge').textContent).toBe('2');

    // click logout button
    const logoutBtn = container.querySelector('.logout-btn');
    expect(logoutBtn).toBeTruthy();
    fireEvent.click(logoutBtn);

    // session cleared and login link appears
    expect(getStored(STORAGE_KEYS.SESSION, null)).toBe(null);
    expect(container.textContent).toContain('Ingresar');
  });
});
