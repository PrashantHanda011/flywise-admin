import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import home from '../images/home.svg';
import homeActive from '../images/homeActive.svg';
import artist from '../images/artist.svg';
import artistActive from '../images/artistActive.svg';
import employee from '../images/employee.svg';
import employeeActive from '../images/employeeActive.svg';
import user from '../images/user.svg';
import userActive from '../images/userActive.svg';
import payment from '../images/payment.svg';
import paymentActive from '../images/paymentActive.svg';
import useStyles from '../styles/NavSidebar';
import { Navigate } from 'react-router';
import InputIcon from '@mui/icons-material/Input';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#fff',
  color: '#1C7EBF',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiTypography-body1': {
    fontFamily: 'Montserrat !important',
  },
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
    backgroundColor: '#155B89',
    color: '#C4C4C4',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();
const NavSidebar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove("flywise")
    localStorage.removeItem('flywise')
    history.push('/');
  };

  let k = JSON.parse(localStorage.getItem("flywise"))
  React.useEffect(() => {
    if(!k){
      history.push('/');
    }
  }, [])

  


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              {/**Dashboard */}
            </Typography>
            <div className={classes.logoutBtnDiv}>
              <button className={classes.logoutBtn} onClick={handleLogout}>
                Log out
              </button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [1],
            }}
          >
            <div className={classes.navHeader}>
              <h3>Flywise</h3>
            </div>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon className={classes.closeDrawer} />
            </IconButton>
          </Toolbar>
          <Divider />
          <List className={classes.listDiv}>
          
            <ListItem
              button
              className={
                props.location.pathname.includes('/Universities')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/Universities')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/Universities') ? (
                  <ApartmentIcon style={{color:"#ebebeb"}}/>

                ) : (
                  <ApartmentIcon style={{color:"#ebebeb"}}/>

                )}
              </ListItemIcon>
              <ListItemText primary='Universities' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/blogs')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/blogs')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/blogs') ? (
                  <ArticleIcon style={{color:"#ebebeb"}}/>
                ) : (
                  <ArticleIcon style={{color:"#ebebeb"}}/>

                )}
              </ListItemIcon>
              <ListItemText primary='Blogs' />
            </ListItem>
            <ListItem
              button
              className={
                props.location.pathname.includes('/users')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/users')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/users') ? (
                  <PersonIcon style={{color:"#ebebeb"}}/>

                ) : (
                  <PersonIcon style={{color:"#ebebeb"}}/>

                )}
              </ListItemIcon>
              <ListItemText primary='Users' />
            </ListItem>
            
            <ListItem
              button
              className={
                props.location.pathname.includes('/modal')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/modal')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/modal') ? (
                  <PersonIcon style={{color:"#ebebeb"}}/>

                ) : (
                  <PersonIcon style={{color:"#ebebeb"}}/>

                )}
              </ListItemIcon>
              <ListItemText primary='Modal Data' />
            </ListItem>
           
            <ListItem
              button
              className={
                props.location.pathname.includes('/access')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/access')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/access') ? (
                  <InputIcon style={{color:"#ebebeb"}}/>
                ) : (
                  <InputIcon style={{color:"#ebebeb"}}/>
                )}
              </ListItemIcon>
              <ListItemText primary='Access' />
            </ListItem>
           
            <ListItem
              button
              className={
                props.location.pathname.includes('/changepassword')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/changepassword')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/changepassword') ? (
                  <VpnKeyIcon style={{color:"#ebebeb"}}/>
                ) : (
                  <VpnKeyIcon style={{color:"#ebebeb"}}/>

                )}
              </ListItemIcon>
              <ListItemText primary='Change password' />
            </ListItem>
            {/* <ListItem
              button
              className={
                props.location.pathname.includes('/payments')
                  ? classes.selectedList
                  : ''
              }
              onClick={() => history.push('/payments')}
            >
              <ListItemIcon>
                {props.location.pathname.includes('/payments') ? (
                  <img
                    src={paymentActive}
                    className={classes.iconColor}
                    alt='payments'
                  />
                ) : (
                  <img
                    src={payment}
                    className={classes.iconColor}
                    alt='payments'
                  />
                )}
              </ListItemIcon>
              <ListItemText primary='Payments ' />
            </ListItem> */}
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              props.location.pathname.includes('/add')
                ? '#fff'
                : theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NavSidebar;
