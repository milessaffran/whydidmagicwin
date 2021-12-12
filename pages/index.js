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
import { useEffect, useState } from "react";
import GameResult from "./GameResult";

export default function Index() {
  // This code loads the list of games from BREF and stores it in gameList
  const [gameList, setGameList] = useState([]);

  useEffect(
    () =>
      fetch("http://localhost:3000/api/crawler", {
        method: "GET",
      })
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            throw Error(res.statusText);
          }
        })
        .then((data) => {
          setGameList(data);
        })
        .catch(console.error),
    []
  );

  // This code holds the current game selection
  const [game, setGame] = useState("");

  // This sets the game variable to whichever game is selected in the dropdown
  const handleChange = (e) => {
    setGame(e.target.value);
    console.log(e.target.value);
  };

  //   If the game list isn't loading, just show generic loading page.
  if (gameList == [] || gameList.length == 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <Grid
        container
        direction="column"
        sx={{ paddingLeft: "100px", paddingTop: "20px" }}
      >
        {console.log(gameList.map((item) => item.oppID))}
        <Grid item>
          <Typography variant="mainHead">How did the Magic play?</Typography>
        </Grid>
        <Grid item sx={{ paddingTop: "20px" }}>
          <FormControl sx={{ width: "600px" }}>
            <InputLabel id="game-select">Select a game</InputLabel>
            <Select
              labelId="game-select"
              id="game-id"
              value={game ? game : " "}
              label="Select a game"
              onChange={handleChange}
            >
              {gameList.map((item) => (
                <MenuItem key={item.dateGame} value={item.oppID}>
                  <Typography
                    sx={{ color: item.gameResult == "W" ? "green" : "red" }}
                  >
                    {item.dateGame + ", "} {item.gameResult + " against "}
                    {item.oppID}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ paddingTop: "20px" }}>
          {game != "" ? <GameResult gameInfo={game} /> : null}
        </Grid>
      </Grid>
    );
  }
}
