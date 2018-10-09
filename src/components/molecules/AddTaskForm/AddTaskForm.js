import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
    },
});

class AddTaskForm extends React.Component {
    state = {
        open: true,
        taskTitle: ''
    };

    handleChange = name => event => {
        if (event.target.value) {
            this.setState({
                taskTitle: event.target.value
            });
        }
    };

    handleClose = (isAddTaskClick) => (event) => {
        if (isAddTaskClick) {
            this.props.onChangeHandle(this.state.taskTitle);
        }
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="task-title"
                                    label="New Task"
                                    className={classes.textField}
                                    value={this.state.taskTitle}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange()}
                                />
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose(false)} color="secondary">Close</Button>
                        <Button onClick={this.handleClose(true)} color="primary">Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AddTaskForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTaskForm);