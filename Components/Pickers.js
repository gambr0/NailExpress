import React from "react";
import { Picker } from "native-base";
import { View, Text, StyleSheet } from 'react-native';


export const Pickers = ({ distance_selected, order_selected, distanceChange, orderChange }) => {
    return(
            <View style={styles.row}>
                <Text style={styles.texts}>距离</Text>
                <Picker 
                    mode="dropdown"
                    selectedValue={distance_selected}
                    onValueChange={distanceChange}
                    style={styles.pickers}
                >
                    <Picker.Item label="500m" value="500m" />
                    <Picker.Item label="1km" value="1km" />
                    <Picker.Item label="1.5km" value="1.5km" />
                    <Picker.Item label="3km" value="3km" />
                    <Picker.Item label="5km" value="5km" />
                </Picker>
                <Text style={styles.texts}>排序</Text>
                <Picker 
                    mode="dropdown"
                    selectedValue={order_selected}
                    onValueChange={orderChange}
                    style={styles.pickers}
                >
                    <Picker.Item label="评分" value="评分" />
                    <Picker.Item label="销量" value="销量" />
                </Picker>
            </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    pickers:{
        flex:1
    },
    texts:{
        flex:1,
        padding:10
        
    }
})

