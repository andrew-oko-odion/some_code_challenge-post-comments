import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import { Grid, Segment, Visibility, Sticky } from 'semantic-ui-react';
import TopNav from '../components/TopNav';
import 'semantic-ui-css/semantic.min.css';
import truncate from 'lodash/truncate';
import chunk from 'lodash/chunk';
import capitalize from 'lodash/capitalize';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculations: {
                direction: 'none',
                height: 0,
                width: 0,
                topPassed: false,
                bottomPassed: false,
                pixelsPassed: 0,
                percentagePassed: 0,
                topVisible: false,
                bottomVisible: false,
                fits: false,
                passing: false,
                onScreen: false,
                offScreen: false,
            },
        };
        this.handleContextRef = this.handleContextRef.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleContextRef = contextRef => this.setState({ contextRef });
    handleUpdate = (e, { calculations }) => this.setState({ calculations });

    render() {
        const { calculations, contextRef } = this.state;
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                    />
                </Head>
                <style jsx global>{`
                    body {
                        background: #e9ebee;
                        font: 17px menlo;
                    }
                `}</style>
                <TopNav />
                <div ref={this.handleContextRef} style={{ marginTop: '4em' }}>
                    <Grid>
                        <Grid.Column mobile={1} only="mobile tablet" />
                        <Grid.Column
                            computer={3}
                            only="computer"
                            style={{ marginLeft: '2em' }}
                        >
                            <Sticky context={contextRef} offset={60}>
                                <Segment>
                                    <h3> About </h3>
                                    This is a code challenge from a potential
                                    employer. And I was asked to use the Fake
                                    API to render `posts` And its corresponding
                                    comments
                                </Segment>
                            </Sticky>
                        </Grid.Column>
                        <Grid.Column computer={8} mobile={14}>
                            <Visibility
                                onUpdate={this.handleUpdate}
                                offset={[20, 10]}
                            >
                                {this.props.component}
                            </Visibility>
                        </Grid.Column>
                        <Grid.Column computer={4} only="computer" />
                        <Grid.Column computer={1} mobile={1} />
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default Layout;
Layout.propTypes = {
    component: PropTypes.node.isRequired,
};
