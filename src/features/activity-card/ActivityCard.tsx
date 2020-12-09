import React from 'react';
import {
    Button,
    createStyles,
    CssBaseline,
    Fade,
    Grid,
    Paper,
    SvgIcon,
    Theme,
    withStyles,
    WithStyles
} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) => createStyles({
    root : {
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
        },
    },
    paper: {
        maxWidth: '1040px',
        width: '100%',
        boxShadow: theme.shadows[12],
        overflow: 'hidden',
        background: 'linear-gradient(45deg, #000000 0%, rgba(0,0,0,0.761) 100%)',
        '& > *': {
            display: 'flex',
            justifyItems: 'center',
            height: '100%'
        },
    },
    cardContent: {
        padding: theme.spacing(10),
        [theme.breakpoints.down('xs')]: {
            padding: `${theme.spacing(3)}px ${theme.spacing(3)}px`,
        },
        lineHeight: '2rem',
        '& > p': {
            paddingBottom: '2rem'
        },
        '& > a': {
            margin: '1.2rem 1.2rem 0px 0px'
        }
    },
    imageContent: {
        minHeight: '20rem',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(profile.jpg)',
        backgroundPosition: 'left',
        [theme.breakpoints.up('md')]: {
            backgroundPosition: '-220px',
        },
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '-110px',
        }
    }

});

const socials = Object.freeze([
    {
        title: 'GitHub',
        path: 'https://github.com/christopher-alexander',
        icon: <SvgIcon>
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
        </SvgIcon>
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/calexanderc/',
        icon: <SvgIcon>
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </SvgIcon>
    },
    {
        title: 'StackOverflow',
        path: 'https://stackoverflow.com/users/5346656',
        icon: <SvgIcon>
            <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76l-8.79-1.85m1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62l-8.14-3.79m2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37l-6.9-5.75m4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21l1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59z"/>
        </SvgIcon>
    }
]);

const LinkedButton = ({pathname, icon, children} : any) => (
    <Button component={RouterLink}
            to={{pathname: pathname}}
            target="_blank"
            variant="outlined"
            color="primary"
            size="medium"
            startIcon={icon}>{children}</Button>
);

const ActivityCard = ({classes} : WithStyles<typeof styles>) => {

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Fade in={true} timeout={750}>
                <Paper className={classes.paper}>
                    <Grid container direction="row" justify="center" alignItems="stretch">

                        <Grid className={classes.imageContent} item xs={12} md={5}/>

                        <Grid className={classes.cardContent} item xs={12} md={7}>

                            <Typography color={'primary'} component='p' variant="h4">
                                <b>CHRISTOPHER ALEXANDER</b>
                            </Typography>

                            <Typography color={'primary'}><b>Full stack developer</b> with demonstrated team leadership abilities
                                experienced in providing quality user applications through the
                                implementation of accepted coding standards and advanced interface design</Typography>
                            {
                                socials.map((k,v) =>
                                    <LinkedButton key={k.title} pathname={k.path} icon={k.icon}>{k.title}</LinkedButton>)
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Fade>
        </div>
    )
};

/* style={{ transitionDelay: '1000ms'}}> */

export default withStyles(styles)(ActivityCard)
