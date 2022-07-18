import style from './Main.module.css'
import mainPhoto from '../icons/dmnMain.png'

const Main = () => {
    return (
        <div className={style.mainContent}>
            <div>
                <p>
                    We hire drivers from all across the United States, promoting quality opportunities for hardworking individuals of all backgrounds.
                </p>
                <p>
                    We require our drivers to have a minimum of two years experience, knowing they have the skills and reputation to successfully take on any special requests we receive from our customers.
                </p>
                <div className={style.mainContent__form}>
                    <form>
                        <div>
                            <input className={style.mainContent__form__input} placeholder='name' />
                        </div>
                        <div>
                            <input className={style.mainContent__form__input} placeholder='phone' type='number' />
                        </div>
                        <div>
                            <select className={style.mainContent__form__input}>
                                <option>
                                    Class a driving experience
                                </option>
                            </select>
                        </div>
                        <button className={style.mainContent__form__button}>
                            SEND
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <img src={mainPhoto} alt='mainPhoto'/>
            </div>
        </div>
    );
}

export default Main;