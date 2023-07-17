import css from './left-side.module.css';
import picture from '../../../../assets/why-not/illustration.svg';

const HostLeftSide = () => {
    return (
        <div className={css.leftSideContainer}>
            <h1 className={css.title}>Why host your writing portfolio with Clippings.me?</h1>
            <div className={css.line}></div>
            <p className={css.descrition}>
            Thousands of journalists, writers and bloggers around the world trust Clippings.me to store and display their work.
            </p>
            <img className={css.pic} src={picture} alt='pic' />
        </div>
    )
}

export default HostLeftSide;