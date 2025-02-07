import {render, screen} from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InputField from '../components/InputField'


describe('getbyRole', () =>{
  it('should be return getbyRole', () =>{
    render(<InputField/>)

    const element = screen.getByRole('textbox')
    expect(element).toBeInTheDocument()
  })
})