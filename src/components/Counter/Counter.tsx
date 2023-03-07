import { useContext } from 'react'
import { QuestionsContext, IQuestionsContext } from 'provider/QuestionsProvider'
import './Counter.scss'

function Counter() {
  const { questions, current } = useContext(
    QuestionsContext
  ) as IQuestionsContext
  return (
    <div className='counter-wrapper'>
      {current + 1} of {questions.length}
    </div>
  )
}

export default Counter
