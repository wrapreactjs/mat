import React from 'react'
import PropTypes from 'prop-types';

//Material-ui imports
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Switch from 'material-ui/Switch';

//Other imports
import AutoComplete from '../../MatComponents/AutoComplete'
import MultipleSelect from '../../MatComponents/MultipleSelect'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        padding: 16,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    listItem: {
        borderBottom: "solid 1px #ccc"
    },
    details: {
        fontSize: 16,
        color: '#ccc',
        paddingTop: 10
    },
    listItemText: {
        paddingRight: '30px',
        fontSize: '10px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: '100%',
    },
    formControlHalf: {
        margin: theme.spacing.unit,
        minWidth: '45%',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    },
    autoWrapper: {
        zIndex: 1
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});
class FormAdvanced extends React.Component {
    componentDidMount() {
        document.title = "MAT - Form Advanced";
    }
    constructor(props){
        super(props);
        this.setACValue = this.setACValue.bind(this);
    }
    state = {
        name : '',
        age: '',
        type: '',
        gender:'male',
        colors: [
            {label:'Black', key:'black', checked: false},
            {label:'White', key:'white', checked: true},
            {label:'Brown', key:'brown', checked: false},
        ],
    };
    submitForm(event) {
        event.preventDefault();
        console.info(this.state);
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };
    handleChecked = index => (event, checked) => {
        let colors = this.state.colors;
        colors[index].checked = checked;
        this.setState({ colors : colors});
    };
    setACValue(value){
        this.setState({type:value});
        console.info("setting new value to ", value);
    }
    render() {
        const classes = this.props.classes;

        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <Typography type="display1" align="left" gutterBottom>
                                Advanced Form
                            </Typography>
                            <Typography align="left">You have 42 messsages and 6 notifications.</Typography>
                            <form className={classes.container} autoComplete="off" onSubmit={(event) => this.submitForm(event)}>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="name"
                                                label="Name"
                                                className={classes.textField}
                                                value={this.state.name}
                                                onChange={this.handleChange('name')}
                                                margin="normal"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6} style={{paddingTop: 20}}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                                            <Select
                                                value={this.state.age}
                                                onChange={this.handleChange('age')}
                                                input={<Input id="age-simple" />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6} className={classes.autoWrapper}>
                                        <FormControl className={classes.formControl}>
                                            <AutoComplete
                                                label="Birthday"
                                                setACValue={this.setACValue}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={6} className={classes.autoWrapper}>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="date"
                                                label="Birthday"
                                                type="date"
                                                defaultValue="2014-02-14"
                                                className={classes.textField}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Colors</FormLabel>
                                            <FormGroup>
                                                {this.state.colors && this.state.colors.map( (color,index) => <FormControlLabel
                                                    key={color.key}
                                                    control={
                                                        <Checkbox
                                                            checked={color.checked}
                                                            onChange={this.handleChecked(index)}
                                                            value={color.key}
                                                        />
                                                    }
                                                    label={color.label}
                                                />
                                                )}
                                            </FormGroup>
                                            <FormHelperText>Dogs have multiple colors</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Belt Colors</FormLabel>
                                            <FormGroup>
                                                <MultipleSelect />
                                            </FormGroup>
                                        </FormControl>
                                        <FormControl component="fieldset" className={classes.formControl}>
                                            <FormLabel component="legend">Dress Colors</FormLabel>
                                            <FormGroup>
                                                <MultipleSelect />
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormControl component="fieldset" required className={classes.formControl}>
                                            <FormLabel component="legend">Gender</FormLabel>
                                            <RadioGroup
                                                aria-label="gender"
                                                name="gender1"
                                                className={classes.group}
                                                value={this.state.gender}
                                                onChange={this.handleChange("gender")}
                                            >
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                <FormControlLabel value="disabled" disabled control={<Radio />} label="Disabled" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={this.state.checkedA}
                                                    onChange={(event, checked) => this.setState({ checkedA: checked })}
                                                />
                                            }
                                            label="I Agree to the terms and conditions."
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <Button raised color="primary" className={classes.button} type="submit">
                                            Submit
                                        </Button>
                                        <Button raised className={classes.button}>
                                            Cancel
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );

    }
}

FormAdvanced.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormAdvanced);
