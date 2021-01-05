import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
function Score(props) {
  const [maxPunt, setMaxPunt] = useState(0);
  useEffect(() => {
		console.log('update')
		if(props.puntuation !== 0 && props.puntuation > maxPunt){
			setMaxPunt(props.puntuation);
		}
  }, [props.puntuation]);
  return (
    <Row>
      <Col md><h2 id='score'>Score: {props.puntuation} Max Score: {maxPunt}</h2></Col>
    </Row>
  );
}
export default Score;
