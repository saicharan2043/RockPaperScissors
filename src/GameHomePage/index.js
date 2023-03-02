import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameItem from '../GameItem'

import {
  BgColor,
  TopContainer,
  LeftContainer,
  Paragraph,
  RightContainer,
  ScoreText,
  UnOrderList,
  PopupContainer,
  TriggerButton,
  BgcontainerOfPopup,
  CloseButton,
  RulesImg,
  WinningContainer,
  YouContainer,
  YourText,
  GameLogo,
  TextWinning,
  PlayAgain,
} from './styledComponent'

class GameHomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isTrue: true,
      score: 0,
      winningStatus: '',
      randomNo: 0,
      choicesLists: props.choicesList,
      YouImage: 'SCISSORS',
    }
  }

  clickImgLogo = id => {
    const rendomNo = Math.floor(Math.random() * 3)
    console.log(rendomNo)
    const {choicesLists} = this.state
    choicesLists.forEach(element => {
      if (element.id === id) {
        if (element.id === 'PAPER' && choicesLists[rendomNo].id === 'ROCK') {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score + 1,
            winningStatus: 'YOU WON',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else if (
          element.id === 'SCISSORS' &&
          choicesLists[rendomNo].id === 'ROCK'
        ) {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score - 1,
            winningStatus: 'YOU LOSE',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else if (
          element.id === 'ROCK' &&
          choicesLists[rendomNo].id === 'PAPER'
        ) {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score - 1,
            winningStatus: 'YOU LOSE',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else if (
          element.id === 'SCISSORS' &&
          choicesLists[rendomNo].id === 'PAPER'
        ) {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score + 1,
            winningStatus: 'YOU WON',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else if (
          element.id === 'ROCK' &&
          choicesLists[rendomNo].id === 'SCISSORS'
        ) {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score + 1,
            winningStatus: 'YOU WON',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else if (
          element.id === 'PAPER' &&
          choicesLists[rendomNo].id === 'SCISSORS'
        ) {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score - 1,
            winningStatus: 'YOU LOSE',
            randomNo: rendomNo,
            YouImage: id,
          }))
        } else {
          this.setState(privews => ({
            isTrue: false,
            score: privews.score,
            winningStatus: 'IT IS DRAW',
            randomNo: rendomNo,
            YouImage: id,
          }))
        }
      }
    })
  }

  againPlay = () => {
    this.setState({isTrue: true})
  }

  render() {
    const {
      isTrue,
      score,
      winningStatus,
      randomNo,
      choicesLists,
      YouImage,
    } = this.state
    const imgUrl = choicesLists.filter(echValue => echValue.id === YouImage)
    console.log(imgUrl[0].imageUrl)

    return (
      <BgColor>
        <TopContainer>
          <LeftContainer>
            <Paragraph>
              ROCK <br /> PAPER <br />
              SCISSORS
            </Paragraph>
          </LeftContainer>

          <RightContainer>
            <ScoreText>Score</ScoreText>
            <ScoreText weight>{score}</ScoreText>
          </RightContainer>
        </TopContainer>

        {isTrue ? (
          <UnOrderList>
            {choicesLists.map(echValue => (
              <GameItem
                itemList={echValue}
                key={echValue.id}
                clickImgLogo={this.clickImgLogo}
              />
            ))}
          </UnOrderList>
        ) : (
          <>
            <WinningContainer>
              <YouContainer>
                <YourText>YOU</YourText>
                <GameLogo src={imgUrl[0].imageUrl} alt="your choice" />
              </YouContainer>

              <YouContainer>
                <YourText>OPPONENT</YourText>
                <GameLogo
                  src={choicesLists[randomNo].imageUrl}
                  alt="opponent choice"
                />
              </YouContainer>
            </WinningContainer>
            <TextWinning>{winningStatus}</TextWinning>
            <PlayAgain onClick={this.againPlay}>PLAY AGAIN</PlayAgain>
          </>
        )}

        <PopupContainer>
          <Popup
            modal
            trigger={
              <TriggerButton className="trigger-button" type="button">
                RULES
              </TriggerButton>
            }
            position="top left"
          >
            {close => (
              <BgcontainerOfPopup>
                <CloseButton onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </BgcontainerOfPopup>
            )}
          </Popup>
        </PopupContainer>
      </BgColor>
    )
  }
}

export default GameHomePage
