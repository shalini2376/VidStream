import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const Header = styled.nav`
  display: flex;
  padding: 10px 0px 10px 20px;
  background-color: ${props => props.bgColor};
`
export const Heading = styled.h1`
  margin-top: 0px;
  margin-left: ${props => props.marginLeft}px;
  margin-bottom: ${props => props.marginBottom}px;
  color: ${props => props.color};
`
export const IconButton = styled.button`
  color: red;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  background-color: ${props => props.bgColor};
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Image = styled.img`
  width: 250px;
`
export const Para = styled.p`
  margin-top: 0px;
  color: ${props => props.color};
`
export const DisplaySavedVideos = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 15px;
  margin: 10px;
  padding: 0px;
`
export const ViewsAndTimeDiv = styled.div`
  display: flex;
  gap: 15px;
`

export const LinkTag = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
