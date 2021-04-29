import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, FlatList } from 'react-native';
import {
  Icon, 
  Button, 
  Text,
  Container,
  Content
} from 'native-base';

import { SearchHeader } from '../Components/SearchHeader'

import { Stores } from '../Components/Stores';
import upBtns from '../app_data/upBtns.json';

import data from '../data.json';




export class Explore extends Component {
    /*constructor(props){
        super(props);
        this.state = {
            distance_selected: '500m',
            order_selected: '评分'
        }
      }
    
      distanceChange(value){
        this.setState({
          distance_selected: value
        });
      }
      
      orderChange(value){
        this.setState({
          order_selected: value
        });
    }*/

    
    render(){
        const navigation = this.props.navigation
        return (
          <Container>
            <SearchHeader />
            <Content>
              <View style={{backgroundColor:"#FFF8F1", paddingHorizontal:30, paddingTop:20}}>
                {/* 一个Swiper 
                <View style={styles.container}>
                    <Swiper style={styles.wrapper}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                    </Swiper>
                </View>
                */}
                <View>
                  <Text style={{color:"#051861", fontSize:22, fontWeight:"bold",marginBottom:5}}>Try AR Nails</Text>
                  <Text style={{color:"#051861", fontSize:13,marginBottom:20,alignSelf:"center", opacity:0.7}}>
                    Find the nail art that fits you the best simply through your phone camera
                  </Text>
                </View>
                <ImageBackground source={{uri:"https://nailexpress.oss-accelerate.aliyuncs.com/multicolored-abstract-painting-1095624.jpg"}} style={styles.banner}>
                
                  
                  <Button style={styles.arBtn} onPress={() => navigation.navigate('ArNail')}>
                    <Text style={{color:"#FF6D6D"}}>AR NAILS</Text><Icon name="camera" type="Feather" style={{color:"#FF6D6D"}}></Icon>
                  </Button>
                </ImageBackground>
                <View>
                  <Text style={{color:"#051861", fontSize:20, fontWeight:"bold",marginTop:20}}>More than booking a nail salon</Text>
                </View>
                {/* 四个小按钮 */}
                
                <FlatList style={styles.buttons}
                    data={upBtns.lil_btn}
                    renderItem={({item}) => 
                      <View key={item.id}>
                          
                          <Button style={styles.lil_btn}> 
                          <Image source={{uri:item.pic}} style={{borderTopLeftRadius:5,borderTopRightRadius:5,width:"100%",height:70}} />
                          <Text uppercase={false} style={{color:"#051861",fontSize:12,bottom:"13%",alignSelf:"flex-start",left:-8}}>
                              {item.name}
                          </Text>
                          </Button>

                      </View>
                    }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={styles.salonsWrap}>
                    <Text style={{color:"#051861", fontSize:20, fontWeight:"bold",marginBottom:20,marginTop:10}}>Most recommended salons</Text>
                    { /* 距离和排序pickers 
                    <View>
                        <Pickers
                        distance_selected={this.state.distance_selected} 
                        order_selected={this.state.order_selected}       
                        distanceChange={this.distanceChange.bind(this)}  
                        orderChange={this.orderChange.bind(this)}        
                        /> 
                    </View>
                    */}

                    <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",marginHorizontal:-16,marginBottom:10}}>
                      <Button transparent >
                        <Text style={{color:"#051861"}}>Distance</Text><Icon style={{color:"#FF6D6D", fontSize:16}} name="chevron-down" type="Feather"></Icon>
                      </Button >
                      <Button transparent>
                        <Text style={{color:"#051861"}}>Ranking</Text><Icon style={{color:"#FF6D6D", fontSize:16}} name="chevron-down" type="Feather"></Icon>
                      </Button>
                    </View>

                    {/* 店铺列表 */}
                    <View>
                        <Stores stores={data.stores}/>
                    </View>
                    </View>
              </View>
            </Content>
          </ Container>

        )
        
    }
}

const styles = StyleSheet.create({
    banner:{
      justifyContent:"center",
      width:"100%", 
      height:150, 
      borderRadius:10,
      overflow:"hidden"
      
    },
    arBtn:{
      alignSelf:"center",
      height:50,
      width:"60%",
      backgroundColor:"#FFFFFF",
      borderRadius:10,
    },
    buttons:{
      marginHorizontal:-30,
      paddingLeft:25,
      
    },
    lil_btn: {
      flex:1,
      flexDirection:"column",
      borderColor:"transparent",
      width: 110,
      height: 110,
      borderRadius:5,
      backgroundColor:"#FFFFFF",
      elevation:4,
      marginHorizontal:5,
      paddingTop:0,
      marginVertical:20  
    },


})