import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Theme, Typography } from '@mui/material';
import { gradients } from '../../../../utils';
import { CURRENT_YEAR } from '../../../../config';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: 'auto',
        height: 100,
        background: gradients.primary,
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            height: 200,
        },
    },
    container: {},
    logoImage: {
        alignContent: 'center',
        height: 64,
        [theme.breakpoints.down('md')]: {
            height: 48,
        },
    },
}));

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = (props) => {
    const { className, ...rest } = props;
    const classes = useStyles();

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Grid container spacing={2} className={classes.container}>
                <Grid item md={12}>
                    <Typography variant="body1">
                        {CURRENT_YEAR} &copy; Sndit All Right reserved
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
