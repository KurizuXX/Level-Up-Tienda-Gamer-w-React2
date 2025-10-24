import React from 'react';

export default function TestHello({ name = 'Mundo' }) {
  return <div>Hola, <strong>{name}</strong></div>;
}
