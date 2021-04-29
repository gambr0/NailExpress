import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Container,
    Content,
    Icon,
    Text,
    Button,
    List, 
    ListItem, 
    Thumbnail,
    Left, 
    Right
} from 'native-base';
import setData from '../app_data/settings.json'

export class Me extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <View style={{backgroundColor:"#FFF8F1"}}>
                        <View style={styles.proBox}>
                            <View style={styles.profileView}>
                                <Thumbnail source={{uri:"https://xxx.oss-accelerate.aliyuncs.com/xxx"}} style={styles.ava}></Thumbnail>
                                <Text style={styles.proText}>
                                    Hello Nails
                                </Text>
                            </View>
                            <View style={styles.btns}>
                                <Button vertical transparent>
                                    <Icon name="star" type="Feather" style={styles.btnIcon} />
                                    <Text style={styles.btnText} >Saved</Text>
                                </Button>
                                <Button vertical transparent>
                                    <Icon name="edit" type="Feather" style={styles.btnIcon} />
                                    <Text style={styles.btnText} >Comment</Text>
                                </Button>
                                <Button vertical transparent>
                                    <Icon name="message-square" type="Feather" style={styles.btnIcon} />
                                    <Text style={styles.btnText} >Message</Text>
                                </Button>
                            </View>
                        </View>

                        <List style={styles.list}>
                            {
                                setData.map((item) =>
                                    <ListItem key={item.id}>
                                        <Left>
                                            <Text style={styles.listText}>{item.name}</Text>
                                        </Left>
                                        <Right>
                                            <Icon name={item.icon} type={item.type} style={styles.listIcon} />
                                        </Right>
                                    </ListItem>
                                )
                            }
                        
                        </List>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles =StyleSheet.create({
    proBox:{
        elevation:5, //设置elevation会向内部四周也添加阴影
        borderBottomWidth:1,
        borderBottomColor:"transparent",
        marginTop:-5, //将内部阴影隐藏在屏幕外侧
        marginHorizontal:-5
    },
    profileView:{
        flex:1,
        flexDirection:"row",
        paddingHorizontal:30,
        paddingTop:60,
        paddingBottom:10,
        alignItems:"center"
    },
    ava:{
        width:80,
        height:80,
        borderRadius:80,
        
    },
    proText:{
        fontSize:22,
        fontWeight:"bold",
        color:"#051861",
        paddingLeft:18

    },
    btns:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        padding:10,
    },
    btnIcon:{
        color:"#051861"
    },
    btnText:{
        color:"#051861"
    },
    list:{
        paddingHorizontal:20,
        
        backgroundColor:"#FFFFFF"
    },
    listText:{
        color:"#051861"
    },
    listIcon:{
        color:"#051861"
    }
})