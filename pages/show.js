import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import {
    Segment,
    Image,
    Header,
    Button,
    Divider,
    Menu,
    Placeholder,
    Comment,
} from 'semantic-ui-react';
import chunk from 'lodash/chunk';
import capitalize from 'lodash/capitalize';
import { ErrorMessage } from './index.js';

class Show extends React.Component {
    static async getInitialProps(context) {
        try {
            const { id } = context.query;
            const commentRes = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}/comments`
            );
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const post = await res.json();
            const comments = await commentRes.json();
            console.log(comments);
            return { post: post, comments: comments.reverse() };
        } catch (error) {
            return { error: 'There was some error on the request' };
        }
    }

    constructor(props) {
        super(props);
        const chunkedComments = chunk(this.props.comments, 3);
        this.state = {
            comments: chunkedComments.shift(),
            chunkedComments: chunkedComments,
            isLoading: false,
            disableButton: false,
        };
    }

    loadMoreComments = () => {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({
                comments: this.state.comments.concat(
                    this.state.chunkedComments.shift()
                ),
                isLoading: false,
            });
            if (this.state.chunkedComments == 0) {
                this.setState({
                    disableButton: true,
                });
                return;
            }
        }, 3000);
    };

    render() {
        const { isLoading, disableButton, comments } = this.state;
        return (
            <React.Fragment>
                <Head>
                    <title>
                        {this.props.post
                            ? `Posts and Comments - ${this.props.post.title}`
                            : 'Error in Request'}
                    </title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                    />
                </Head>
                <Layout
                    component={
                        <React.Fragment>
                            {this.props.error ? (
                                <ErrorMessage />
                            ) : (
                                <React.Fragment>
                                    <Segment size="large">
                                        <Header as="h2">
                                            {capitalize(this.props.post.title)}
                                        </Header>
                                        <div>{this.props.post.body}</div>
                                    </Segment>
                                    <Segment size="tiny">
                                        <Header as="h5"> Comments </Header>
                                        {comments.length <= 0
                                            ? null
                                            : postComments(comments)}
                                        {isLoading ? commentsPlaceholder : null}
                                    </Segment>
                                    <Button
                                        primary
                                        disabled={disableButton}
                                        onClick={this.loadMoreComments}
                                    >
                                        {disableButton
                                            ? 'No More comments'
                                            : 'Show More comments'}
                                    </Button>
                                    <Button floated="right">
                                        <Link href="/">Back to Homepage</Link>
                                    </Button>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    }
                />
            </React.Fragment>
        );
    }
}
export default Show;

const postComments = comment =>
    comment.map((item, index) => (
        <Comment.Group key={index}>
            <Comment>
                <Comment.Content>
                    <React.Fragment>
                        <div />
                        <div className="comment-id"> {item.id} </div>
                    </React.Fragment>
                    <Comment.Author>{capitalize(item.name)}</Comment.Author>
                    <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
                <style jsx>{`
                    .comment-id {
                        float: right;
                        opacity: 0.5;
                    }
                `}</style>
            </Comment>
        </Comment.Group>
    ));

const commentsPlaceholder = [...Array(3).keys()].map((item, index) => (
    <Comment.Group key={index}>
        <Comment>
            <Comment.Content>
                <Comment.Author>
                    <Placeholder>
                        <Placeholder.Header>
                            <Placeholder.Line length="short" />
                        </Placeholder.Header>
                    </Placeholder>
                </Comment.Author>
                <Comment.Text>
                    <Placeholder>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length="long" />
                            <Placeholder.Line length="very long" />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Comment.Text>
            </Comment.Content>
        </Comment>
    </Comment.Group>
));
