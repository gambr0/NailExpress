import React, { Component } from 'react';
import { StatusBar, Image, Dimensions, View, Text, StyleSheet, FlatList } from 'react-native';
import { 
    Container, 
    Content,
     Button, 
     Header, 
     Icon,
     Left,
     Body,
     Right,
     Footer
} from 'native-base';
import stores from '../storeDetails.json'
import tagList from '../app_data/detailTagList.json'
import storesReviewsDatas from "../storeReview.json";
import { StoresBookings } from "../Components/StoresBookings";
import { StoresReviews } from "../Components/StoresReviews";

const store = stores[0]
const storeReviewsData = storesReviewsDatas[0].reviews

export class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            tag: 1
        }
    }

    onTabChange = (tagValue) => {
        this.setState(
            {
                tag: tagValue
            }
        )

    }

    render(){
        const navigation = this.props.navigation;
        return(
            <Container style={{backgroundColor:"#FFF8F1"}}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-left' type='Feather' style={styles.headerIcon} />
                        </Button>
                    </Left>
                    <Body>
                        
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='share' type='Feather' style={styles.headerIcon} />
                        </Button>
                        <Button transparent>
                        <Icon name='heart' type='Feather' style={styles.headerIcon} />
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content} >
                    
                    <Text style={{color:"#051861", fontSize:26, fontWeight:"bold",marginBottom:15}}>{store.name}</Text>
                    <Text style={{color:"#051861",fontSize:15,flexDirection:"row",marginBottom:3}}>
                        <Icon name="star" type="Ionicons" style={styles.rate_star}/>
                        {'\u00A0'}
                        {store.rate} {'('}{store.sales}{' reviews)  ·  '}
                        <Icon name="clock" type="Feather" style={{fontSize:15,color:"#051861"}}/>
                            {` ${store.open} - ${store.close}`}
                    </Text>
                    <Text
                        style={{color:"#051861",fontSize:13, opacity:0.5, flexDirection:"row",marginBottom:25}}
                    >
                        {`Environment: ${store.env}    Service: ${store.service}    Price: ${store.price}`}
                    </Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        {
                            store.pics.map((item) => 
                            <Image source={{uri:item}} style={{borderRadius:5,width:75,height:75}} />
                            )
                        }
                    </View>

                    <View style={{
                                    flexDirection:"row",
                                    flex:1,
                                    marginVertical:25
                                }}>
                        <Icon name="map-pin" type="Feather" style={{fontSize:18,color:"#051861"}}/>
                        <Text numberOfLines={2} style={{paddingLeft:8,flex:1,color:"#051861",fontSize:14}}>
                            
                            {store.address}
                        </Text>
                        <Button transparent vertical style={{width:"25%",marginLeft:10}}>
                            <Icon name="navigation" type="Feather" style={{flex:1,color:"#051861",fontSize:20}}/>
                        </Button>
                    </View>


                    <FlatList
                        data={tagList}
                        renderItem={({item}) => 
                            <Button 
                                transparent 
                                vertical 
                                style={styles.tags} 
                                key={item.id}
                                onPress= {() => this.onTabChange(item.id)}
                            >
                                <Text style={styles.tagsText}>{item.name}</Text>
                                <View style={item.id === this.state.tag ? styles.activeLine : styles.tagsLine}></View>
                            </Button>
                        
                        }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <View style={{paddingVertical:20}}>
                        {
                            (() => {
                                switch (this.state.tag) {
                                    case 1:
                                        return <StoresBookings bookings={store.bookings} />;
                                    case 2:
                                        return <StoresReviews reviews={storeReviewsData} />;
                                    case 3:
                                        return (
                                            <View style={{paddingHorizontal:10}}>
                                                <Text style={{color:"#051861", fontSize:18, fontWeight:"bold",marginBottom:15}}>
                                                    Introduction
                                                </Text>
                                                <Text style={{color:"#051861", fontSize:14,marginBottom:17}}>
{`A.A. Nail Salon is located in the bustling business district

nice environment


Technical staff has more than 5 years of nail art experience

All products have quality and safety certificates

Can be used safely by pregnant women and the elderly

8 manicurists are waiting for your appointment!`}
                                                </Text>
                                                <Text style={{color:"#FF6D6D", fontSize:18, fontWeight:"bold",marginBottom:15}}>
                                                    Highlights
                                                </Text>
                                                <Text style={{color:"#051861", fontSize:14,marginBottom:17}}>
                                                    Nail polish are imported from Japan, non-toxic and healthy, and provide free nail polish removal services (requires our store consumption records)
                                                </Text>
                                            </View>
                                            )
                                }
                            })()
                        }
                        
                        
                    </View>
                    


                </Content>




                <Footer style={{backgroundColor:"#FFFFFF",overflow:"hidden",paddingHorizontal:20,height:"12%",borderTopLeftRadius:20,borderTopRightRadius:20}}>
                    <Left style={{justifyContent:"flex-start"}}>
                        <Text style={{flex:1,color:"#051861",fontSize:16,paddingTop:"10%"}}>
                            <Icon name="calendar" type="Feather" style={{fontSize:18,color:"#051861"}}/>
                            {`  Available ${store.available}`}
                        </Text>
                        <Text style={{paddingBottom:"12%",color:"#051861",fontSize:14,opacity:0.6}}>
                            {`check dates`} <Icon type="Feather" name="chevron-right" style={{color:"#051861",fontSize:14}}/>
                        </Text>
                    </Left>
                    <Right>
                        <Button style={{backgroundColor:"#FF6D6D",width:"100%",borderRadius:10,justifyContent:"center",paddingLeft:15}}>
                            
                            <Text style={{color:"#FFFFFF",fontSize:16,fontWeight:"bold"}}>Contact</Text>
                            <Icon name="message-square" type="Feather" style={{fontSize:20,color:"#FFFFFF"}}/>
                        </Button>
                    </Right>
                </Footer>
            </Container>
        )
    }
}
const styles = StyleSheet.create(
    {
        header:{
            paddingTop:20,
            paddingLeft:8,
            paddingRight:8,
            backgroundColor:"#FFF8F1",
            elevation:0,
            
        },
        headerIcon:{
            color:"#051861"
        },
        content:{
            backgroundColor:"#FFF8F1",
            paddingHorizontal:20,
            paddingTop:20
        },
        rate_star: {
            fontSize: 18,
            color: "#FF6D6D"
        },
        tags:{
            paddingHorizontal:15,
            borderBottomWidth:0.4,
            borderBottomColor:"rgba(5,24,97,0.2)",
            borderRadius:0,
            paddingBottom:0,
            margin:0
        },
        tagsText:{
            color:"#051861",
            fontSize:14,
            marginBottom:10
        },
        activeLine:{
            backgroundColor:"#FF6D6D",
            width:"80%",
            height:3,
            
        },
        tagsLine:{
            backgroundColor:"transparent",
            width:"80%",
            height:3,
            
        }
    }
)


