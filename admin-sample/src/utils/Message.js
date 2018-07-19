import React from 'react'
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Info from 'material-ui-icons/Info';
import Error from 'material-ui-icons/Error';
import Warning from 'material-ui-icons/Warning';
import Done from 'material-ui-icons/Done';


class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            message: '',
            type: ''
        }
    }
    success = (message) => {
        this.setState({ open: true, type: 'success' , message});
    };
    info = (message) => {
        this.setState({ open: true, type: 'info' , message});
    };
    error = (message) => {
        this.setState({ open: true, type: 'error', message });
    };
    warning = (message) => {
        this.setState({ open: true, type: 'warning', message });
    };

    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };

    render(){
        return <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            className={this.state.type}
            open={this.state.open}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            SnackbarContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={
                <div id="message-id" className="message-content-box">
                    {this.state.type === 'success' && <Done />}
                    {this.state.type === 'info' && <Info />}
                    {this.state.type === 'error' && <Error />}
                    {this.state.type === 'warning' && <Warning />}
                    <span >
                    {this.state.message}</span></div>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={this.handleRequestClose}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />

    }
}
export default Message;