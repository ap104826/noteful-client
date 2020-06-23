import React from 'react';

class NotesError extends React.Component {
    constructor(props) {
        super(props)
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.setState({ errorOccurred: true })
        logErrorToMyService(error, info)
    }

    render() {
        return this.state.errorOccurred ? <h1>Could not add a note!</h1> : this.props.children
    }
}

export default NotesError;