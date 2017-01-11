import React, { Component, PropTypes } from 'react';

// constants
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

//reducer
const initialState = {
  show: false,
  message: '',
  alertType: ERROR
};

export const alertReducer = function(state = initialState, action) {
  switch (action.type) {
  case SHOW_ALERT:
    return {show: true, message: action.message, alertType: action.alertType};
  case HIDE_ALERT:
    return initialState;
  default:
    return state;
  }
}

const alertClassnames = type => {
  const alert = 'alert';

  switch(type) {
    case SUCCESS:
      return `${alert} alert--success`;
    case ERROR:
      return `${alert} alert--error`;
    default:
      return alert;
  }
}

// UI component
export const Alert = ({ type, children}) => {
  return (
    <div className={alertClassnames(type)}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  type : ERROR
};

Alert.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export const AlertProvider = ({show, message, alertType, children}) => {
  return (
    <div>
      {
        show ? <Alert type={alertType}>{message}</Alert> : null
      }
      {children}
    </div>
  );
};

AlertProvider.displayName = 'AlertProvider';

AlertProvider.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  alertType: PropTypes.string,
  children: PropTypes.element
};

export const connectAlert = (Comp) => {
  return class extends Component {
    static displayName = `connectAlert(${Comp.displayName})`;

    static propTypes = {
      alert: PropTypes.object
    }

    render() {
      return (
        <AlertProvider {...this.props.alert}>
          <Comp {...this.props} />
        </AlertProvider>
      );
    }
  };
};
