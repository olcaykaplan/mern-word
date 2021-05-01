import React from "react";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { red } from "@material-ui/core/colors";
import { Grid, InputLabel, TextField } from "@material-ui/core";

const NewTextArea = ({
  exampleValue,
  setWordState,
  wordState,
  index,
  removeExample,
}) => {
  const setChange = (e) => {
    const updateWordState = { ...wordState };
    updateWordState.examples[index] = e.target.value;
    setWordState(updateWordState);
  };

  return (
    <Grid container lg={12}>
      <Grid item lg={1}>
        <InputLabel>
          <RemoveCircleOutlineIcon
            style={{ color: red[500], fontSize: 30 }}
            onClick={removeExample}
          />{" "}
        </InputLabel>
      </Grid>

      <Grid item lg={11}>
        <TextField
          key={index}
          variant={"outlined"}
          multiline
          fullWidth
          rows={3}
          rowsMax={3}
          placeholder={
            "You can write more than one example. If you want to do, Click New Example"
          }
          value={exampleValue}
          onChange={(e) => setChange(e)}
        />
      </Grid>
    </Grid>
  );
};

export default NewTextArea;
