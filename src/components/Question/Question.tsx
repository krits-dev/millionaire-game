import { useContext } from 'react'
import { QuestionsContext, IQuestionsContext } from 'provider/QuestionsProvider'
import { Item } from './Item'
import { Title } from 'components/UI'
import { Counter } from 'components'
import './Question.scss'

function Question() {
  const { questions, current, isLoading } = useContext(
    QuestionsContext
  ) as IQuestionsContext

  const question = questions?.map(
    // eslint-disable-next-line
    ({ correct_answer, incorrect_answers, question }, index) => {
      if (index === current) {
        return (
          <div key={question} className='question-container'>
            <div className='title-wrapper'>
              <Title text={question} />
            </div>
            <div className='question-wrapper'>
              <div className='items-wrapper'>
                <Item text={correct_answer} correct />
                {incorrect_answers?.map((answer) => {
                  return <Item key={answer} text={answer} />
                })}
              </div>
            </div>
          </div>
        )
      }
    }
  )

  if (isLoading) return <div className='loading'>Loading...</div>
  return (
    <>
      <Counter />
      {question}
    </>
  )
}
export default Question
