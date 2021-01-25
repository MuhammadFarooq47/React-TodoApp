import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoLists = (props) => {

   

    return (
    <> 
    <div className = "todo_style">
    <Tooltip title='delete'>
    <i className="fa fa-trash-o" aria-hidden="true"  onClick = {() => {
        props.set(props.id)
    }} >
    </i>
    </Tooltip>
    <li> {props.text} </li>
    </div>
    </>
    );

}
export default ToDoLists;