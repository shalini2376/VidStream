import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: 'Roboto';
`
export const HomeVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 12px;
`
export const OnlyVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
`
export const SearchField = styled.input`
  padding: 6px 26px 6px 6px;
  width: 100%;
  max-width: 400px;
  min-width: 100px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  outline: none;
  border: 2px solid #231f20;
`

export const SearchBtn = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 3.3px;
  width: 53px;
  margin-left: -55px; /* Pull the button inside the input visually */
  z-index: 1;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: 42% 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 20px 0px 20px 12px;
  height: 180px;
  margin: 15px 0px;
`
export const BannerImage = styled.img`
  width: 100px;
`
export const CustomButton = styled.button`
  background-color: transparent;
  align-self: ${props => props.alignSelf};
  border: ${props => props.border};
  outline: ${props => props.outline};
  font-size: ${props => props.fontSize}px;
  position: ${props => props.position};
  right: ${props => props.right}px;
  top: ${props => props.top}px;
  padding: ${props => props.padding};
  cursor: pointer;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.borderRadius};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 6px;
`
export const FailureImage = styled.img`
  width: 200px;
`
export const Heading = styled.h1`
  margin-bottom: 5px;
  color: ${props => props.color};
`
export const Text = styled.p`
  margin-bottom: 15px;
  color: ${props => props.color};
  text-align: center;
`
