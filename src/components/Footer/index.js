import React from 'react';
import s from './footer.module.css'; 
import ReactLogoPng from '../../logo.png';

const Footer = () => {
	return (
	<div className={s.footer}>
	<ul className={s.text}>
        <li><img src={ReactLogoPng}/></li>
        <li className={s.title}>Learn English</li>
        </ul>
	</div>
		);
	
};
export default Footer;