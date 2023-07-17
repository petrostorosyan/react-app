import css from './header.module.css';
import { useEffect, useState } from "react";

const Header = () => {

    const [count, setCount] = useState(5);
    const [text, setText] = useState('');

    
    useEffect(()=> {
       if(count>10) {
        alert('works correctly')
       }
    }, [count]);

    const btnClick = () => {
        setCount(count + 1);
    }

    const change = (e) => {
       setText(e.target.value);
    }

    return (
        <div className={css.headerBox}>
            <h1>Home page</h1>
            <p>count {count}</p>
            <input className={css.inputBox} type='text' onChange={change} />
            <p className={css.inputText}>{text}</p>
            <button className={css.btn} onClick={btnClick}>click me</button>
        </div>
    );
}
 
export default Header;