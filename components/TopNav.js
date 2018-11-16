import React, { Fragment, Component } from 'react';
import {
    Menu,
    Dropdown,
    Container,
    Icon,
    Sidebar,
    Header,
    Segment,
    Grid,
    Divider,
    Image,
    Input,
    Search,
    Responsive,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const GuestNav = () => (
    <Menu.Menu position="right">
        <Menu.Item name="get-started">Get Started</Menu.Item>

        <Menu.Item name="Help">Help</Menu.Item>

        <Menu.Item name="Sign up">Sign Up</Menu.Item>

        <Menu.Item name="Login">Log In</Menu.Item>
    </Menu.Menu>
);

const UserNav = () => (
    <Menu.Menu position="right">
        <Menu.Item name="get-started">Get Started</Menu.Item>
        <Menu.Item name="Help">Help</Menu.Item>
        <Dropdown item floating pointing="top right">
            <Dropdown.Menu>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Listings</Dropdown.Item>
                <Dropdown.Item>Account settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Menu>
);

export const MobileSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        visible={visible}
        style={{ paddingTop: '1em' }}
        vertical
        size="large"
    >
        <Menu.Item
            className="hello"
            style={{ paddingLeft: '3em', paddingRight: '3em' }}
        >
            <Icon name="marker" /> Get Started
        </Menu.Item>
        <Menu.Item style={{ paddingLeft: '3em', paddingRight: '3em' }}>
            <Icon name="lock" /> Login
        </Menu.Item>
        <Menu.Item style={{ paddingLeft: '3em', paddingRight: '3em' }}>
            <Icon name="yahoo" /> Signup
        </Menu.Item>
    </Sidebar>
);

const TopNav = props => {
    return (
        <div>
            <Responsive {...Responsive.onlyMobile} as={Menu}>
                <Menu
                    size="large"
                    borderless
                    fluid
                    style={{
                        borderRadius: '0em',
                        paddingLeft: '2em',
                        paddingRight: '2em',
                    }}
                    fixed="top"
                >
                    <Menu.Item name="Home">Eventpride</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={props.toggleMobileSidebar}>
                            {props.switchIcon ? (
                                <Icon name="close" />
                            ) : (
                                <Icon name="sidebar" />
                            )}
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Responsive>

            <Grid>
                <Grid.Column width={16} only="tablet computer">
                    <Menu
                        size="large"
                        borderless
                        fluid
                        style={{
                            borderRadius: '0em',
                            paddingLeft: '2em',
                            paddingRight: '2em',
                        }}
                        fixed="top"
                    >
                        <Menu.Item name="Home">Eventpride</Menu.Item>

                        <Menu.Item name="search" style={{ flexGrow: 3 }}>
                            <Input
                                icon="search"
                                iconPosition="left"
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </Menu.Item>
                        <GuestNav />
                    </Menu>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default TopNav;

TopNav.propTypes = {
    switchIcon: PropTypes.bool.isRequired,
    toggleMobileSidebar: PropTypes.func.isRequired,
};
