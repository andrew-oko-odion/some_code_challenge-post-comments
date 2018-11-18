import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header, Button, Card, Placeholder, Message } from 'semantic-ui-react';
import truncate from 'lodash/truncate';
import chunk from 'lodash/chunk';
import capitalize from 'lodash/capitalize';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

class Home extends React.Component {
    static async getInitialProps(context) {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts`
            );
            const posts = await res.json();
            console.log(posts.reverse());
            return { posts: posts };
        } catch (error) {
            return { error: 'There was some error' };
        }
    }

    constructor(props) {
        super(props);
        var chunked = chunk(this.props.posts, 10);
        this.state = {
            toggleMobileSidebar: false,
            isLoading: false,
            loadLimit: null,
            disableButton: false,
            chunkedPosts: chunked,
            posts: chunked.shift(),
        };
    }

    handleLoadMoreClick = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({
                posts: this.state.posts.concat(this.state.chunkedPosts.shift()),
                isLoading: false,
            });
            if (this.state.chunkedPosts == 0) {
                this.setState({
                    disableButton: true,
                });
                return;
            }
        }, 3000);
    };
    render() {
        const { posts, disableButton } = this.state;
        return (
            <React.Fragment>
                <Head>
                    <title> Code Challenge - All Posts </title>
                </Head>
                <Layout
                    component={
                        <React.Fragment>
                            {this.props.error ? (
                                <ErrorMessage />
                            ) : (
                                <div>
                                    {Posts(posts)}
                                    {this.state.isLoading
                                        ? postLoadingPlaceholder
                                        : null}
                                    <Button
                                        fluid
                                        primary
                                        disabled={disableButton}
                                        onClick={this.handleLoadMoreClick}
                                    >
                                        {disableButton
                                            ? 'No more Posts'
                                            : 'Show More Posts'}
                                    </Button>
                                </div>
                            )}
                        </React.Fragment>
                    }
                />
            </React.Fragment>
        );
    }
}
export default Home;

const ErrorMessage = () => (
    <Message
        info
        icon="exclamation circle"
        header="Error!"
        content="There was an Error in the request please Reload"
    />
);
export { ErrorMessage };

const Posts = chunkedPost =>
    chunkedPost.map((item, index) => (
        <Card fluid key={index}>
            <Card.Content>
                <React.Fragment>
                    <div />
                    <div className="post-id"> {item.id} </div>
                </React.Fragment>
                <Card.Header>
                    <Link
                        as={`/posts/show/${item.id}`}
                        href={`/posts/show/${item.id}`}
                    >
                        <a>{capitalize(item.title)}</a>
                    </Link>
                </Card.Header>
                <Card.Description>
                    {truncate(item.body, { length: 100 })}
                </Card.Description>
            </Card.Content>
            <style jsx>{`
                .post-id {
                    float: right;
                    opacity: 0.5;
                }
            `}</style>
        </Card>
    ));

const postLoadingPlaceholder = [...Array(8).keys()].map((item, index) => (
    <Card fluid key={index}>
        <Card.Content>
            <Placeholder>
                <Placeholder.Paragraph>
                    <Placeholder.Line length="long" />
                    <Placeholder.Line length="very long" />
                </Placeholder.Paragraph>
                <Placeholder.Line />
                <Card.Description>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Card.Description>
            </Placeholder>
        </Card.Content>
    </Card>
));
