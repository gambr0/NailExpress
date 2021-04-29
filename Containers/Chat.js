import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Button, Text } from 'native-base';

export class Chat extends React.Component {
    state = {
        messages: [],
    }

    componentDidMount() {
        this.setState({
        messages: [

            {
                _id: 1,
                text: 'Love my new nails!',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Hello Nails',
                    avatar: "https://xxx.oss-accelerate.aliyuncs.com/xxx",
                },
                image: "https://xxx.oss-accelerate.aliyuncs.com/xxx"
            },
            {
                _id: 2,
                text: 'Hello Nails~ 😆',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Susan',
                    avatar: "https://xxx.oss-accelerate.aliyuncs.com/xxx",
                },
                
            }
        ],
        });

    }

    onSend = (messages = []) => {
        this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        const navigation = this.props.navigation
        return (
        <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
            _id: 1,
            }}
            showAvatarForEveryMessage
            showUserAvatar
            alwaysShowSend
            messagesContainerStyle={{backgroundColor:"#FFFFFF"}}
            renderActions={() => 
                <Button transparent 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{color:"#2b9af3"}}>
                        back
                    </Text>
                </Button>
            }
        />
        )
    }
}