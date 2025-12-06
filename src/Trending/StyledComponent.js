import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`
export const TrendingHeader = styled.nav`
  display: flex;
  padding: 10px 0px 10px 20px;
  background-color: ${props => props.bgColor};
`
export const TrendingHeading = styled.h1`
  margin: 0px;
  color: ${props => props.color};
`

export const TrendingVideosContianer = styled.div`
  display: flex;
  width: 100%;
  margin: 8px 0px;
`
export const TrendingThumbnailImg = styled.img`
  width: 250px;
`
export const TrandingDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`
export const Heading = styled.p`
  margin-bottom: 4px;
  color: ${props => props.color};
  font-size: 20px;
  font-weight: bold;
`
export const Para = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  color: #475569;
`
export const TimeDiv = styled.div`
  display: flex;
  gap: 15px;
  color: #475569;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TrendingIconButton = styled.button`
  color: red;
  border-radius: 50%;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 15px;
  background-color: ${props => props.bgColor};
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
  cursor: pointer;
`
export const LinkTag = styled(Link)`
  text-decoration: none;
  color: inherited;
`
