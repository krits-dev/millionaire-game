import './Title.scss'

interface IProps {
  text: string
  page?: boolean
}

function Title({ text, page }: IProps) {
  return <div className='title'>{page ? <h1>{text}</h1> : <h2>{text}</h2>}</div>
}

Title.defaultProps = {
  text: '',
  page: false,
}

export default Title
