import React from "react";
import PropTypes from "prop-types";
import { Edit, Delete } from '@material-ui/icons';

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Button
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import WithTheme from '../../../WithTheme';
import NoData from '../../atoms/NoData/NoData';

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
  const { classes, taskList, onStatusChange, onTaskDelete } = props;
  return <div className={classes.root}>

    <List>
      {
        taskList && taskList.length ? taskList.map((task, index) => (
          <ListItem
            key={task.id}
            role={undefined}
            dense
            button
            className={classes.listItem}
            divider
          >
            <ListItemText primary={`${task.label} - ${task.isDeleted}`} />
            <ListItemSecondaryAction>
              {
                onTaskDelete
                  ?
                  <Button onClick={() => onTaskDelete(task.id)} color="secondary" size="small" mini aria-label="Delete">
                    <Delete />
                  </Button>
                  : null
              }
              {
                onStatusChange
                  ?
                  <Button onClick={() => onStatusChange(index)} color="primary" size="small" mini>
                    <Edit /> {task.status}
                  </Button>
                  : null
              }
            </ListItemSecondaryAction>
          </ListItem>
        ))
          : <NoData />
      }
    </List>
    {/* ))} */}
  </div>
};

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default WithTheme(withStyles(styles)(TaskList));