import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';


import {
  Icon, 
  Button, 
  Text,
  Card, 
  CardItem,
  Thumbnail,
  Container,
  Content
} from 'native-base';
import { SearchHeader } from '../Components/SearchHeader';
import tagList from '../app_data/tagList.json'
import beuData from './beautipsData.json'
import diyData from './diyData.json'

const firstCol = beuData.filter((item) =>
    item.id%2 === 0
);

const secCol = beuData.filter((item) =>
    item.id%2 !== 0
);

const diyFirstCol = diyData.filter((item) =>
    item.id%2 === 0
);

const diySecCol = diyData.filter((item) =>
    item.id%2 !== 0
);
export class Beautips extends Component {
    constructor(props){
        super(props);
        this.state = {
            tag: 1
        }
    }

    //不能直接用require(变量) 
    renderCards = (col) => 
        col.map((item) => 
            <Card transparent key={item.id} style={{height:220, marginBottom:20}}>
                <CardItem cardBody style={styles.firstCard}> 
                    <Image source={{ uri: item.pic}} style={styles.cardImg} />
                    <Icon name="heart" type="Feather" style={styles.cardIcon}></Icon>  
                </CardItem>
                <CardItem style={styles.midCard}>
                        
                    <Text style={{color:"black", fontSize:13}}>
                        {item.title.length < 40 ? item.title : item.title.substr(0,39) + '...'}
                    </Text>
                        
                </CardItem>
                <CardItem style={styles.lastCard}>
                    <Thumbnail source={{uri:item.ava }} style={{width:22,height:22}} />
                    <Text style={styles.lastCardFont}>{item.user}</Text>
                </CardItem>
            </Card>
        )
    

    render(){
        return (
            <Container>
                <SearchHeader />
                <Content>
                    <View style={styles.background}>
                        <FlatList style={styles.flatList}
                            data={tagList}
                            renderItem={({item}) => 
                                <Button transparent vertical style={styles.tags} key={item.id}
                                    onPress={() => this.setState({tag: item.id})}
                                >
                                    <Text style={styles.tagsText}>{item.name}</Text>
                                    <View style={item.id === this.state.tag ? styles.activeLine : styles.tagsLine}></View>
                                </Button>
                            
                            }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />

                        {this.state.tag === 1 ?
                            (
                                <View style={{paddingHorizontal:30, paddingTop:20}}>
                                    <Text style={{fontSize:23, color:"#051861"}}>Guess you like</Text>
                                    <Image source={{uri:"https://nailexpress.oss-accelerate.aliyuncs.com/beautips/3W3l90.png"}} style={styles.bannerPic} />
                                    <View style={{flex:1, flexDirection:'row',marginTop:20}}>
                                        <View style={{flex:1, flexDirection:'column', marginRight:4}}>

                                            {this.renderCards(firstCol)}

                                        </View>

                                        <View style={{flex:1, flexDirection:'column', marginLeft:4}}>

                                            {this.renderCards(secCol)}
                                        </View>
                                        
                                    </View>
                                </View>
                            ) : (
                                <View style={{paddingHorizontal:30, paddingTop:20}}>
                                    <View style={{flex:1, flexDirection:'row',marginTop:20}}>
                                        <View style={{flex:1, flexDirection:'column', marginRight:4}}>

                                            {this.renderCards(diyFirstCol)}

                                        </View>

                                        <View style={{flex:1, flexDirection:'column', marginLeft:4}}>

                                            {this.renderCards(diySecCol)}
                                        </View>
                                        
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#FFF8F1",
        
        
    },
    flatList:{
        
        borderBottomColor:"transparent",
        elevation:3,
        marginTop:-3, //将内部阴影隐藏在屏幕外侧
        marginHorizontal:-10,
        paddingHorizontal:20,
        
    },
    tags:{
        borderWidth:0,
        paddingBottom:0,
        margin:0
        

    },
    tagsText:{
        color:"#051861",
        fontSize:12,
        marginBottom:10
    },
    activeLine:{
        backgroundColor:"#FF6D6D",
        width:"60%",
        height:3,
        
    },
    tagsLine:{
        backgroundColor:"transparent",
        width:"60%",
        height:3,
        
    },
    bannerPic:{
        marginTop:10,
        width:"100%",
        height:100,
        flex:1,
        borderRadius:5,
        overflow:"hidden",
    },
    firstCard:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    cardImg:{
        height: 140, 
        width: "100%",
        borderRadius:5,
        overflow:"hidden"
    },
    cardIcon:{
        color:"#FFF8F1",
        zIndex:999,
        right:20,
        top:-58,
        fontSize:15
    },
    midCard:{
        marginHorizontal:-18,
        backgroundColor:"transparent"
    },
    lastCard:{
        marginHorizontal:-18,
        marginTop:-8,
        backgroundColor:"transparent",
        height:10,

    },
    lastCardFont:{
        fontSize:11,
        color:"black",
        marginLeft:6
    }
})