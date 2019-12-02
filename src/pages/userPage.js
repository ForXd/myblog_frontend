import React from 'react';
import { connect } from 'react-redux';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>User Page</h2>
                <h3>{this.props.current_user}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.auth });

export default connect(mapStateToProps)(UserPage);