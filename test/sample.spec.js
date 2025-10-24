/* eslint-env jasmine */
import { setStored, getStored, STORAGE_KEYS } from '../src/utils/storage.js';

describe('storage utils', () => {
  beforeEach(() => {
    // clean any leftover key
    localStorage.removeItem('test_key');
  });

  it('sets and gets a value in localStorage', () => {
    const obj = { a: 1 };
    setStored('test_key', obj);
    const got = getStored('test_key', null);
    expect(got).toEqual(obj);
  });

  it('returns fallback when key missing', () => {
    const fallback = { ok: false };
    expect(getStored('no_such_key', fallback)).toBe(fallback);
  });
});
