import { StyleSheet } from "react-native";
import { Stack } from "expo-router/stack";

function Layout() {
    return(
    <Stack screenOptions={{ headerStyle: styles.screenOptions.headerStyle, headerShown: false } } >
        <Stack.Screen name="vibe" options={{ headerTitle: "", title: "Vibe"}} />
    </Stack>
    )
}

const styles = StyleSheet.create({
    screenOptions : { headerStyle: {backgroundColor: "#000000"},  }
})




export default Layout;
