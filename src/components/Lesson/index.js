import React from 'react';
import s from './lesson.module.css'; 


const Lesson= () =>{
	return(
		<>
		<div className={s.block}>
        <h1 className={s.listtitle}>Мы создали для Вас самоучитель английского языка,<br/>чтобы помочь увереннее разговарить<br/>на английском языке</h1>
        </div>
        <div className={s.list}>

       <div>
        <h1 className={s.number}>1</h1>
        <h1 className={s.text}>Удобно использовать</h1>
        </div>
        <div>
        <h1 className={s.number}>2</h1>
        <h1 className={s.text}>Экономит Ваше время</h1>
        </div>
        <div>
        <h1 className={s.number}>3</h1>
        <h1 className={s.text}>Быстро запоминаете слова</h1>
        </div>
        </div>
       </>
		);
}
export default Lesson;