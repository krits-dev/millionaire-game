import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'
import { QuestionsService } from 'service/QuestionsService'
import { useQuery } from 'react-query'

interface IContext {
  children: ReactNode
}

export interface IQuestion {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface IQuestionsContext {
  questions: IQuestion[]
  current: number
  setCurrent: Dispatch<SetStateAction<number>>
  isCorrect: boolean
  setIsCorrect: Dispatch<SetStateAction<boolean>>
  lockItem: boolean
  setLockItem: Dispatch<SetStateAction<boolean>>
  endGame: boolean
  setEndGame: Dispatch<SetStateAction<boolean>>
  lose: boolean
  setLose: Dispatch<SetStateAction<boolean>>
  newGame: (amount: number) => void
  restartGame: () => void
  clearColor: boolean
  isLoading: boolean
}

export const QuestionsContext = createContext<IQuestionsContext | null>(null)

function QuestionsProvider({ children }: IContext) {
  const [questions, setQuestions] = useState<IQuestion[] | []>([])
  const [current, setCurrent] = useState(0)
  const [amount, setAmount] = useState(1)
  const [isCorrect, setIsCorrect] = useState(false)
  const [lockItem, setLockItem] = useState(false)
  const [clearColor, setClearColor] = useState(false)
  const [lose, setLose] = useState(false)
  const [endGame, setEndGame] = useState(false)

  const { isLoading } = useQuery(
    ['health news', amount],
    () => QuestionsService.getQuestions(amount),
    {
      onSuccess: ({ data }) => {
        setQuestions(data.results)
      },
      onError: (error: any) => {
        alert(error.message)
      },
    }
  )

  const newGame = (amount: number) => {
    setAmount(amount)
    setLockItem(false)
    setCurrent(0)
    setIsCorrect(false)
    setLose(false)
    setEndGame(false)
    setClearColor(!clearColor)
    
  }

  const restartGame = () => {
    setLockItem(false)
    setCurrent(0)
    setIsCorrect(false)
    setClearColor(!clearColor)
    setLose(false)
    setEndGame(false)
  }

  const value = {
    questions,
    current,
    setCurrent,
    isCorrect,
    setIsCorrect,
    lockItem,
    setLockItem,
    endGame,
    setEndGame,
    lose,
    setLose,
    newGame,
    restartGame,
    clearColor,
    isLoading,
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsProvider
