import React from 'react';
import {Container,Row,Col,Button } from 'react-bootstrap'

function Search (props) {
  return (
    <Container style={{marginTop : '30px'}}>
    <Row className="justify-content-md-center" >
      <Col xs="auto">
       <form onSubmit={(e)=> props.onSubmitSearch(e)}>
           <input placeholder="Enter location" onChange={(e)=>props.onChangeSearch(e.target.value)}>
           </input>
       </form>
    </Col>      
    </Row>
  </Container>
  );
}

export default Search;
