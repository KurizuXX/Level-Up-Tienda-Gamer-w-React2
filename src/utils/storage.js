// src/utils/storage.js
export const STORAGE_KEYS = {
  USERS: 'lug_users',
  SESSION: 'lug_session',
  CART: 'lug_cart',
  CONTACT: 'lug_contact_messages',
};

export function getStored(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.SESSION);
}
