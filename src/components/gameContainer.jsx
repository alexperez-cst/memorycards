import React, {useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Card from './card.jsx'
import Score from './score.jsx';
function GameContainer(){
	const [firstQuartArray,setFirstQuartArray] = useState([]);
	const [secondQuartArray,setSecondQuartArray] = useState([]);
	const [clickedCards,setClickedCards] = useState(new Set());
	const [puntuation,setPuntuation] = useState(0);
	useEffect(() =>{
		let onClickCard = (e) =>{
			if(clickedCards.has(e.target.innerText)){
				setPuntuation(0);
				setClickedCards(new Set());
				console.log(clickedCards)
			}else{
				setPuntuation(punt => punt + 1)
				console.log('also here')
				randomize();
				setClickedCards(c => c.add(e.target.innerText));
				console.log(clickedCards)
			}
		}
		onClickCard = onClickCard.bind(GameContainer);
		function randomize(){
			setFirstQuartArray([]);
			setSecondQuartArray([]);
			const addCard = id => <Col sm><Card id={id} click={onClickCard}></Card></Col>;
			const elected = new Set();
			while(true){
				const ranNum = ~~(Math.random() * 8);
				if(!elected.has(ranNum)){
				elected.add(ranNum);
					ranNum<4
						? setFirstQuartArray((state) => [...state,addCard(ranNum)])
						:	setSecondQuartArray((state) => [...state,addCard(ranNum)]);
				}
				if(elected.size === 8) break;
			}
		}
		randomize();
	},[clickedCards]);
	return (
		<Container>
			<Score puntuation={puntuation}/>
			<Row>
				{firstQuartArray.map(card => card)}
			</Row>
			<br/>
			<Row>
				{secondQuartArray.map(card => card)}
			</Row>
		</Container>
	);
}
export default GameContainer;