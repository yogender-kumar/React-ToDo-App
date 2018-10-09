import React from "react";
import { connect } from 'react-redux';
import { Grid, Typography, Divider, List, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import AddTask from "../AddTask/AddTask";

import TaskList from "../../molecules/TaskList/TaskList";

const styles = theme => ({
    wrapper: {
        textAlign: "left",
        width: "100%",
        maxWidth: 1024,
        margin: "0 auto"
    }
});

class ToDoList extends React.Component {

    state = {
        components: []
    }

    componentDidMount() {
        this.props.getToDoList();
    }

    onChangeHandle(taskIndex, taskId, newStatus) {
        this.props.updateTaskStatus(taskId, newStatus)
    }

    handleClickOpen = (index) => {
        this.setState({
            components: []
        });
        let task = this.props.toDoList[index];
        import('../../molecules/DialogSelect/DialogSelect').then(DialogSelect => {
            this.setState({
                components: [<DialogSelect.default status={task.status} id={task.id} index={index} onChangeHandle={this.onChangeHandle.bind(this)} key={task.id} />]
            });
        });
    };

    onTaskDelete = (taskId) => {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            this.props.taskDelete(taskId);
        }
    }

    render = () => {
        const { classes, staticData: templateData } = this.props;
        return (
            <Grid container justify="center" alignItems="flex-start" direction="column">
                <div className={classes.wrapper} >
                    <List>
                        <ListItemText primary={<Typography component="h1" variant="title" className={classes.title}>{templateData.heading}</Typography>} />
                        <ListItemSecondaryAction>
                            <AddTask />
                        </ListItemSecondaryAction>
                    </List>
                    <Divider />
                    <TaskList taskList={this.props.toDoList} onStatusChange={this.handleClickOpen} onTaskDelete={this.onTaskDelete} />
                    {
                        this.state.components.length
                            ? this.state.components.map(Component => Component)
                            : null
                    }
                </div>
            </Grid>
        );
    };
}

const mapStateToProps = state => ({
    toDoList: state.HomeReducer.toDoList
});
const mapDispatchToProps = dispatch => ({
    getToDoList: () => dispatch({ type: 'GET_TODO_LIST' }),
    updateTaskStatus: (taskId, newStatus) => dispatch({ type: 'UPDATE_TASK_STATUS', taskId, newStatus }),
    taskDelete: (taskId) => dispatch({ type: 'DELETE_TASK_BY_ID', taskId })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToDoList));