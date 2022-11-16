import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('input', ()=>{
    render(<App></App>)
    const roleInput = screen.getByRole('button')
    expect(roleInput).toBeInTheDocument()
  })
});