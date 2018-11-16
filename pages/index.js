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

var allPost = [
    {
        userId: 1,
        id: 1,
        title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
            'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body:
            'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body:
            'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body:
            'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
    {
        userId: 1,
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body:
            'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    },
    {
        userId: 1,
        id: 7,
        title: 'magnam facilis autem',
        body:
            'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas',
    },
    {
        userId: 1,
        id: 8,
        title: 'dolorem dolore est ipsam',
        body:
            'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae',
    },
    {
        userId: 1,
        id: 9,
        title: 'nesciunt iure omnis dolorem tempora et accusantium',
        body:
            'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas',
    },
    {
        userId: 1,
        id: 10,
        title: 'optio molestias id quia eum',
        body:
            'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error',
    },
    {
        userId: 2,
        id: 11,
        title: 'et ea vero quia laudantium autem',
        body:
            'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
    },
    {
        userId: 2,
        id: 12,
        title: 'in quibusdam tempore odit est dolorem',
        body:
            'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
    },
    {
        userId: 2,
        id: 13,
        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
        body:
            'aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
    },
    {
        userId: 2,
        id: 14,
        title: 'voluptatem eligendi optio',
        body:
            'fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum',
    },
    {
        userId: 2,
        id: 15,
        title: 'eveniet quod temporibus',
        body:
            'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae',
    },
    {
        userId: 2,
        id: 16,
        title:
            'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
        body:
            'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta',
    },
    {
        userId: 2,
        id: 17,
        title: 'fugit voluptas sed molestias voluptatem provident',
        body:
            'eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo',
    },
    {
        userId: 2,
        id: 18,
        title: 'voluptate et itaque vero tempora molestiae',
        body:
            'eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam',
    },
    {
        userId: 2,
        id: 19,
        title: 'adipisci placeat illum aut reiciendis qui',
        body:
            'illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas',
    },
];

allPost = allPost.reverse();

class Home extends React.Component {
    constructor(props) {
        super(props);
        const chunked = chunk(allPost, 2);
        this.state = {
            toggleMobileSidebar: false,
            isLoading: false,
            loadLimit: null,
            disableButton: false,
            chunkedPosts: chunked,
            posts: chunked.shift(),
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

            // posts: this.state.chunkedPosts.shift(),
        };
        this.handleContextRef = this.handleContextRef.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        console.log(this.state.chunkedPosts);
    }

    handleContextRef = contextRef => this.setState({ contextRef });
    handleUpdate = (e, { calculations }) => this.setState({ calculations });

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
        const { calculations, contextRef, posts, disableButton } = this.state;
        return (
            <React.Fragment>
                <Head>
                    <title>Welcome</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                    />
                </Head>
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
                                    This is code challenge And honestly I am
                                    having fun with it. how cool is that
                                </Segment>
                            </Sticky>
                        </Grid.Column>
                        <Grid.Column computer={8} mobile={14}>
                            <Visibility
                                onUpdate={this.handleUpdate}
                                offset={[20, 10]}
                            >
                                {Posts(posts)}
                                {this.state.isLoading
                                    ? postLoadingPlaceholder
                                    : null}
                                <div>
                                    <Button
                                        fluid
                                        primary
                                        disabled={disableButton}
                                        onClick={this.handleLoadMoreClick}
                                    >
                                        {disableButton
                                            ? 'No more Posts'
                                            : 'Load more (+10)'}
                                    </Button>
                                </div>
                            </Visibility>
                        </Grid.Column>

                        <Grid.Column computer={4} only="computer">
                            <Sticky context={contextRef} offset={60}>
                                <Image src="static/paragraph.png" />
                                <Divider />
                                <Image src="static/paragraph.png" />
                                <Divider />
                                <Image src="static/paragraph.png" />
                                <Divider />
                                <Image src="static/paragraph.png" />
                                code_challenge <Icon name="copyright" /> 2018
                            </Sticky>
                        </Grid.Column>

                        <Grid.Column computer={1} mobile={1} />
                    </Grid>
                </div>

                <style jsx>{`
                    .hero {
                        width: 100%;
                        color: #333;
                    }
                    .title {
                        margin: 0;
                        width: 100%;
                        padding-top: 80px;
                        line-height: 1.15;
                        font-size: 48px;
                    }
                    .title,
                    .description {
                        text-align: center;
                    }
                    .row {
                        max-width: 880px;
                        margin: 80px auto 40px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                    }
                    .card {
                        padding: 18px 18px 24px;
                        width: 220px;
                        text-align: left;
                        text-decoration: none;
                        color: #434343;
                        border: 1px solid #9b9b9b;
                    }
                    .card:hover {
                        border-color: #067df7;
                    }
                    .card h3 {
                        margin: 0;
                        color: #067df7;
                        font-size: 18px;
                    }
                    .card p {
                        margin: 0;
                        padding: 12px 0 0;
                        font-size: 13px;
                        color: #333;
                    }
                `}</style>
            </React.Fragment>
        );
    }
}

export default Home;

const Posts = chunkedPost =>
    chunkedPost.map((item, index) => (
        <Card fluid key={index}>
            <Card.Content>
                <Card.Header>
                    <Link href={`/show/posts/${item.id}`}>
                        <a>{item.title}</a>
                    </Link>
                </Card.Header>
                <Card.Meta>
                    <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    {truncate(item.body, { length: 100 })} <br />
                    {item.id}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name="user" />
                    22 Friends
                </a>
            </Card.Content>
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
