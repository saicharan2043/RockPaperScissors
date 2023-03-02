import {List, Button, ImgLogo} from './styledComponents'

const GameItem = props => {
  const {itemList, clickImgLogo} = props
  const {imageUrl, id} = itemList
  let testId
  if (id === 'ROCK') {
    testId = 'rockButton'
  } else if (id === 'SCISSORS') {
    testId = 'scissorsButton '
  } else {
    testId = 'paperButton'
  }

  const LogoClick = () => {
    clickImgLogo(id)
  }

  return (
    <List>
      <Button onClick={LogoClick} data-testid={testId}>
        <ImgLogo src={imageUrl} alt={id} />
      </Button>
    </List>
  )
}

export default GameItem
