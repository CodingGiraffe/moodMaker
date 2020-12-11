import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PlayerComponent from './PlayerComponent';

const videos = {
  happy: [
    'https://www.youtube.com/watch?v=FPBmVnsZaN8&ab_channel=Psych2Go',
    'https://www.youtube.com/watch?v=DODLEX4zzLQ&ab_channel=TigerProductions',
    'https://www.youtube.com/watch?v=Ai_8pJf5TSs&ab_channel=America%27sFunniestHomeVideos',
  ],
  inspirational: [
    'https://www.youtube.com/watch?v=mgmVOuLgFB0&ab_channel=MateuszM',
    'https://www.youtube.com/watch?v=YAzTIOy0ID0&ab_channel=MotivationHub',
    'https://www.youtube.com/watch?v=bq8eOm0zEIs&ab_channel=Daretodo.Motivation',
    'https://www.youtube.com/watch?v=26U_seo0a1g&ab_channel=MateuszM',
  ],
  motivated: [
    'https://www.youtube.com/watch?v=PAFcHMidJj8&ab_channel=BurakDe%C4%9FerBi%C3%A7er',
    'https://www.youtube.com/watch?v=TBuIGBCF9jc&ab_channel=MotivationHub',
    'https://www.youtube.com/watch?v=wnHW6o8WMas&ab_channel=BenLionelScott',
  ],
  calm: [
    'https://www.youtube.com/watch?v=lFcSrYw-ARY&ab_channel=MeditationRelaxMusic',
    'https://www.youtube.com/watch?v=1ZYbU82GVz4&ab_channel=SoothingRelaxation',
    'https://www.youtube.com/watch?v=kJFB6rH3z2A&ab_channel=BobRoss',
    'https://www.youtube.com/watch?v=ZToicYcHIOU&ab_channel=Calm',
  ],
  workout: [
    'https://www.youtube.com/watch?v=EykWcFEtFqo&ab_channel=HowardFreemanMotivation',
    'https://www.youtube.com/watch?v=Zy5c2k3W458',
    'https://www.youtube.com/watch?v=wnHW6o8WMas&ab_channel=BenLionelScott',
    'https://www.youtube.com/watch?v=nFBdDaK_6Ko&ab_channel=AlphaMotivation',
    'https://www.youtube.com/watch?v=dkKTUIipQpw&ab_channel=BeInspired-WorkoutMotivation',
    'https://www.youtube.com/watch?v=ESYYby1FuPc&ab_channel=MulliganBrothers',
  ],
  fishing: [
    'https://www.youtube.com/watch?v=-P0OVbWvw7I&ab_channel=TakeMeFishing',
    'https://www.youtube.com/watch?v=Mec3YcEi7dU&ab_channel=BlacktipH',
    'https://www.youtube.com/watch?v=5k3RDm6SlgQ&ab_channel=TroutHuntingNZ',
    'https://www.youtube.com/watch?v=KNsYDC-wFB4&ab_channel=RomoKayakFishing',
  ],
  running: [
    'https://www.youtube.com/watch?v=TVUXbF40lEQ&ab_channel=NickBare',
    'https://www.youtube.com/watch?v=gF0rrpMH-Jo&ab_channel=HowardFreemanMotivation',
    'https://www.youtube.com/watch?v=bvLvExUxlNE&ab_channel=NaturalSolution',
  ],
  golf: [
    'https://www.youtube.com/watch?v=HFCHz-0Hne8&ab_channel=MatthewMontgomeryGolf',
    'https://www.youtube.com/watch?v=jFfkwKvSjzc&ab_channel=RandomGolfClubFilms',
    'https://www.youtube.com/watch?v=YKMnOfDlFeE&ab_channel=GodofGolf',
    'https://www.youtube.com/watch?v=n1PhCPqMK40&ab_channel=GolfFocus',
  ],
  surfing: [
    'https://www.youtube.com/watch?v=k_Vd9SYg4wI&ab_channel=BarefootSurf',
    'https://www.youtube.com/watch?v=ecHp___bEdo&ab_channel=Inspired',
    'https://www.youtube.com/watch?v=rj7xMBxd5iY&ab_channel=AbsolutelyFlawless',
    'https://www.youtube.com/watch?v=DFko4-NMa2k&ab_channel=CharlieHook',
  ],
  guitar: [
    'https://www.youtube.com/watch?v=I-mcHk1Uu2k&ab_channel=GuitarGoddess',
    'https://www.youtube.com/watch?v=X1qEFYiHufc&ab_channel=The-Art-of-Guitar',
    'https://www.youtube.com/watch?v=a5Zwuodtemg&ab_channel=BenHigginsOfficial',
    'https://www.youtube.com/watch?v=iareHkSf6WU&ab_channel=GoodGuitarist',
  ],
  bass: [
    'https://www.youtube.com/watch?v=dh07nFxnT-U&ab_channel=BassBuzz',
    'https://www.youtube.com/watch?v=SR60xY3o8rs&ab_channel=OnlineBassGuitar',
    'https://www.youtube.com/watch?v=4z-zuGsR5h4&ab_channel=JoeHubbardBass',
    'https://www.youtube.com/watch?v=ONw0q2ZhEXg&ab_channel=ParanormalGuitarChannel',
  ],
  piano: [
    'https://www.youtube.com/watch?v=GaBkAvUme6Y&ab_channel=Pianote',
    'https://www.youtube.com/watch?v=ppYnYCAghTw&ab_channel=Pianote',
    'https://www.youtube.com/watch?v=T-cbdnP0Hyc&ab_channel=TEDxTalks',
    'https://www.youtube.com/watch?v=S6DATlc2ayo&ab_channel=pianoTV',
  ],
  drums: [
    'https://www.youtube.com/watch?v=cFfsEdZyZEQ&ab_channel=StephenClark',
    'https://www.youtube.com/watch?v=C_-oy9BDl1o&ab_channel=Drumeo',
    'https://www.youtube.com/watch?v=Wy1xMgvlw9M&ab_channel=BenMinal',
    'https://www.youtube.com/watch?v=1udHrr-bbTs&ab_channel=Drumeo',
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
    width: 300,
  },
});

