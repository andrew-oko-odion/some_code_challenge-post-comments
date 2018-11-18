import React, { Fragment, Component } from 'react';
import { Menu, Grid, Responsive, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Head from 'next/head';
const TopNav = props => {
    return (
        <div>
            <style jsx global>{`
                .menu-style {
                    border-radius: 0em;
                    padding-left: 2em;
                    padding-right: 2em;
                }
            `}</style>

            <Responsive {...Responsive.onlyMobile} as={Menu}>
                <Menu
                    inverted
                    color="teal"
                    size="large"
                    borderless
                    fluid
                    className="menu-style"
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
                        className="menu-style"
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
