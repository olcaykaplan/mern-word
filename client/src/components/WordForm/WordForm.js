import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import classes from "./WordForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createWord } from "../../actions/wordsAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import words from "../../reducers/words";
import { green } from "@material-ui/core/colors";
import NewTextArea from "../UI Components/NewTextArea/NewTextArea";
import { useParams } from "react-router";
const WordForm = (props) => {
  const [wordState, setWordState] = useState({
    name: "",
    description: "",
    examples: [],
  });
  let { wordID } = useParams();
  const [examples, setExamples] = useState([]);
  const dispatch = useDispatch();

  const wordData = useSelector((state) =>
    wordID ? state.words.find((w) => w._id == wordID) : null
  );
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createWord(wordState));
    clearForm();
  };

  const clearForm = () => {
    // setWordState({name:'', description:'', examples:[]})
    console.table(wordState.examples);
  };

  const addTextArea = () => {
    let newText = (
      <NewTextArea
        index={count}
        exampleValue={wordState.examples[count]}
        setWordState={setWordState}
        wordState={wordState}
        removeExample={() => removeExample(count)}
      />
    );
    examples.push(newText);
    //Count will help to find target example in the array.
    setCount(count + 1);
  };
  const removeExample = (index) => {
    // Edit UI Examples textarea array
    alert(index);
    const newExamplesUI = examples.filter((ex, i) => i !== index);
    setExamples(newExamplesUI);

    //Edit wordState example array
    const newExamples = wordState.examples.filter((ex, i) => i !== index);
    console.log(" 47 satır NEW EXAMPLES ", newExamples);
    setWordState({
      ...wordState,
      examples: newExamples,
    });
  };

  // UPDATE OPERATION WILL TRIGGER HERE
  return (
    <Container className={classes.container}>
      <Form className={classes.formbody} onSubmit={handleSubmit}>
        <h2>ADD NEW WORD</h2>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Word Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Word Name"
            value={wordState.name}
            onChange={(e) =>
              setWordState({ ...wordState, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group id={"examples"} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Word Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe it"
            value={wordState.description}
            onChange={(e) =>
              setWordState({ ...wordState, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/*  New Example BUTTON HERE  +++  */}
          {/* ADD DYNAMIC TEXTAREA EXAMPLE   +++   */}
          {/* REMOVE DYNAMIC TEXTAREA EXAMPLE --- */}
          <Form.Label>
            <AddCircleOutlineIcon
              style={{ color: green[500], fontSize: 30, marginBottom: "15px" }}
              onClick={addTextArea}
            />{" "}
            New Example
          </Form.Label>
          {examples.map((t) => t)}
        </Form.Group>
        <Button variant={"primary"} type={"submit"} size={"lg"}>
          Create{" "}
        </Button>
        <Button
          variant={"primary"}
          type={"button"}
          size={"lg"}
          onClick={clearForm}
        >
          Clear
        </Button>
        {/* CLEAR BUTTON HERE */}
      </Form>
    </Container>
  );
};

export default WordForm;
