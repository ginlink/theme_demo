import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`

export default function index() {
  return <Wrapper>index</Wrapper>
}
