import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {

    Text,
    Button,
    List, 
    ListItem, 
    Thumbnail,
    Container,
    Content,
    Body, 
    Right
} from 'native-base';
import ordersData from './ordersData.json';
import { SearchHeader } from '../Components/SearchHeader';
//图片资源只支持https访问
export class Bookings extends Component {
    render() {
        return (
            <Container>
                <SearchHeader />
                <Content>
                    <View>
                        <View style={styles.tab}>
                            <Button transparent vertical>
                                <Text style={styles.tabText}>ALL</Text>
                                <View style={styles.activeTabLine}></View>
                            </Button>
                            <Button transparent vertical>
                                <Text style={styles.tabText}>PENDING</Text>
                                <View style={styles.tabLine}></View>
                            </Button>
                            <Button transparent vertical>
                                <Text style={styles.tabText}>CONFIRMED</Text>
                                <View style={styles.tabLine}></View>
                            </Button>
                        </View>
                        <View style={styles.conBox}>
                            <View style={styles.infoBox}>
                                <Image source={{uri:"https://nailexpress.oss-accelerate.aliyuncs.com/banner1.png"}} style={styles.bannerPic} /> 

                                <List style={{marginTop:20}}>
                                    {
                                        ordersData.map((item) => 
                                            <ListItem thumbnail style={{marginLeft:-15,marginRight:-15}} key={item.id}>
                                                <Body >
                                                    <Text style={styles.listText} >{item.name}</Text>
                                                    <Text note style={styles.listNote} numberOfLines={1}>{item.date}</Text>
                                                    <Text note style={styles.listNote} numberOfLines={1}>{item.status} · ${item.price}</Text>
                                                </Body>
                                                <Right>
                                                    <Thumbnail square source={{uri:item.pic}} style={styles.listPic} />
                                                </Right>
                                            </ListItem>
                                        )
                                    }
                                </List>
                            </View>
                            
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles =StyleSheet.create({
    tab:{
        backgroundColor:"#FFF8F1",
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
    },

    tabText:{
        color:"#051861",
    },
    majorText:{
        color:"#051861",
    },
    activeTabLine:{
        backgroundColor:"#FF6D6D",
        borderRadius:10,
        width:"60%",
        height:3
    },
    tabLine:{
        backgroundColor:"#FFF8F1",
        borderRadius:10,
        width:"60%",
        height:3 
    },
    conBox:{
        backgroundColor:"#FFF8F1",

    },
    infoBox:{
        paddingHorizontal:30
    },
    bannerPic:{
        marginTop:10,
        width:"100%",
        height:100,
        flex:1,
        borderRadius:5,
        overflow:"hidden"
    },
    listText:{
        color:"#051861",
        fontSize:15,
        fontWeight:"bold",
        marginBottom:10
    },
    listNote:{
        fontSize:13,
        color:"#051861",
        fontWeight:"100"
    },
    listPic:{
        height:72,
        width:90,
        borderRadius:5,
        overflow:"hidden"
    }

})