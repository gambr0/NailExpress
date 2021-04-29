import React, { Component } from 'react';
import { StatusBar, Image, Dimensions, View, Text, StyleSheet, Platform } from 'react-native';
import { 
    Container, 
    Content,
     Button, 
     Header, 
     Icon,
     Left,
     Body,
     Right,
     Footer,
     Switch,
     Radio
} from 'native-base';
import DateTimePickerModal from "react-native-modal-datetime-picker";

//hardcoded
export class Pay extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            show: false,
            mode: 'date',
            isUseCredits: false,
            isSelected: 1
        }
    }

    setDate = (newDate) => {
        this.setState({
            date: newDate
        })
    }

    setShow = (newShow) => {
        this.setState({
            show: newShow
        })
    }

    setMode = (newMode) => {
        this.setState({
            mode: newMode
        })
    }
    showDate = () => {
        this.setMode('date')
        this.setShow(true)
    }
    showTime = () => {
        this.setMode('time')
        this.setShow(true)
    }

    onConfirm = (selectedDate) => {
        const currentDate = selectedDate
        this.setShow(false);
        this.setDate(currentDate);
        
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

                    </Right>
                </Header>
                <Content style={styles.content} >
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between",
                        alignItems:"center",
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        paddingBottom:20,
                        marginBottom:20
                    }}>
                        <View>
                            <Text style={{color:"#051861", fontSize:18, marginBottom:10, fontWeight:"bold"}}>
                                Valentine Nail service
                            </Text>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{color:"#051861", fontSize:15}}>
                                    {`$ 150  ·  `}
                                </Text>
                                <Text style={{color: "#FF6D6D", fontSize:15}}>
                                <Icon name="check-circle" type="Feather" style={{fontSize:14, color: "#FF6D6D"}}></Icon> Refundable
                                </Text>
                            </View>
                        </View>
                        <Image 
                            source={{uri: "https://xxx.oss-accelerate.aliyuncs.com/xxx"}}
                            style={{width:100, height:75, borderRadius:5}}
                        ></Image>
                    </View>

                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        
                    }}>
                        <View style={{flexDirection:"column",alignItems:"center"}}>
                            <Text style={{color: "#051861", fontSize:15,fontWeight:"bold"}}>select date</Text>
                            <Button transparent onPress={this.showDate}>
                                <Text style={{color: "#FF6D6D", fontSize:20}}>{this.state.date.toString().substr(4,6)}</Text>
                            </Button>
                        </View>
                        <View style={{flexDirection:"column",alignItems:"center"}}>
                            <Text style={{color: "#051861", fontSize:15,fontWeight:"bold"}}>select time</Text>
                            <Button transparent onPress={this.showTime}>
                                <Text style={{color: "#FF6D6D", fontSize:20}}>{this.state.date.toString().substr(15,6)}</Text>
                            </Button>
                        </View>
                        <View style={{flexDirection:"column",alignItems:"center"}}>
                            <Text style={{color: "#051861", fontSize:15,fontWeight:"bold"}}>amount</Text>
                            <Button transparent>
                                <Text style={{color: "#FF6D6D", fontSize:20}}>1</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={{
                        paddingTop:20,
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20}}
                    >
                        <Text style={{color: "#051861", fontSize:16}}>Use credits · 200 left</Text>
                        <Switch onValueChange={() => this.setState({isUseCredits: !this.state.isUseCredits})}
                            value={this.state.isUseCredits}
                        ></Switch>
                    </View>
                        
                    <View>
                        <DateTimePickerModal
                            date={this.state.date}
                            isVisible={this.state.show}
                            mode={this.state.mode}
                            onConfirm={this.onConfirm}
                            onCancel={() => this.setShow(false)}
                            display="spinner"
                        />

                    </View>
                    <Text style={{color: "#051861", fontSize:18, fontWeight: "bold",marginBottom:30}}>
                        Payment methods
                    </Text>
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20,
                        marginHorizontal:10
                    
                    }}
                    
                    >
                        
                        <Text style={{color: "#051861", fontSize:16}}>
                            <Icon name="creditcard" type="AntDesign" style={{color: "#051861", fontSize:25}}></Icon>
                            {`    Credit card`}
                        </Text>
                        <Radio
                            color={"#FF6D6D"}
                            selectedColor={"#FF6D6D"}
                            selected={this.state.isSelected === 1}
                            onPress={() => this.setState({isSelected:1})}
                        >

                        </Radio>
                        
                    </View>
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20,
                        marginHorizontal:10
                    }}
                    >
                        
                        <Text style={{color: "#051861", fontSize:16}}>
                            <Icon name="alipay-circle" type="AntDesign" style={{color: "#051861", fontSize:25}}></Icon>
                            {`    Alipay`}
                        </Text>
                        <Radio
                            color={"#FF6D6D"}
                            selectedColor={"#FF6D6D"}
                            selected={this.state.isSelected === 2}
                            onPress={() => this.setState({isSelected:2})}
                        >

                        </Radio>
                        
                    </View>
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20,
                        marginHorizontal:10
                    }}
                    >
                        
                        <Text style={{color: "#051861", fontSize:16}}>
                            <Icon name="wechat" type="AntDesign" style={{color: "#051861", fontSize:25}}></Icon>
                            {`    Wechat`}
                        </Text>
                        <Radio
                            color={"#FF6D6D"}
                            selectedColor={"#FF6D6D"}
                            selected={this.state.isSelected === 3}
                            onPress={() => this.setState({isSelected:3})}
                        >

                        </Radio>
                        
                    </View>
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20,
                        marginHorizontal:10
                    }}
                    >
                        
                        <Text style={{color: "#051861", fontSize:16}}>
                            <Icon name="wallet" type="AntDesign" style={{color: "#051861", fontSize:25}}></Icon>
                            {`    FPS`}
                        </Text>
                        <Radio
                            color={"#FF6D6D"}
                            selectedColor={"#FF6D6D"}
                            selected={this.state.isSelected === 4}
                            onPress={() => this.setState({isSelected:4})}
                        >

                        </Radio>
                        
                    </View>
                    <View style={{
                        flexDirection:"row", 
                        justifyContent:"space-between", 
                        paddingBottom:20,
                        borderBottomWidth:0.4,
                        borderBottomColor:"rgba(5,24,97,0.2)",
                        marginBottom:20,
                        marginHorizontal:10
                    }}
                    >
                        
                        <Text style={{color: "#051861", fontSize:16}}>
                            <Icon name="smileo" type="AntDesign" style={{color: "#051861", fontSize:25}}></Icon>
                            {`    Payme`}
                        </Text>
                        <Radio
                            color={"#FF6D6D"}
                            selectedColor={"#FF6D6D"}
                            selected={this.state.isSelected === 5}
                            onPress={() => this.setState({isSelected:5})}
                        >

                        </Radio>
                        
                    </View>
                </Content>




                <Footer style={{backgroundColor:"#FFFFFF",overflow:"hidden",paddingHorizontal:20,height:"12%",borderTopLeftRadius:20,borderTopRightRadius:20}}>
                    <Left style={{justifyContent:"flex-start"}}>
                        <Text style={{flex:1,color:"#051861",fontSize:16,paddingTop:"10%"}}>
                            <Icon name="dollar-sign" type="Feather" style={{fontSize:18,color:"#051861"}}/>
                             150 in total
                        </Text>
                        <Text style={{paddingBottom:"12%",color:"#051861",fontSize:14,opacity:0.6}}>
                            {`term of service`} <Icon type="Feather" name="chevron-right" style={{color:"#051861",fontSize:14}}/>
                        </Text>
                    </Left>
                    <Right>
                        <Button style={{backgroundColor:"#FF6D6D",width:"100%",borderRadius:10,justifyContent:"center",paddingLeft:15}}>
                            
                            <Text style={{color:"#FFFFFF",fontSize:16,fontWeight:"bold"}}>Pay</Text>
                            <Icon name="check" type="Feather" style={{fontSize:20,color:"#FFFFFF"}}/>
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
            paddingHorizontal:30,
            paddingTop:20
        }
    }
)


