import React from 'react';

class FoldersError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Could not add Folder</h2>
            );
        }
        return this.props.children;
    }
}

export default FoldersError;