import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 40,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    title: {
        flexGrow: 1,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    article: {
        lineHeight:1.5,
    },
    caption: {
        marginBottom: 40,
    }

});
class Article extends React.Component {

    componentDidMount() {
        document.title = "MAT - Article";
    }
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={12}>
                            <Grid container justify="flex-end">
                                <Chip label="Politics" className={classes.chip} />
                                <Chip label="Religion" className={classes.chip} />
                            </Grid>
                            <Typography type="display1" align="center" gutterBottom >
                                Nunc lacinia lorem blandit
                            </Typography>
                            <Typography type="caption" gutterBottom align="center" className={classes.caption}>
                                11.05.2015 11:14:56
                            </Typography>
                            <Typography type="body" align="left" className={classes.article}>
                                Nunc lacinia lorem blandit, viverra tellus in, convallis metus. Nulla nunc purus,
                                bibendum consequat diam a, laoreet mattis neque. Sed non eros metus. Vestibulum nisi
                                ligula, eleifend in tincidunt vitae, pharetra nec magna. Pellentesque lectus neque,
                                facilisis ac ligula a, tempus venenatis est. Ut neque metus, gravida eget volutpat eget,
                                convallis non ante. Vestibulum sit amet turpis quis sem mollis suscipit. Sed id ex nunc.
                                <br /><br />
                                Aliquam ligula est, maximus in blandit non, lacinia ut est. Pellentesque consectetur
                                lorem libero, non dapibus tellus tempus quis. Pellentesque vel erat orci. Nulla dui mi,
                                luctus ullamcorper posuere non, posuere sed ligula. Vestibulum vel risus eu mauris
                                convallis congue sed in sem. Nam vulputate congue urna, at blandit massa. Orci varius
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla varius
                                sed turpis sed pellentesque. Aliquam interdum pulvinar lobortis. Nunc vestibulum lectus
                                eget faucibus facilisis. Ut non lacus nec augue blandit auctor. Phasellus tincidunt
                                dolor eget eros commodo posuere. Fusce ut nisl pretium, egestas arcu quis, lobortis
                                nunc. Vivamus ac eros euismod, tristique sem nec, finibus quam.
                                <br /><br />
                                Sed sed dui lectus. Nullam viverra est non convallis blandit. Quisque volutpat lacinia
                                orci. Nulla tristique elit metus. Donec lacus ipsum, facilisis et nulla efficitur,
                                viverra dapibus arcu. Curabitur imperdiet auctor mauris sed bibendum. Nunc molestie
                                non felis id pretium. In blandit libero nulla, vel fringilla urna pellentesque sed.
                                Integer feugiat eleifend justo, ut ullamcorper lacus fringilla maximus.
                                <br /><br />
                                Quisque eu massa mollis, consequat lectus in, aliquet purus. Nulla facilisi.
                                Donec dapibus suscipit ultricies. Ut quis dui et sapien efficitur convallis.
                                Suspendisse faucibus tempus accumsan. Aenean eget sapien nec enim tempus malesuada
                                sit amet eget est. Duis hendrerit sapien ut nulla sodales, ac tincidunt justo pulvinar.
                                Sed ac dignissim lorem. Nunc vel sem mi. In cursus consequat lorem sed blandit.
                                Integer ut malesuada velit. Duis sit amet faucibus neque. Quisque eu ligula vitae
                                justo mattis euismod non efficitur orci.
                                <br /><br />
                                Quisque dignissim mauris quis odio faucibus, eu lobortis urna porta. Sed eu ornare
                                ipsum. Maecenas tincidunt non leo sodales porttitor. Etiam auctor ornare imperdiet.
                                Sed a sagittis mauris, id euismod nunc. Integer vehicula elementum libero at interdum.
                                Sed facilisis nulla dolor, non pellentesque elit gravida a. Aenean tempus metus a
                                finibus imperdiet. Pellentesque semper ornare velit, ut dictum leo sollicitudin at.
                                Ut bibendum augue at dolor mattis, quis facilisis nisl semper. Praesent finibus quis
                                eros nec suscipit. Integer tristique lacus a nibh molestie, sit amet ornare ex accumsan.
                                <br /><br />
                                Nam viverra quis quam a hendrerit. Donec tincidunt, risus eget molestie ultricies,
                                neque nulla vehicula tellus, et feugiat ex nisl sit amet nunc. Aliquam porta nisl
                                vitae rutrum euismod. Pellentesque sit amet turpis nibh. Ut tincidunt tellus eu
                                ipsum efficitur, sed aliquam metus interdum. Curabitur in sollicitudin nisl.
                                Aliquam dapibus fermentum auctor. Suspendisse consectetur porta massa quis elementum.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Donec nulla est, consequat sit amet sem eu, euismod sagittis libero. Aenean dignissim
                                sed ligula a accumsan. Mauris vel felis eu eros porttitor pellentesque. In ultrices
                                in erat in sagittis. Donec eget justo ac ante convallis maximus. Phasellus elementum
                                quam ut leo dictum ullamcorper. Praesent sagittis nulla et dignissim ornare.
                                <br /><br />
                                Nunc ut lacus vel erat facilisis scelerisque nec eu nisl. Sed ullamcorper, erat
                                sed blandit fringilla, ante tellus finibus turpis, iaculis rhoncus erat tellus
                                elementum leo. Nunc metus ipsum, volutpat at nibh non, lacinia maximus lorem.
                                Donec convallis odio fermentum odio feugiat ornare. Praesent ac tellus at nisl
                                dapibus venenatis eget vel orci. Aenean sit amet egestas lorem. Pellentesque lorem urna,
                                ultrices ac lectus hendrerit, convallis volutpat sapien. Nulla facilisi. Pellentesque
                                risus risus, vestibulum eget purus tincidunt, lacinia semper est.
                                <br /><br />
                                Donec at ante fringilla, efficitur odio nec, faucibus nunc. Etiam ligula mauris,
                                aliquet tincidunt facilisis nec, dignissim eu ipsum. Praesent molestie aliquam est,
                                et posuere erat aliquam malesuada. Etiam eleifend nunc id vehicula consequat.
                                Nunc sed arcu rutrum, consectetur felis nec, euismod lectus. Phasellus sagittis
                                massa nec orci ultricies vestibulum. Donec imperdiet, quam quis interdum luctus,
                                ligula enim blandit nisi, non sagittis nunc dolor ut velit. Nam ornare, est sit
                                amet volutpat vehicula, libero mauris volutpat arcu, eu ornare leo mi vel elit.
                                Etiam laoreet velit ut vehicula elementum. Maecenas posuere mi nec blandit maximus.
                                Donec et nunc pretium velit efficitur congue.
                                <br /><br />
                                Etiam in lorem eu ipsum accumsan pharetra non ut quam. Fusce eu tellus eget ipsum
                                faucibus scelerisque vel eget tellus. Curabitur sodales ut tellus non dignissim.
                                Aenean sit amet mi felis. Phasellus luctus mauris nec sem venenatis tristique.
                                Phasellus accumsan, erat non faucibus porta, enim purus blandit quam, sed lobortis
                                ante lectus vel lorem. Donec varius nisi eget orci euismod, sed consequat justo vehicula.
                                Etiam ac magna rutrum, commodo neque ullamcorper, placerat dui. Praesent vitae ex ut
                                felis aliquam blandit non ac mi.
                                <br /><br />
                                Maecenas est risus, vestibulum sed lacinia pellentesque, vehicula non enim. Sed vel
                                sapien magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Vestibulum sagittis diam sit amet mollis iaculis. Cras non
                                consectetur dolor, eu faucibus nibh. Sed odio nisl, dignissim luctus condimentum in,
                                condimentum vel elit. Sed laoreet efficitur tincidunt. Quisque et eros volutpat,
                                laoreet eros in, rutrum felis. Vestibulum porta, justo sit amet pretium hendrerit,
                                lectus ipsum suscipit felis, non faucibus erat elit et libero. Donec nisi enim,
                                commodo sit amet purus non, molestie tempor mauris. Duis condimentum arcu vel
                                neque efficitur, sed cursus nunc mollis. Nunc tempor quam eget pretium ultrices.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );

    }
}

Article.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Article);
