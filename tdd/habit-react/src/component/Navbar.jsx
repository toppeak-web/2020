import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class Navbar extends PureComponent {
    render() {
      console.log("navbar")
        const classes = this.props;
        return (
            <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {this.props.totalCount}
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
}

export default withStyles(useStyles)(Navbar);