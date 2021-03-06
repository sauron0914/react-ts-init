import * as React from "react";

function logErrorToMyService(error: any, info: any) {

}

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: any, info: any) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
    

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;