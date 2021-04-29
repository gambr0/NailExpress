import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    List, 
    ListItem,
    Left,

    Body,
    Thumbnail,
    Text,
    Icon,

} from 'native-base';


const Stores = ( { stores } ) => {
    const navigation = useNavigation();
    const detailsPage = 'Details';
    return(
        <List style={{marginHorizontal:-20}}>
          { 
            stores.map((item) => 
              <ListItem 
                thumbnail 
                key={item.id} 
                style={{backgroundColor:"#FFFFFF",marginRight:20, borderRadius:5,marginBottom:10,elevation:4}}
                onPress={() => navigation.navigate(detailsPage)}
              >
                <Left>
                  <Thumbnail square source={{ uri: item.pic }} style={{width:100,height:100,borderTopLeftRadius:5, borderBottomLeftRadius:5}} />
                </Left>
                <Body style={{marginLeft:10,borderColor:"transparent",width:190,height:100,bottom:"5%"}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between", alignContent:"center"}}>
                    <Text style={{color:"#051861",fontWeight:"bold"}}>{item.name} 
                    </Text>
                    <Icon name="heart" type="Feather" style={{fontSize: 15,color: "#FF6D6D",marginRight:5}} />
                  </View>
                  <Text numberOfLines={1} style={{color:"#051861",fontSize:13,opacity:0.8}}>
                    <Icon name="star" type="Ionicons" style={styles.rate_star}/>
                    {'\u00A0'}
                      {item.rate} {'('}{item.sales}{' reviews) '}
                  </Text>
                  <Text note numberOfLines={1} style={{color:"#051861",fontSize:13,opacity:0.8}}>
                    {item.distance}km
                  </Text>
                  <Text note numberOfLines={1} style={{color:"#051861",fontSize:12,paddingTop:12,opacity:0.8}}>
                    Available {item.available}
                  </Text>
                </Body>

              </ListItem>
            )
          }
        </List> 
    )
}

const styles = StyleSheet.create(
    {
        rate_star: {
            fontSize: 15,
            color: "#FF6D6D"
        }
    }
)

export { Stores };