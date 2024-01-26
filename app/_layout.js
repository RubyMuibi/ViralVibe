import { StyleSheet } from "react-native";
import { Stack } from "expo-router/stack";

function Layout() {
    return(
    <Stack screenOptions={{ headerStyle: styles.screenStyles.headerStyle, headerShown: true } } >
        <Stack.Screen name="vibe" options={{ headerTitle: "ViralVibe", title: "Vibe", headerTintColor: '#ffffff',           headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
    </Stack>
    )
}

const styles = StyleSheet.create({
    screenStyles : { headerStyle: {backgroundColor: "#000000"},  }

})




export default Layout;
