// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';
import '@testing-library/jest-dom/vitest'


describe('about', () =>{
  it('this is about component', () =>{
    render(<About/>)
    expect(screen.getByText('About')).toBeInTheDocument()
  })
})