import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import UserImage1 from '../../assets/Group 29@2x.png';
import {
  Typography,
  Grid,
  Box,
  Divider,
  TextField,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    flexGrow: 1,
  },
  userImg: {
    width: '180px',
  },
  grid: {
    padding: theme.spacing(2),
    marginTop: '20px',
    display: 'in-line',
  },
  span: {
    color: '#B5B4B4',
  },
  margin: {
    marginTop: '20px',
  },
  wd: {
    marginLeft: '15px',
    width: '465px',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    marginLeft: '35px',
  },
  bold: {
    color: 'black',
    fontWeight: 'bold',
  },
  heading: {
    marginTop: '20px',
    color: '#88B235',
    marginRight: '380px',
    fontWeight: 'bold',
  },
  para: {
    textAlign: 'left',
    marginLeft: '538px',
    fontWeight: 'bold',
  },
  switch: {
    marginLeft: '50px',
  },
}));

export default function PersonalInfo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.bold} label="General" />
        <Tab className={classes.bold} label="Subscription" />
        <Tab className={classes.bold} label="Notification" />
        <Tab className={classes.bold} label="Security" />
      </Tabs>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <img src={UserImage1} className={classes.userImg} />
        <Typography className={classes.text}>
          Simmon Bradley <br></br>
          <span className={classes.span}>Boston, USA</span>
        </Typography>
      </Grid>
      <Divider variant="middle" />

      <Grid
        className={classes.margin}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item lg={2}>
          <Box px={1} py={1}>
            <TextField
              item
              lg={3}
              id="standard-helperText"
              label="Heading"
              defaultValue="Lorem Ipsum Dolor Sit"
              variant="filled"
            />
          </Box>
          <Box px={1} py={1}>
            <TextField
              id="standard-helperText"
              label="Heading"
              defaultValue="Lorem Ipsum Dolor Sit"
              variant="filled"
            />
          </Box>
        </Grid>
        <Grid>
          <Box px={1} py={1}>
            <TextField
              id="standard-helperText"
              label="Heading"
              defaultValue="Lorem Ipsum Dolor Sit"
              variant="filled"
            />
          </Box>
          <Box px={1} py={1}>
            <TextField
              id="standard-helperText"
              label="Heading"
              defaultValue="Lorem Ipsum Dolor Sit"
              variant="filled"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box my={2}>
          <TextField
            className={classes.wd}
            id="standard-helperText"
            label="Heading"
            defaultValue="Lorem Ipsum Dolor Sit amet"
            variant="filled"
          />
        </Box>
      </Grid>
      <div>
        <Box>
          <Typography className={classes.heading}>Heading</Typography>
          <Typography className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> In
            vel ante volutpat, congue nunc non, finibus nisl.
            <b>
              <Switch className={classes.switch} />
            </b>
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.heading}>Heading</Typography>
          <Typography className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> In
            vel ante volutpat, congue nunc non, finibus nisl.
            <b>
              <Switch className={classes.switch} />
            </b>
          </Typography>
        </Box>
      </div>
    </Paper>
  );
}
