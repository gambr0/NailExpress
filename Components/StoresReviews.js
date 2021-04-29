import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import {

    Left,

    Body,
    Thumbnail,
    Text,
    Icon,

} from 'native-base';

const renderStar = (isRed) => {
    const color = isRed >= 0 ?  "#FF6D6D" : "rgba(255,109,109,0.2)";
    return(
        <Icon name="star" type="Ionicons" style={{color:color, fontSize:15}}/>
    )
    
}

const starCounter = [1,2,3,4,5] //rate - counter >=0 is red

export const StoresReviews = ({ reviews }) => {



    return(
        <View>
            {
                reviews.map((item) => 
                    <View style={{
                        marginHorizontal:10,
                        marginBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        paddingBottom:20
                    }}>
                        <View style={{flexDirection:"row",alignItems:"center", marginBottom:5}}>
                            <Thumbnail source={{uri: item.ava}} style={{width:45,height:45}} />
                            <Text style={{color:"#051861"}}>{`   ${item.user}`}</Text>
                        </View>

                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            {
                                starCounter.map((counter) => renderStar(item.rate - counter))
                            }
                            <Text style={{color:"#051861", fontSize:14}}>{`  ·  ${item.date}`}</Text>
                        </View>

                        <View style={{marginBottom:10}}>
                            <Text style={{color:"#051861", fontSize:12, opacity:0.7}}>{`Review for : ${item.reviewFor}`}</Text>
                        </View>
                        <View>
                            <Text style={{color:"#051861", fontSize:15}}>{`${item.content}`}</Text>
                        </View>
                        <View style={{flexDirection:"row", marginTop: 10}}>
                            {
                                item.pics.map((pic) => 
                                    <Image 
                                        source={{uri: pic}} 
                                        style={{
                                            width:100, 
                                            height:100, 
                                            borderRadius: 5, 
                                            overflow:"hidden",
                                            marginRight: 10
                                        }} 
                                    />
                                )
                            }
                        </View>       
                    </View>
                )
            }
        </View>
    )
}