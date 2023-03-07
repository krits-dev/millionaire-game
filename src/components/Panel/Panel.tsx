import { useContext } from 'react'
import { QuestionsContext, IQuestionsContext } from 'provider/QuestionsProvider'
import { Button } from 'components/UI'
import { GameOver } from 'components'
import './Panel.scss'

function Panel() {
  const { newGame, restartGame } = useContext(
    QuestionsContext
  ) as IQuestionsContext

  return (
    <div className='panel-wrapper'>
      <GameOver />
      <Button text='Get 5' onClickAction={() => newGame(5)} />
      <Button text='Get 10' onClickAction={() => newGame(10)} />
      <Button text='Get 15' onClickAction={() => newGame(15)} />
      <Button text='Restart current' onClickAction={() => restartGame()} />
    </div>
  )
}

export default Panel
