import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const GamingHeader = styled.nav`
  display: flex;
  padding: 10px 0px 10px 20px;
  background-color: ${props => props.bgColor};
`
export const GamingHeading = styled.h1`
  margin: 0px;
  color: ${props => props.color};
`
export const GamingIconButton = styled.button`
  color: red;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  margin-right: 5px;
  text-align: center;
  background-color: ${props => props.bgColor};
`
export const GamingVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 7px;
`
export const GamingThumbnailImg = styled.img`
  width: 180px;
  margin-bottom: 4px;
`
export const GamingVideoTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;
`
export const GamingVideoText = styled.p`
  margin: 0px;
  color: #475569;
`
export const GamingVideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 15px;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 6px;
`
export const FailureImage = styled.img`
  width: 200px;
`
export const CustomButton = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 8px 12px;
  font-size: 15px;
  margin-top: 5px;
  border-radius: 4px;
`
export const LinkTag = styled(Link)`
  text-decoration: none;
`
