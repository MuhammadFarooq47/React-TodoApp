import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const Inc_Dec = () => {

    const [count, setCount] = useState(0)

    const Inc = () =>{
        setCount(count + 1)
    }

    const Dec = () => {
        if (count > 0){
            setCount(count - 1)
        }
        else {
            alert("Last limit is 0")
        }
        
    }


    return(
        <> 
        <div className = "App2">
        <h1> {count} </h1>
        <Tooltip title="Increment">
        <Button onClick = {Inc} className = "btn" > <AddCircleOutlineIcon /> </Button>
        </Tooltip>
        <Tooltip title="Decrement">
        <Button onClick = {Dec}  className = "btn" id = "btnr"> <DeleteForeverRoundedIcon /> </Button>
        </Tooltip>
        </div>
        </>
    )

}

export default Inc_Dec;