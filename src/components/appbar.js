import { useState } from 'react';
import {
  Drawer,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  IconButton,
  Paper,
  Box,
  Divider,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AvatarImage from '../assets/Group 29.png';
import AvatarImage2 from '../assets/Group 29@2x.png';
import SearchImage from '../assets/Search.svg';
import BellImage from '../assets/bell.svg';
import BarImage from '../assets/bars.svg';
import Logo from '../assets/Lifetwig.png';
import UserImage1 from '../assets/Ellipse 13.png';
import UserImage2 from '../assets/Ellipse 13-2.png';
import UserImage3 from '../assets/Ellipse 13-3.png';
import UserImage4 from '../assets/Ellipse 13-7.png';
import UserImage5 from '../assets/Ellipse 13-4.png';
import UserImage6 from '../assets/Ellipse 13-5.png';
import UserImage7 from '../assets/Ellipse 13-6.png';
import UserImage8 from '../assets/Ellipse 13-9.png';
import NavImg from '../assets/Group 260.png';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: { NavImg },
    backgroundColor: 'white',
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },

  topNavLinks: {
    fontSize: '18px',
    textDecoration: 'none',
    margin: '15px',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },

  nav: {
    // backgroundImage: `url(${NavImg})`,
    position: 'relative',
    left: '180px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: theme.spacing(3),
    color: 'black',
  },
  mobNavTop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    },
  },
  extraBtns: {
    width: '22px',
    height: '22px',
    padding: '23px',
    borderRadius: '30px',
    backgroundColor: '#4F7D0D',
    background: `transparent url(${SearchImage}) 0% 0% no-repeat`,
    backgroundPosition: 'center',
    margin: '5px',
  },
  hideOnMob: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  TopAppLogo: {
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    marginTop: '65px !important',
    width: '280px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    backgroundColor: '#F0F2F5',
    padding: '15px',
  },
  userDetail: {
    padding: '15px',
    borderRadius: '8px',
  },
  userDetailName: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  penText: {
    color: '#88B235',
    marginLeft: 'auto',
  },
  penTextContent: {
    fontSize: '18px',
  },
  sideNavLink: {
    margin: '10px 20px !important',
  },
  sideLink: {
    fontSize: '15px',
    textDecoration: 'none',
    color: '#1C2025',
    margin: '20px !important',
  },
  chatMsgCount: {
    backgroundColor: '#88B235',
    fontSize: '14px',
    padding: '5px 10px',
    color: '#FFFFFF',
    borderRadius: '5px',
    position: 'absolute',
    right: '70px',
  },
  mobileDrawer: {
    backgroundColor: '#F0F2F5',
    padding: '15px',
    width: '270px',
  },
  rightDrawerPaper: {
    backgroundColor: '#F0F2F5',
    width: '280px',
    marginTop: '65px !important',
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  FamilyOnlineTitle: {
    color: '#1C2025 !important',
    fontSize: '14px',
    color: '#9e9e9e',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  hrDivider: {
    backgroundColor: '#88B235',
    height: '3px !important ',
    width: '50px',
  },
  statusOnline: {
    height: '16px',
    width: '16px',
    backgroundColor: '#96EB6C',
    borderRadius: '50%',
  },
  chatUserTitle: {
    fontSize: '17px',
    fontWeight: 'bold',
  },
}));

