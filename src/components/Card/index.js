import React  from 'react';
import s from './card.module.css';


class Card extends React.Component {

       state ={
       	done:false,
       }

       onCardClick = () => {
       	   this.setState(state => ({
       	   	done: !state.done
       	   }));
       };


       render(){
       const { eng, rus } = this.props;
       const { done } = this.state;

       const cardClass = [s.card];
       if (done) {
         	cardClass.push(s.done);
       }

	return(
		
        <div 
        className={cardClass.join(' ')}
        onClick = {this.onCardClick}
        >
        <div className={s.cardInner}>
        <div className={s.cardFront}>
        {eng}
        </div>
        <div className={s.cardBack}>
        {rus}
        </div>
        </div>
        </div>
      
		);
}
}
export default Card;