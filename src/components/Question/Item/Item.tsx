import { useState, useContext, useEffect } from 'react'
import { QuestionsContext, IQuestionsContext } from 'provider/QuestionsProvider'
import './Item.scss'

interface IProps {
  text: string
  correct?: boolean
}

function Item({ text, correct }: IProps) {
  const {
    isCorrect,
    setIsCorrect,
    lockItem,
    setLockItem,
    current,
    setCurrent,
    setEndGame,
    clearColor,
    setLose,
    questions,
  } = useContext(QuestionsContext) as IQuestionsContext
  const [color, setColor] = useState('')

  const length = questions.length

  useEffect(() => {
    setColor('')
  }, [clearColor])

  const handleAnswer = () => {
    setLockItem(true)
    setColor('yellow')
    setTimeout(() => {
      const answerColor = correct ? 'green' : 'red'
      setColor(answerColor)
      if (!correct) {
        setIsCorrect(true)
        setEndGame(true)
        setLose(true)
      }
    }, 1000)
    setTimeout(() => {
      if (correct && length !== current + 1) {
        setLockItem(false)
        setCurrent(current + 1)
      } else {
        setEndGame(true)
      }
    }, 2000)
  }

  let changeColor = correct && isCorrect ? 'green' : color

  return (
    <div className='item'>
      <button
        className={changeColor}
        onClick={() => handleAnswer()}
        disabled={lockItem}
      >
        {text}
      </button>
    </div>
  )
}

Item.defaultProps = {
  text: '',
  correct: false,
}

export default Item
