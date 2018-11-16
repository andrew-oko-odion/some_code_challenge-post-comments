import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import {
    Sidebar,
    Segment,
    Container,
    Grid,
    Image,
    Header,
    Button,
    Icon,
    Card,
    Visibility,
    Sticky,
    Divider,
    Menu,
    Placeholder,
    Comment,
} from 'semantic-ui-react';
import TopNav, { MobileSidebar } from '../components/TopNav';
import 'semantic-ui-css/semantic.min.css';
import truncate from 'lodash/truncate';
import chunk from 'lodash/chunk';

var pulledComments = [
    {
        postId: 1,
        id: 1,
        name: 'id labore ex et quam laborum',
        email: 'Eliseo@gardner.biz',
        body:
            'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
    {
        postId: 1,
        id: 2,
        name: 'quo vero reiciendis velit similique earum',
        email: 'Jayne_Kuhic@sydney.com',
        body:
            'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
    },
    {
        postId: 1,
        id: 3,
        name: 'odio adipisci rerum aut animi',
        email: 'Nikita@garfield.biz',
        body:
            'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
    },
    {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body:
            'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati',
    },
    {
        postId: 1,
        id: 5,
        name: 'vero eaque aliquid doloribus et culpa',
        email: 'Hayden@althea.biz',
        body:
            'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et',
    },
];

var post = {
    userId: 2,
    id: 14,
    title: 'voluptatem eligendi optio',
    body:
        'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum',
};

pulledComments = pulledComments.reverse();
var chunkedComments = chunk(pulledComments, 3);

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: chunkedComments.shift(),
            chunkedComments: chunkedComments,
            isLoading: false,
            disableButton: false,
            postBody: post.body,
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
        const { isLoading, disableButton, comments, postBody } = this.state;
        return (
            <React.Fragment>
                <TopNav />
                <Segment>
                    <p> Cool Post </p>
                    <p> Cool Post </p>
                    <p> Cool Post </p>
                    {postBody}
                    {postComments(comments)}
                    {isLoading ? commentsPlaceholder : null}
                    <Button
                        primary
                        disabled={disableButton}
                        onClick={this.loadMoreComments}
                    >
                        {disableButton
                            ? 'No More comments'
                            : 'load more comments (+3)'}
                    </Button>
                </Segment>
            </React.Fragment>
        );
    }
}

export default Show;

const postComments = comments =>
    comments.map(item => (
        <Comment.Group>
            <Comment>
                <Comment.Content>
                    <Comment.Author>{item.name}</Comment.Author>
                    <Comment.Metadata>
                        <div>2 days ago</div>
                        <div>
                            <Icon name="star" />5 Faves
                        </div>
                    </Comment.Metadata>
                    {item.id}
                    <Comment.Text>{item.body}</Comment.Text>
                </Comment.Content>
            </Comment>
        </Comment.Group>
    ));

const commentsPlaceholder = [...Array(3).keys()].map((item, index) => (
    <Comment.Group>
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
