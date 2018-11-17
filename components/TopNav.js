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
import Link from 'next/link';

export const MobileSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        visible={visible}
        style={{ paddingTop: '1em' }}
        vertical
        size="large"
    />
);

const TopNav = props => {
    return (
        <div>
            <Responsive {...Responsive.onlyMobile} as={Menu}>
                <Menu
                    inverted
                    color="teal"
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
                    <Menu.Item name="Home">Code challenge</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Icon name="sidebar" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Responsive>

            <Grid>
                <Grid.Column width={16} only="tablet computer">
                    <Menu
                        inverted
                        color="teal"
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
                        <Menu.Item name="Home">
                            <Link href="/">Code Challenge </Link>
                        </Menu.Item>
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
