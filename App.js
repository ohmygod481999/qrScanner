import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/Home/HomeScreen";
import ScanScreen from "./Screens/Scanner/ScanScreen";
import SettingScreen from "./Screens/Setting/SettingScreen";
import CustomScreen from "./Screens/Custom/CustomScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Qr Scanner" component={ScanScreen} />
                <Drawer.Screen name="Setting" component={SettingScreen} />
                {/* <Drawer.Screen name="Custom" component={CustomScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
