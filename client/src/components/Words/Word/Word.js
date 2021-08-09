import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import classes from "./Words.module.css";

import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
const Word = ({ word, index, history }) => {
  const cardsColor = ["success", "warning", "info"];
  const variant = cardsColor[index % cardsColor.length];

  const handleClick = () => {
    history.push(`/word/${word._id}`);
  };

  return (
    <Grid item xs={11} sm={5} md={6} lg={4} xl={4}>
      <Card
        bg={variant.toLowerCase()}
        key={index}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        className={["mb-2", classes.Card]}
      >
        <Card.Header>
          <b>Lern Up</b>
        </Card.Header>
        <Card.Body>
          <Card.Title> {word.name} </Card.Title>
          <hr />
          <Card.Text>{word.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button>Details</Button>
          <Button onClick={handleClick}>Update</Button>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default withRouter(Word);
