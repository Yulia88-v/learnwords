import React from 'react';
import s from './paragraph.module.css';

const Paragraph2 =({children})=>{
	return (
		<p className={s.paragraph}>
        {children}
		</p>
		);
};
export default Paragraph2;