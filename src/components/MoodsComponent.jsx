import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Workout from "./WorkoutComponent";

const videos = {
  happy: [
    "https://www.youtube.com/watch?v=FPBmVnsZaN8&ab_channel=Psych2Go",
    "https://www.youtube.com/watch?v=DODLEX4zzLQ&ab_channel=TigerProductions",
    "https://www.youtube.com/watch?v=Ai_8pJf5TSs&ab_channel=America%27sFunniestHomeVideos"
  ],
  workout: [
    "https://www.youtube.com/watch?v=4bFhYvADjl4&ab_channel=RayAndPES",
    "https://www.youtube.com/watch?v=Zy5c2k3W458",
  ],
  motivated: [
    "https://www.youtube.com/watch?v=PAFcHMidJj8&ab_channel=BurakDe%C4%9FerBi%C3%A7er",
  ],
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  dropDown: {
    width: 200,
  },
});

export default function Moods() {
  const classes = useStyles();

  const [mood, setMood] = React.useState("");

  const handleChange = (event) => {
    setMood(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Card className="card">
      <CardContent className="card-color">
        <Typography id="text-color" gutterBottom>
          <h1>Desired Mood</h1>
        </Typography>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="text-color">Moods</InputLabel>
          <Select
            id="text-color"
            className={classes.dropDown}
            value={mood}
            onChange={handleChange}
          >
            <MenuItem className="happy" value={"happy"}>Happy</MenuItem>
            <MenuItem value={"workout"}>Workout</MenuItem>
            <MenuItem value={"motivated"}>Motivated</MenuItem>
          </Select>
        </FormControl>
        {mood && videos[mood].map((x) => <Workout url={x} />)}
      </CardContent>
    </Card>
  );
}
