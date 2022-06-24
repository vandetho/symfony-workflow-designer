import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import {
    AppBar,
    Button,
    Link,
    Theme,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {
    faGaugeHigh,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import { gradients } from '../../../../utils';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
        background: gradients.primary,
        border: 'none',
    },
    flexGrow: {
        flexGrow: 1,
    },
    toolbar: {
        height: 80,
        [theme.breakpoints.down('lg')]: {
            height: 64,
        },
        [theme.breakpoints.up('lg')]: {
            margin: '0 auto',
            width: theme.breakpoints.values.md,
        },
        [theme.breakpoints.up('xl')]: {
            margin: '0 auto',
            width: theme.breakpoints.values.lg,
        },
    },
    logoImage: {
        alignContent: 'center',
        height: 64,
        [theme.breakpoints.down('md')]: {
            height: 48,
        },
    },
}));

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

interface TopbarProps {
    className?: string;
}

const Topbar: React.FC<TopbarProps> = (props) => {
    const { className, ...rest } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();

    const onLogout = React.useCallback(() => {}, []);

    return (
        <ElevationScroll {...props}>
            <AppBar
                {...rest}
                className={clsx(classes.root, className)}
                color="primary"
            >
                <Toolbar className={classes.toolbar}>
                    <Link component={RouterLink} to="/" color="inherit">
                        <img
                            src={undefined}
                            alt="Sndit"
                            className={classes.logoImage}
                        />
                    </Link>
                    <div className={classes.flexGrow} />
                    <Button
                        color="inherit"
                        component={RouterLink}
                        to="/dashboard"
                        startIcon={<FontAwesomeIcon icon={faGaugeHigh} />}
                    >
                        {isMobile ? '' : 'Dashboard'}
                    </Button>
                    <Button
                        color="inherit"
                        onClick={onLogout}
                        endIcon={<FontAwesomeIcon icon={faRightFromBracket} />}
                    >
                        {isMobile ? '' : 'Logout'}
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    );
};

export default Topbar;
