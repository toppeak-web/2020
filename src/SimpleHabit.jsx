import React, { useState, useRef, useCallback,useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = (theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });

const SimpleHabit = (/*props*/) =>   {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  },[count]);
  useEffect(()=>{
    console.log(`mounted & updated! ${count}`)
  })

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <Button variant="outlined" color="primary" href="#outlined-buttons"
                    onClick={handleIncrement}
                    >
                        plus
                    
        <i className="fas fa-plus-square"></i>
        </Button>
    </li>
  );
}

export default withStyles(useStyles)(SimpleHabit);

