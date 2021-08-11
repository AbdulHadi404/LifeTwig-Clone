import {
  Container,
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import UserImage from '../../assets/Group 29.png';

const useStyle = makeStyles({
  container: {
    maxWidth: '650px',
  },
  userName: {
    fontSize: '18px',
    position: 'relative',
    left: '0',
    top: '0',
    fontWeight: 'bold',
  },
  postTime: {
    position: 'relative',
    right: '0',
    top: '0',
    fontSize: '12px',
    color: '#9e9e9e',
    fontWeight: 'bold',
  },
  postContent: {
    color: '#1C2025',
  },
  paper: {
    padding: '0 !important',
  },
});

const Posts = () => {
  const classes = useStyle();

  return (
    <Box my={3}>
      <Container
        maxWidth="sm"
        component={Paper}
        classes={{ paper: classes.paper }}
        className={classes.container}
        elevantion={3}
        square={true}
      >
        <Box px={1} py={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item lg={1}>
              <img src={UserImage} />
            </Grid>
            <Grid item lg={4}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.userName}
              >
                Simmon Bradley
              </Typography>
            </Grid>
            <Grid item lg={7} sm={7} xs={3}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.postTime}
                align="right"
              >
                Today
              </Typography>
              <Typography
                variant="h5"
                color="initial"
                className={classes.postTime}
                align="right"
              >
                11:24PM
              </Typography>
            </Grid>
          </Grid>
          <Box my={2}>
            <Grid item lg={12}>
              <Typography
                variant="p"
                color="initial"
                className={classes.postContent}
                align="right"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
                ante volutpat, congue nunc non, finibus nisl. Nam non arcu et
                massa porta auctor nec quis nulla.
              </Typography>
            </Grid>
          </Box>
        </Box>
        <Box style={{ width: '100% !important' }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0WbrOfmvjvU&ab_channel=TheNetNinja"
            width="100%"
          />
        </Box>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs>
              <Box my={2}>
                <Button variant="p" color="initial">
                  <b>heart21</b>
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box my={2}>
                <TextField id="comment" label="Write a Comment" />
              </Box>
            </Grid>
            <Grid item xs>
              <Box my={2}>
                <Button variant="p" color="initial" align="center">
                  <b>View Comments 21</b>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Posts;
