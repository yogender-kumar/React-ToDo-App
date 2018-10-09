import React from "react";
import { connect } from 'react-redux';
import { Grid, Typography, Divider, List, ListItemText, Button, ListItemSecondaryAction } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

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

    render = () => {
        const { classes, staticData: page } = this.props;
        return (
            <Grid container justify="center" alignItems="flex-start" direction="column">
                <div className={classes.wrapper} >
                    <List>
                        <ListItemText primary={<Typography component="h1" variant="title" className={classes.title}>{page.heading}</Typography>} />
                        <ListItemSecondaryAction>
                            <Button color="secondary" aria-label="Create Task">
                            <Add /> Add Task
                            </Button>
                        </ListItemSecondaryAction>
                    </List>

                    <Divider />
                    <TaskList taskList={this.props.toDoList} onClickOpen={this.handleClickOpen} />
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
    updateTaskStatus: (taskId, newStatus) => dispatch({ type: 'UPDATE_TASK_STATUS', taskId, newStatus })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToDoList));