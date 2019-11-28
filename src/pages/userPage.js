import React from 'react';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>User Page</h2>
                <h3>{this.props.match.params.id}</h3>
            </div>
        )
    }
}
export default UserPage;