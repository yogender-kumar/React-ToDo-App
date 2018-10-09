import React from "react";
import PropTypes from "prop-types";
import { Edit } from '@material-ui/icons';

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import WithTheme from '../../../WithTheme';

// import Todo from "../atoms/Todo/Todo";


const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    padding: theme.spacing.unit * 2
  },
  button: {

  }
});

const TaskList = (props) => {
  const { classes, taskList, onClickOpen } = props;
  return <div className={classes.root}>

      <List>
          {taskList.map((task, index) => (
            <ListItem
              key={task.id}
              role={undefined}
              dense
              button
              className={classes.listItem}
              divider
            >
              <ListItemText primary={`${task.label}`} />
              <ListItemSecondaryAction>
                  <Button onClick={()=>onClickOpen(index)} color="primary" size="small" mini>
                  <Edit /> {task.status}
                  </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
    {/* ))} */}
  </div>
};

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default WithTheme(withStyles(styles)(TaskList));