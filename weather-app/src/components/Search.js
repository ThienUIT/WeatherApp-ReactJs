import React from "react";
import   "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Search(props) {
  return (
    <Container
      style={{
        marginTop: "30px",
      }}
    >
      <Row className="justify-content-md-center">
        <Col xs="8">
          <form onSubmit={(e) => props.onSubmitSearch(e)}>
            <input
              className="search"
              placeholder="Enter location"
              onChange={(e) => props.onChangeSearch(e.target.value)}
            ></input>{" "}
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
