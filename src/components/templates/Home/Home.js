import React from "react";
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import WithTheme from '../../../WithTheme';

import ToDoList from "../../organisms/ToDoList/ToDoList";

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit,
    },
});

const staticData = {
    heading: 'All Tasks'
}

const Home = (props) => {
    const { classes } = props;

    return <div className={classes.root}>
        <Grid container >
            <ToDoList staticData={staticData}/>
        </Grid>
    </div>
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default WithTheme(withStyles(styles)(Home));