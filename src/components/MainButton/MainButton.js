import style from './MainButton.module.css'
import Arrow from '../icons/Arrow.svg'

const MainButton = ({text, isArrow}) => {
  return (
    <button className={style.button}>
      {text}
      <img src={Arrow} alt='button' style={{display: isArrow ? '' : 'none'}}/>
    </button>
  );
}

export default MainButton;
