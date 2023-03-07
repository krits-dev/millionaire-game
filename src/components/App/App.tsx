import { Question, Panel } from 'components'
import QuestionsProvider from 'provider/QuestionsProvider'
import './App.scss'

function App() {
  return (
    <QuestionsProvider>
      <div className='bg-container'>
        <div className='app-container'>
          <Panel />
          <Question />
        </div>
      </div>
    </QuestionsProvider>
  )
}

export default App
