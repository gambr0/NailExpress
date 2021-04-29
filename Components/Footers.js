import React from 'react';

import {

  Icon, 
  Button, 
  Text, 

  FooterTab
} from 'native-base';

import { StyleSheet } from 'react-native';


import footerBtns from '../app_data/footerBtns.json'

export const Footers = ({ state, navigation }) => {

    return (
        <FooterTab style={styles.footer}>
            {
              footerBtns.footer_btn.map((item) => {
                let toActivate = item.id === state.index+1 ? true : false;
                return (
                    <Button

                        vertical
                        key={item.id}
                        onPress={() => navigation.navigate(item.name)}
                    >
                        <Icon
                            style={ toActivate ? {color:"#FF6D6D"} : {color:"#051861"}} 
                            name={item.btn_icon}
                            type={item.icon_type}
                        />
                        <Text style={ toActivate ? {color:"#FF6D6D"} : {color:"#051861"}}>{item.name}</Text>
                    </Button>
                )
              }) 
            }
        </FooterTab>
    )

}

const styles = StyleSheet.create({
    footer:{
        backgroundColor:"#ffffff",

    },


})