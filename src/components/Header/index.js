import React from 'react';
import s from './Header.module.css';
import ReactLogoPng from '../../logo.png';

const Header =({children}) => {
	return (
        <>
        <ul className={s.first}>
        <li><img src={ReactLogoPng}/></li>
        <li className={s.title}>Learn English</li>
        </ul>

        
		<h1 className={s.header}>
		{children}
		</h1>
		</>
		);
	};
	export default Header;
