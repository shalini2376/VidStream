import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosThumbnailContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto';
  padding: 5px;
  width: 250px;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`
export const VideosDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const DescriptionDiv = styled.div`
  display: flex;
  flex-irection: row;
  gap: 10px;
  margin: 5px 0px;
  padding-top: 4px;
  height: 150px;
`
export const ViewsAndTimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  gap: 10px;
`
export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
export const DescriptionText = styled.p`
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  color: ${props => props.color};
`
export const LinkTag = styled(Link)`
  text-decoration: none;
  color: inherit;
`
