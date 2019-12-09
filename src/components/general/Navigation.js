import React from 'react';
import { DropButton, Container, SearchBar, AnonymousUser, CenterContainer } from './navStyle';
import { connect } from 'react-redux';
import history from "../../routers/history";
import { LOGOUT } from "../../redux/actions/actionTypes";
import authAgent from "../../agents/authAgent";
import { Menu, Dropdown, Icon, message, Button } from 'antd';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    search = () => {
        alert(this.state.searchValue);
    }

    handleScroll = () => {
        scrollFunc();
        if(scrollDirection === 'down'){
            document.getElementById('navigation')
                .setAttribute('style', 'transform:translateY(-100%);')
        }
        else if(scrollDirection === 'up'){
            document.getElementById('navigation')
                .removeAttribute('style')
        }
    }

    render() {
        const onClick = ({ key }) => {
            if (key === '1') {
                history.push('/user');
            } else {
                authAgent.logout();
                this.props.dispatch({type: LOGOUT});
            }
        };
        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1">setting</Menu.Item>
                <Menu.Item key="2">logout</Menu.Item>
            </Menu>
        );
        return (
            <Container id={'navigation'}>
                <CenterContainer>
                    <Icon type="fire"
                          style={{ fontSize: '45px', color: '#000' }}
                          onClick={() => {history.push('/')}}
                    />
                </CenterContainer>
                <SearchBar>
                    <input type="text"
                           value={this.state.searchValue}
                           onChange={(e) => {
                               this.setState({searchValue: e.target.value})
                           }}/>
                    <Icon type="search"
                          style={{ fontSize: '30px', color: '#000' }}
                          onClick={this.search}/>

                </SearchBar>
                <CenterContainer>
                    {   this.props.current_user
                        ?
                        <Dropdown overlay={menu}>
                            <DropButton>{ this.props.current_user }</DropButton>
                        </Dropdown>
                        :
                        <AnonymousUser>
                            <Button onClick={() => {
                                history.push({
                                        pathname: "/login",
                                        previousLink: document.location.pathname
                                    })}}> login </Button>
                        </AnonymousUser>
                    }
                </CenterContainer>
            </Container>
        );
    }
}

let scrollAction = {x: 'undefined', y: 'undefined'}, scrollDirection;

function scrollFunc() {
    if (typeof scrollAction.x === 'undefined') {
        scrollAction.x = window.pageXOffset;
        scrollAction.y = window.pageYOffset;
    }
    var diffX = scrollAction.x - window.pageXOffset;
    var diffY = scrollAction.y - window.pageYOffset;
    if (diffX < 0) {
        // Scroll right
        scrollDirection = 'right';
    } else if (diffX > 0) {
        // Scroll left
        scrollDirection = 'left';
    } else if (diffY < 0) {
        // Scroll down
        scrollDirection = 'down';
    } else if (diffY > 0) {
        // Scroll up
        scrollDirection = 'up';
    } else {
        // First scroll event
    }
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
}

const mapStateToProps = state => ({ ...state.auth });

export default connect(mapStateToProps)(Navigation);