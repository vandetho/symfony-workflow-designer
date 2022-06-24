import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        zIndex: 1,
    },
    content: {
        height: '100%',
    },
}));

const Empty = () => {
    const classes = useStyles();

    return (
        <div
            className={clsx({
                [classes.root]: true,
            })}
        >
            <CssBaseline />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    );
};

export default Empty;
