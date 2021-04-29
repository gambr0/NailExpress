import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    List, 
    ListItem,
    Left,

    Body,
    Thumbnail,
    Text,
    Icon,

} from 'native-base';
import { useNavigation } from '@react-navigation/native'


const StoresBookings = ( { bookings } ) => {
    const navigation = useNavigation();
    const payPage = 'Pay'
    return(
        <List style={{marginHorizontal:-5}}>
          { 
            bookings.map((item) => 
              <ListItem 
                thumbnail 
                key={item.id} 
                style={{backgroundColor:"#FFFFFF",marginRight:20, borderRadius:5,marginBottom:15,elevation:2}}
                onPress={() => navigation.navigate(payPage)}
              >
                <Left>
                  <Thumbnail square source={{ uri: item.pic }} style={{width:100,height:100,borderTopLeftRadius:5, borderBottomLeftRadius:5}} />
                </Left>
                <Body style={{marginLeft:10,borderColor:"transparent",width:190,height:100,bottom:"5%"}}>
                  <View style={{flexDirection:"row",justifyContent:"space-between", alignContent:"center"}}>
                    <Text numberOfLines={2} style={{color:"#051861",fontWeight:"bold"}}>{item.title} 
                    </Text>
                   
                  </View>
                  <Text numberOfLines={1} style={{color:"#051861",fontSize:13,opacity:0.8}}>
                    <Icon name="users" type="Feather" style={styles.icon}/>
                      {` ${item.booked} booked`}
                  </Text>
                  <Text note numberOfLines={1} style={{color:"#051861",fontSize:13,opacity:0.8}}>
                  {`$ ${item.price}`}
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
        icon: {
            fontSize: 15,
            color: "#FF6D6D"
        }
    }
)

export { StoresBookings };