const CustomAppBar = () => {
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false);

  const handleOpenLeftDrawer = () => {
    setOpenLeftDrawer(!openLeftDrawer);
  };

  const handleOpenRightDrawer = () => {
    setOpenRightDrawer(!openRightDrawer);
  };

  const [family, setFamily] = useState([
    {
      name: 'Brandon Cooper',
      status: 'online',
      image: UserImage1,
    },
    {
      name: 'Janet Roberts',
      status: 'online',
      image: UserImage3,
    },
    {
      name: 'Ronnie Jordan',
      status: 'online',
      image: UserImage2,
    },
  ]);

  const [friend, setFriend] = useState([
    {
      name: 'Johnny Holland',
      status: 'online',
      image: UserImage8,
    },
    {
      name: 'Michelle Murphy',
      status: 'online',
      image: UserImage3,
    },
    {
      name: 'Steve Garrett',
      status: 'online',
      image: UserImage5,
    },
  ]);

  const classes = useStyles();

  return (
    <div>
      {/* AppBar */}
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item lg={2} sm={2} xs={2}>
              <IconButton
                aria-label="more"
                className={classes.menuButton}
                onClick={handleOpenLeftDrawer}
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.TopAppLogo}>
                <img src={Logo} />
              </div>
            </Grid>
            <Grid item lg={5} md={5} sm={8} xs={8}>
              <nav className={classes.nav}>
                <Link className={classes.topNavLinks}>Home Feed</Link>
                <Link className={classes.topNavLinks}>Map</Link>
                <Link className={classes.topNavLinks}>Family Tree</Link>
                <Link className={classes.topNavLinks}>Friends</Link>
              </nav>
              <Grid container alignItems="center" className={classes.mobNavTop}>
                <Grid item md={2} sm={2} xs={2}>
                  <img src={AvatarImage} alt="user-image" />
                </Grid>
                <Grid item md={8} sm={8} xs={10}>
                  <Typography
                    variant="h5"
                    color="initial"
                    className={classes.userName}
                  >
                    Simmon Bradley
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={5} sm={2} xs={2}>
              <Grid
                container
                alignItems="center"
                spacing={2}
                justify="flex-end"
                className={classes.hideOnMob}
              >
                <Grid item>
                  <img src={AvatarImage} alt="user-image" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    color="initial"
                    className={classes.userName}
                  >
                    Simmon Bradley
                  </Typography>
                </Grid>
                <div>
                  <Grid item>
                    <button className={classes.extraBtns}></button>
                    <button className={classes.extraBtns}></button>
                    <button className={classes.extraBtns}></button>
                  </Grid>
                </div>
              </Grid>
              <IconButton
                aria-label="more"
                className={classes.menuButton}
                onClick={handleOpenRightDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}
      <Drawer open variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <Paper className={classes.userDetail}>
          <Grid container alignItems="center">
            <Grid item md={4} sm={4} xs={4}>
              <img src={AvatarImage} width="50px" alt="user-image" />
            </Grid>
            <Grid item lg={4} md={2} sm={2} xs={2}>
              <Typography color="initial" className={classes.userDetailName}>
                Simmon Bradley
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <div className={classes.sideNavLink}>
          <Link to="/" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Home Feed
            </Typography>
          </Link>
          <Link to="/info" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Personal Info
            </Typography>
          </Link>
          <Link to="/photo" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Photo
            </Typography>
          </Link>
          <Link to="/feed" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Feed
            </Typography>
          </Link>
          <Link to="/chat" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Chat <span className={classes.chatMsgCount}>2</span>
            </Typography>
          </Link>
          <Link to="/settings" className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Settings
            </Typography>
          </Link>
        </div>
      </Drawer>

      {/* Left Drawer Mobile */}
      <Drawer
        anchor="left"
        open={openLeftDrawer}
        onClose={handleOpenLeftDrawer}
        classes={{
          paper: classes.mobileDrawer,
        }}
      >
        <Box align="center" my={2}>
          <img src={Logo} />
        </Box>
        <Paper className={classes.userDetail}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item md={3} sm={3} xs={3}>
              <img src={AvatarImage} alt="user-image" />
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={3}>
              <Typography
                variant="h5"
                color="initial"
                className={classes.userDetailName}
              >
                Simmon Bradley
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.sideNavLink}>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Home Feed
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Personal Info
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Photo
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Feed
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h6" color="initial">
              Chat <span className={classes.chatMsgCount}>2</span>
            </Typography>
          </Link>
          <Link className={classes.sideLink}>
            <Typography variant="h2" color="initial">
              Settings
            </Typography>
          </Link>
        </div>
      </Drawer>

      {/* Right Drawer */}
      <Drawer
        anchor="right"
        open
        variant="permanent"
        classes={{
          paper: classes.rightDrawerPaper,
        }}
      >
        <Box my={2}>
          <div className={classes.FamilySection}>
            <Typography
              variant="h1"
              color="initial"
              align="left"
              className={classes.FamilyOnlineTitle}
            >
              Family Online
            </Typography>
            <Divider className={classes.hrDivider} light={false} />
            {family.map((data, index) => {
              return (
                <Box my={2} key={index}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={2}>
                      <img src={data.image} />
                    </Grid>
                    <Grid item lg={8}>
                      <Typography
                        variant="h5"
                        color="initial"
                        className={classes.chatUserTitle}
                      >
                        {data.name}
                      </Typography>
                    </Grid>
                    <Grid item lg={2}>
                      <div className={classes.statusOnline}></div>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </div>
        </Box>
        <Box my={2}>
          <div className={classes.FamilySection}>
            <Typography
              variant="h1"
              color="initial"
              align="left"
              className={classes.FamilyOnlineTitle}
            >
              Friends Online
            </Typography>
            <Divider className={classes.hrDivider} light={false} />
            {friend.map((data, index) => {
              return (
                <Box my={2} key={index}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={2}>
                      <img src={data.image} />
                    </Grid>
                    <Grid item lg={8}>
                      <Typography
                        variant="h1"
                        color="initial"
                        className={classes.chatUserTitle}
                      >
                        {data.name}
                      </Typography>
                    </Grid>
                    <Grid item lg={2}>
                      <div className={classes.statusOnline}></div>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}

            {friend.map((data, index) => {
              return (
                <Box my={2} key={index}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item lg={2}>
                      <img src={data.image} />
                    </Grid>
                    <Grid item lg={8}>
                      <Typography
                        variant="h5"
                        color="initial"
                        className={classes.chatUserTitle}
                      >
                        {data.name}
                      </Typography>
                    </Grid>
                    <Grid item lg={2}>
                      <div className={classes.statusOnline}></div>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </div>
        </Box>
      </Drawer>

      {/* Mobile Drawer Right */}
      <Drawer
        anchor="right"
        open={openRightDrawer}
        onClose={handleOpenRightDrawer}
        classes={{
          paper: classes.mobileDrawer,
        }}
      >
        <div className={classes.extraBtnsSection}>
          <button className={classes.extraBtns}></button>
          <button className={classes.extraBtns}></button>
          <button className={classes.extraBtns}></button>
        </div>

        <div className={classes.FamilySection}>
          <Typography
            variant="h6"
            color="initial"
            className={classes.FamilyOnlineTitle}
          >
            Family Online
          </Typography>
          <Divider className={classes.hrDivider} light={false} />
          {family.map((data, index) => {
            return (
              <Box my={2} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={2}>
                    <img src={data.image} />
                  </Grid>
                  <Grid item lg={8}>
                    <Typography
                      variant="h5"
                      color="initial"
                      className={classes.chatUserTitle}
                    >
                      {data.name}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <div className={classes.statusOnline}></div>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </div>

        <div className={classes.FamilySection}>
          <Typography
            variant="h6"
            color="initial"
            className={classes.FamilyOnlineTitle}
          >
            Friends Online
          </Typography>
          <Divider className={classes.hrDivider} light={false} />
          {friend.map((data, index) => {
            return (
              <Box my={2} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={2}>
                    <img src={data.image} />
                  </Grid>
                  <Grid item lg={8}>
                    <Typography
                      variant="h5"
                      color="initial"
                      className={classes.chatUserTitle}
                    >
                      {data.name}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <div className={classes.statusOnline}></div>
                  </Grid>
                </Grid>
              </Box>
            );
          })}

          {friend.map((data, index) => {
            return (
              <Box my={2} key={index}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item lg={2}>
                    <img src={data.image} />
                  </Grid>
                  <Grid item lg={8}>
                    <Typography
                      variant="h5"
                      color="initial"
                      className={classes.chatUserTitle}
                    >
                      {data.name}
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <div className={classes.statusOnline}></div>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default CustomAppBar;
