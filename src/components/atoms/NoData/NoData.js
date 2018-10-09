import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';


const styles = {};

const NoData = (props) => {
    const { classes } = props;
    return <Card>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Could not find any task. Please create a new
            </Typography>
        </CardContent>
    </Card>
}


NoData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoData);