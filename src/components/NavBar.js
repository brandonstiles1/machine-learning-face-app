import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    paddingLeft: '8vw',
    paddingRight: '8vw',
  },
  title: {
    flexGrow: 1,
    color: 'rgba(255,255,255,0.95)',
  },
  appBar: {
    background: 'rgba(255,255,255,0)',
    boxShadow: 'none',
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Machine Learning App
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="white"
                >
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to='/'>
                      Try the app
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to='/about'>
                      About this app
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href='https://brandonstiles.dev'>
                      See my portfolio
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href='https://fourloop.ai'>
                      Get your own app built
                    </a>
                  </MenuItem>
                </Menu>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}