import React, { useCallback, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled, { ThemeProvider } from 'styled-components/macro'
import { dark, light } from './theme'
import ResetCSS from './ResetCSS'
import Hello from './components/Hello'

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
      <Hello />

      <Button onClick={() => toggleThemeMode()}>切换主题</Button>
    </ThemeProvider>
  )
}

export default App
