import styled from 'styled-components'

export const List = styled.li`
  margin-right: 15px;
  margin-bottom: 10px;
  list-style: none;
  @media (max-width: 767px) {
    margin-right: 8px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
`

export const ImgLogo = styled.img`
  height: 250px;
  @media (max-width: 767px) {
    height: 150px;
  }
`
