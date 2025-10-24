/* eslint-env jasmine */
import { setStored, getStored, clearSession, STORAGE_KEYS } from '../src/utils/storage.js';

describe('storage clearSession', () => {
  beforeEach(() => {
    // ensure clean
    localStorage.clear();
  });

  it('removes the session key from localStorage', () => {
    setStored(STORAGE_KEYS.SESSION, { email: 'a@b.com' });
    expect(getStored(STORAGE_KEYS.SESSION, null)).not.toBe(null);
    clearSession();
    expect(getStored(STORAGE_KEYS.SESSION, null)).toBe(null);
  });
});
