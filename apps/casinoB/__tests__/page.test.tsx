import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Page from 'app/page'

test('Page', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: '🎰 Welcome to CasinoB Portal'})).toBeDefined()
    expect(screen.getByText('Select your market to continue:')).toBeDefined()
})