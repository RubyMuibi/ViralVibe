import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Stack} from "expo-router";

import Header from "../components/Header/Header";

function VibePage() {
    return (
        <View style = {styles.container} >
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : { backgroundColor: "#000000", flex: 1}
    
})

export default VibePage;