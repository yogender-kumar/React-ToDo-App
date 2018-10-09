import React from "react";
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    wrapper: {
        textAlign: "left",
        width: "100%",
        maxWidth: 1024,
        margin: "0 auto"
    }
});

class AddTask extends React.Component {

    state = {
        components: []
    }

    onChangeHandle(taskTitle) {
        this.props.addTask(taskTitle)
    }

    handleClickOpen = () => {
        this.setState({
            components: []
        });
        import('../../molecules/AddTaskForm/AddTaskForm').then(DialogSelect => {
            this.setState({
                components: [<DialogSelect.default onChangeHandle={this.onChangeHandle.bind(this)} key={`addTask-1`}/>]
            });
        });
    };

    render = () => {
        return (
            <div>
                <Button color="secondary" aria-label="Create Task" onClick={this.handleClickOpen}>
                    <Add /> Add Task
                </Button>
                {
                    this.state.components.length
                        ? this.state.components.map(Component => Component)
                        : null
                }
            </div>
        );
    };
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    addTask: (title) => dispatch({ type: 'ADD_NEW_TASK', title })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddTask));