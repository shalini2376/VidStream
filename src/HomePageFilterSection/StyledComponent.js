import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FilterSection = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const VideosFilterListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const FilterButton = styled.button`
    display: flex;
    flex-direction: row:
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.bgColor};
    font-family: 'Roboto';
    width: 100%;
    padding: 8px 12px;
    color: ${props => props.color};

`
export const Span = styled.p`
  color: ${props => props.color};
  margin: 0px;
  font-size: 20px;
`

export const ContactUsContainer = styled.div`
  padding: 10px;
`
export const SocialMediaButtonContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const Image = styled.img`
  width: 30px;
`
export const BtnLink = styled(Link)`
  text-decoration: none;
`
export const Para = styled.p`
  margin-top: 8px;
  color: ${props => props.color};
`
