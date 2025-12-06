import styled from 'styled-components'

export const DetailVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100%;
  min-height: 100vh;
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
`
export const TitleHeading = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 5px;
  color: ${props => props.color};
`
export const ViewsCountAndLikeDislikeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => props.color};
`
export const ViewsAndTimeDiv = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 10px;
`
export const LikeDislikeAndSaveBtnDiv = styled.div`
  display: flex;
  gap: 5px;
  padding-right: 10px;
`
export const CustomButton = styled.button`
  cursor: pointer;
  color: ${props => props.color};
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: ${props => props.bgColor};
  padding: ${props => props.padding};
`
export const ChannelLogoAndNameDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0px;
`
export const Image = styled.img`
  width: 50px;
  height: 50px;
`
export const ChannelNameAndSubscribersDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.color};
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Para = styled.p`
  margin-top: 0px;
  margin-bottom: 6px;
  font-size: 14px;
  color: ${props => props.color};
`
export const Hr = styled.hr`
  width: 100%;
  display: block;
  border: 1.5px solid #475569;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 6px;
`
export const FailureImage = styled.img`
  width: 200px;
`
export const Heading = styled.h3`
  margin-bottom: 4px;
  color: ${props => props.color};
`
