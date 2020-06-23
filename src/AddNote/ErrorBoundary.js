import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.setState({ errorOccurred: true })
    }

    render() {

        return (
            <>
                <>
                    {this.state.errorOccurred || this.props.hasError ? <h3>{this.props.friendlyErrorMessage}</h3> : <></>}
                </>
                <>{this.props.children}</>
            </>
        )
    }
}

export default ErrorBoundary;