export default function Moods() {
  const classes = useStyles();

  const [mood, setMood] = React.useState('');

  const handleChange = (event) => {
    setMood(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Card className="card">
      <CardContent className="card-color">
        <Typography id="text-color" gutterBottom>
          <h1>DESIRED MOOD</h1>
        </Typography>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="text-color">Select Mood</InputLabel>
          <Select
            id="text-color"
            className={classes.dropDown}
            value={mood}
            onChange={handleChange}
          >
            <MenuItem className="happy" value={'happy'}>
              Happy
            </MenuItem>
            <MenuItem value={'inspirational'}>Inspirational</MenuItem>
            <MenuItem value={'motivated'}>Motivated</MenuItem>
            <MenuItem value={'calm'}>Calm</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Typography id="text-color" gutterBottom>
          <h1>SPORTS</h1>
        </Typography>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="text-color">Select Sport</InputLabel>
          <Select
            id="text-color"
            className={classes.dropDown}
            value={mood}
            onChange={handleChange}
          >
            <MenuItem className="happy" value={'workout'}>
              Workout
            </MenuItem>
            <MenuItem value={'fishing'}>Fishing</MenuItem>
            <MenuItem value={'running'}>Running</MenuItem>
            <MenuItem value={'golf'}>Golf</MenuItem>
          </Select>
        </FormControl>
        <br />
        <Typography id="text-color" gutterBottom>
          <h1>INSTRUMENTS</h1>
        </Typography>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="text-color">Select Instrument</InputLabel>
          <Select
            id="text-color"
            className={classes.dropDown}
            value={mood}
            onChange={handleChange}
          >
            <MenuItem className="happy" value={'guitar'}>
              Guitar
            </MenuItem>
            <MenuItem value={'bass'}>Bass</MenuItem>
            <MenuItem value={'piano'}>Piano</MenuItem>
            <MenuItem value={'drums'}>Drums</MenuItem>
          </Select>
        </FormControl>
        {mood && videos[mood].map((x) => <PlayerComponent url={x} />)}
      </CardContent>
    </Card>
  );
}
