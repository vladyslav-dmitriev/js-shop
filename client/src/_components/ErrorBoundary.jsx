import React, { Component } from 'react';
import { errorService } from '../_services';

class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    errorService.sendErrorInfoToServer(error, errorInfo.componentStack );
  }

  render() {
    if (this.state.error) {
      return (
        <div className="main">
          <div className="container">
            <div className="error-boundary">
              Возникла непредвиденная ошибка, мы уже работаем над ее устранением. Пожалуйста, попробуйте позже.
            </div>
          </div>
        </div>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
