import {render, screen} from '@testing-library/react'
import { describe, it } from 'vitest'
import UserEvent from '../components/UserEvent'

describe('userEvent', () =>{
  it('Renders a counter with initial value of 0', () =>{
    render(<UserEvent/>)

  })

  screen.logTestingPlaygroundURL()
})