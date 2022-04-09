import React, { useCallback, useState } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components/macro'
import { dark, light } from './theme'
import ResetCSS from './ResetCSS'
import Hello from './components/Hello'

const Wrapper = styled.div`
  min-height: 200vh;
`

const Button = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  width: fit-content;
  padding: 8px 32px;
  cursor: pointer;
`

function App() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark')

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeProvider theme={themeMode === 'dark' ? dark : light}>
      <ResetCSS />

      <Wrapper>
        <Hello />

        <Button onClick={() => toggleThemeMode()}>Change theme</Button>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
