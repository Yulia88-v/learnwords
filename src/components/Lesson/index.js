import React from 'react';
import s from './lesson.module.css'; 


const Lesson= () =>{
	return(
		<>
		<div className={s.block}>
        <h1 className={s.listtitle}>Мы создали для Вас самоучитель английского языка,<br/>чтобы помочь увереннее разговарить<br/>на английском языке</h1>
        <ul className={s.list}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        </ul>
        <ul className={s.list2}>
        <li>Удобно использовать</li>
        <li>Экономит Ваше время</li>
        <li>Быстро запоминаете слова</li>
        </ul>
        </div>
       </>
		);
}
export default Lesson;