import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });

class HabitAddForm extends Component {
    inputRef = React.createRef()
    onSubmit = e =>{
        e.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        this.inputRef.current.value = "";
    }
   
    render() {
        // const classes = this.props
        return (
                <form className="add-form" onSubmit={this.onSubmit}>
                    <input
                        ref={this.inputRef}
                        type="text"
                        className="add-input"
                        placeholder="Habit" 
                    />
                    
                    <Button variant="outlined" color="primary" href="#outlined-buttons"
                    onClick={this.onSubmit}
                    >
                        add
                    </Button>
                   
                </form>
        );
    }
}

export default withStyles(useStyles)(HabitAddForm);