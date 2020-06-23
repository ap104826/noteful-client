import React from 'react';


class FoldersError extends React.Component {
    constructor(props) {
        super(props)
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.setState({ errorOccurred: true })
    }

    render() {
        return this.state.errorOccurred ? <h1>Could not add a Folder!</h1> : this.props.children
    }
}


export default FoldersError;