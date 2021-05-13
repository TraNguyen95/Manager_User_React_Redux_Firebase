import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';


class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff()
    }
    render() {
        if(this.props.AlertShow === false) return null;
        return (
            <AlertContainer>
                <Alert onDismiss={() => {this.handleDismiss()}} timeout={1000} type="info">
                    {this.props.AlertContent}
                </Alert>
               
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent: state.AlertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
