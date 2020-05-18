import React from 'react';
import  s from'./headerblock.module.css';
import ReactLogoPng from '../../logo.png';

const HeaderBlock=({ hideBackground = false, descr,children})=>{
	
     const stylecover = hideBackground ? {backgroundImage:'none'} : {};
	return(
    <div className={s.cover} style={stylecover}>
    <div className={s.wrap}>
    
    
    {children}
    </div>
    </div>
		);
};
export default HeaderBlock;