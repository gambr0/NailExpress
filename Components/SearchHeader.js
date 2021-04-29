import React from 'react';
import { StyleSheet} from 'react-native';



import {

  Header, 
  Item, 
  Input, 
  Icon, 
  Button, 
  Text, 

} from 'native-base';

export const SearchHeader = () => 
    <Header transparent searchBar rounded style={{marginTop:-10, paddingLeft:30, paddingRight:30, height:100, backgroundColor:"#FFF8F1"}}>
        <Item style={styles.searchbar}>
        <Icon name="ios-search" style={{color: "#051861"}} />
        <Input placeholder="Search" style={{color: "#051861"}} />
        </Item>
        <Button transparent>
        <Text>Search</Text>
        </Button>
    </Header>

const styles = StyleSheet.create({
    searchbar:{
      backgroundColor:"#FFFFFF",
      height:"65%",
      padding:10,
      borderRadius:10,
      elevation:5
    }
})