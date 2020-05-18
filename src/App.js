import React, { Component } from 'react';

import HeaderBlock from'./components/HeaderBlock';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Paragraph2 from './components/Paragraph2';
import Card from './components/Card';
import Lesson from './components/Lesson';
import Footer from './components/Footer';
 
const WordsList = [
    {
        eng: 'between',
        rus: 'между'
    },
    {
        eng: 'high',
        rus: 'высокий'
    },
    {
        eng: 'really',
        rus: 'действительно'
    },
    {
        eng: 'something',
        rus: 'что-нибудь'
    },
    {
        eng: 'most',
        rus: 'большинство'
    },
    {
        eng: 'another',
        rus: 'другой'
    },
    {
        eng: 'much',
        rus: 'много'
    },
    {
        eng: 'family',
        rus: 'семья'
    },
    {
        eng: 'own',
        rus: 'личный'
    },
    {
        eng: 'out',
        rus: 'из/вне'
    },
    {
        eng: 'leave',
        rus: 'покидать'
    },
];


const App = () => {
	return (
	<>

	   <HeaderBlock>
	     <Header>
	         Онлайн-самоучитель нового<br/>поколения для быстрого изучения <br/> английского
	     </Header>
	     <Paragraph>
	        Научитесь учить английский прямо сейчас!
	     </Paragraph>
	</HeaderBlock>
	<Lesson>
	</Lesson>
	<HeaderBlock hideBackground>
	<Paragraph2>
	Английские слова для изучения на каждый день
	</Paragraph2>
	 <Paragraph>
    Метод использования карточек достаточно прост и уже неоднократно поколение студентов ин-яза пользовалось указанным методом. Для этого нужно изготовить колоду карточек, где сверху будет слово на русском, а с другой стороны - на английском. Человек листает карточки и называет слово. Если не помнит - откладывает карточку вниз колоды, чтоб ещё раз повторить и так до тех пор, пока не запомнятся все слова. Эту же колоду нужно использовать не раньше, чем через неделю, чтоб удостовериться, что все слова прочно засели в памяти. Вот как английские карточки могут выглядеть:
    </Paragraph>
   <div> 
    {
    	WordsList.map(({ eng, rus }, index) => (
    	<Card key={index} eng={eng} rus={rus} />
    	))
    }
    </div>
   
    </HeaderBlock>
	
	 
	<Footer>
	<Paragraph>
	Изучай английский вместе с нами!
	</Paragraph>
	</Footer>
	
    </>
    );
	};

export default App;