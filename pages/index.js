import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function Index() {
  const [game, setGame] = React.useState("");
  const handleChange = (e) => {
    setGame(e.target.value);
  };
  return (
    <Grid
      container
      direction="column"
      sx={{ paddingLeft: "100px", paddingTop: "20px" }}
    >
      <Grid item>
        <Typography variant="mainHead">How did the Magic play?</Typography>
      </Grid>
      <Grid item sx={{ paddingTop: "20px" }}>
        <FormControl sx={{ width: "600px" }}>
          <InputLabel id="game-select">Select a game</InputLabel>
          <Select
            labelId="game-select"
            id="game-id"
            value={game}
            label="Select a game"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
