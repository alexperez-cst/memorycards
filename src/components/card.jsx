import React from 'react';
import {Card} from 'react-bootstrap'
import pitagoras from './img/pitagoras.png';
import deriavate from './img/derivate.png';
import cosines from './img/cosines.png'
import fermat from './img/fermat.png';
import phi from './img/phi.png';
import cuadratic from './img/cuadratic.png'
import sigma from './img/sigma.png'
import integral from './img/integral.png'
function GameCard(props){
	const posibilities = [pitagoras,deriavate,cosines,fermat,phi,cuadratic,sigma,integral];
	return (
		<Card id={props.id} bg='Light' onClick={props.click}>
			<Card.Img variant='top' src={posibilities[props.id]}></Card.Img>
			<Card.Body>
				<Card.Title>{props.id}</Card.Title>
			</Card.Body>
		</Card>
	);
}
export default GameCard;