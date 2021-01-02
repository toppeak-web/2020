import React, { memo} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });
const HabitAddForm = memo(props=> {
    const inputRef = React.createRef()
    const onSubmit = e =>{
        e.preventDefault()
        const name = inputRef.current.value
        name && props.onAdd(name)
        inputRef.current.value = "";
    }
   
   
        // const classes = this.props
        return (
                <form className="add-form" onSubmit={onSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        className="add-input"
                        placeholder="Habit" 
                    />
                    
                    <Button variant="outlined" color="primary" href="#outlined-buttons"
                    onClick={onSubmit}
                    >
                        add
                    </Button>
                   
                </form>
        );
    }
    ) 
            
    


export default withStyles(useStyles)(HabitAddForm);