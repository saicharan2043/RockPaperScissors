import styled from 'styled-components'

export const BgColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (max-width: 767px) {
    padding: 10px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

export const TopContainer = styled.div`
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-left: 35px;
  padding-right: 35px;
  margin-bottom: 100px;
  @media (max-width: 767px) {
    width: 95%;
    padding: 15px;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`

export const Paragraph = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 0px;
  margin-top: 5px;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 30px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  width: 150px;
  @media (max-width: 767px) {
    padding: 10px;
    width: 150px;
  }
`

export const ScoreText = styled.p`
  margin-bottom: 0px;
  font-family: 'Roboto';
  margin-top: 10px;
  font-size: ${props => (props.weight ? '50px' : '30px')};

  text-align: center;
  color: #223a5f;
  font-weight: ${props => (props.weight ? 'blod' : 0)};
  @media (max-width: 767px) {
    font-size: ${props => (props.weight ? '30px' : '18px')};
  }
`

export const UnOrderList = styled.ul`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0px;
  }
`

export const PopupContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const TriggerButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: black;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  width: 150px;
  font-weight: bold;
  height: 50px;
`

export const BgcontainerOfPopup = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 25px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  width: 35px;
  height: 35px;
  align-self: flex-end;
  margin-bottom: 10px;
`

export const RulesImg = styled.img`
  height: 500px;
  width: 90%;
  @media (max-width: 767px) {
    width: 80%;
    height: 250px;
  }
`

export const WinningContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const YourText = styled.p`
  font-family: Roboto;
  font-size: 25px;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: bold;
`

export const GameLogo = styled.img`
  height: 200px;
  @media (max-width: 767px) {
    height: 170px;
  }
`

export const TextWinning = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  color: #ffffff;
  margin-bottom: 25px;
  text-align: center;
  font-weight: bold;
`

export const PlayAgain = styled.button`
  width: 250px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #223a5f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px;
  font-weight: bold;
  margin-bottom: 60px;
`
