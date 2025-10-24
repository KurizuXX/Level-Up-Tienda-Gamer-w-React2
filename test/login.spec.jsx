/* eslint-env jasmine */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../src/pages/Login.jsx';
import { setStored, getStored, STORAGE_KEYS } from '../src/utils/storage.js';
import { MemoryRouter } from 'react-router-dom';

describe('Login page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('logs in a valid user and sets session', () => {
    const user = { email: 'u@x.com', password: '1234' };
    setStored(STORAGE_KEYS.USERS, [user]);

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByPlaceholderText('Email');
    const passInput = getByPlaceholderText('Contraseña');
    const btn = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: user.email } });
    fireEvent.change(passInput, { target: { value: user.password } });
    fireEvent.click(btn);

    expect(getStored(STORAGE_KEYS.SESSION, null)).not.toBe(null);
    expect(getStored(STORAGE_KEYS.SESSION, null).email).toBe(user.email);
  });
});
