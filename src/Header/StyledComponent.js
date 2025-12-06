import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const LogoImg = styled.img`
  width: 100px;
`
export const HeaderNav = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`
export const CustomButton = styled.button`
  border: none;
  outline: none;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize}px;
  cursor: pointer;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 33px;
  padding: ${props => props.padding};
`
export const PopupBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center:
    align-items: center;
    gap: 20px;
`
export const PopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #212121;
  color: #ffffff;
  padding: 10px 20px 25px 20px;
  border-radius: 6px;
`
export const Image = styled.img`
  width: 30px;
`
