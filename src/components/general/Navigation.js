import React from 'react';
import { DropButton, DropDownContent, DropDown, Container, SearchBar } from './navStyle';

class Navigation extends React.Component {
    render() {
        return (
            <Container>
                <SearchBar></SearchBar>
                <DropDown>
                    <DropButton>User</DropButton>
                    <DropDownContent>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </DropDownContent>
                </DropDown>
            </Container>
        );
    }
}
export default Navigation;