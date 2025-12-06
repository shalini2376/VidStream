import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
  height: 100%;
`
export const ContentContainer = styled.div`
  flex-grow: 1;
`
