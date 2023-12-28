import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native";



function Header () {
    return (
        <View style={styles.viewContainer} >
         <Text style={styles.headerText} > ViralVibe </Text>
         <Image style={styles.headerIcon} source={require("../assets/icons/github-icon.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: { marginTop:50, flexDirection:"row", justifyContent:"space-between" },
    headerText: { color:"white", fontWeight:"bold", fontSize:18 },
    headerIcon: { width:20, height:20, marginRight:10 },
})

export default Header;