import { memo, MouseEvent } from 'react'
import './Button.scss'

interface IProps {
  text: string
  onClickAction?: (e: MouseEvent<any>) => void
}

function Button({ text, onClickAction }: IProps) {
  return (
    <div className='button-wrapper'>
      <button onClick={onClickAction}>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  text: '',
  onClickAction: () => null,
}

export default memo(Button)
