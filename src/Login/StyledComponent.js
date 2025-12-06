import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  border: 2px solid #000000;
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px 40px;
  box-shadow: 0px 0px 5px 4px #f1f1f1;
  @media screen and (max-width: 300px) {
    padding: 0px;
  }
`
export const NxtWatchLogo = styled.img`
  width: 120px;
  margin-top: 5px;
`
export const LoginForm = styled.form`
  padding: 20px 14px;
  margin-bottom: 10px;
`
export const LoginLabel = styled.label`
  font-size: 15px;
  margin-left: ${props => props.marginLeft};
`
export const LoginInputField = styled.input`
  border-radius: 5px;
  padding: 6px;
  margin: 5px 0px;
  border: 1px solid #181818;
  outline: none;
  margin: ${props => props.margin};
`
export const LoginButton = styled.button`
  border: none;
  outline: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  margin-top: 16px;
  width: 100%;
`
export const ErrorMessage = styled.p`
  margin: 0px;
  color: #ff0000;
  font-size: 14px;
`
