import { useContext } from 'react'
import { QuestionsContext, IQuestionsContext } from 'provider/QuestionsProvider'
import './GameOver.scss'

function GameOver() {
  const { questions, current, endGame, lose } = useContext(
    QuestionsContext
  ) as IQuestionsContext

  return (
    <div className='game-over-wrapper'>
      {endGame && questions.length === current + 1 && !lose && (
        <h3>
          Game Over!
          <br /> You <span className='green'>win</span>
        </h3>
      )}
      {lose && (
        <h3>
          Game Over!
          <br /> You <span className='red'>lose</span>
        </h3>
      )}
    </div>
  )
}

export default GameOver
