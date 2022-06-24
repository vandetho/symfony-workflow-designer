import { Helmet } from 'react-helmet';
import { createStyles, makeStyles } from '@mui/styles';
import { Grid, Theme } from '@mui/material';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
            margin: '0 auto',
            padding: theme.spacing(3, 3, 6, 3),
        },
    })
);

const Dashboard = () => {
    const classes = useStyles();

    return (
        <>
            <Helmet>
                <title>Sndit Internal App Dashboard</title>
            </Helmet>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {' '}
                    </Grid>
                    <Grid item xs={12} />
                </Grid>
            </div>
        </>
    );
};

export default Dashboard;
