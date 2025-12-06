import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.bgColor};
  font-family: 'Roboto';
`
export const Image = styled.img`
  width: 250px;
`
export const Heading = styled.h1`
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const Para = styled.p`
  color: ${props => props.color};
  text-align: center;
  margin-top: 8px;
`
export const CustomButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #ffffff;
  border-radius: 6px;
`
