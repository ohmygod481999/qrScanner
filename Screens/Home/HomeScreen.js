import React from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Image
                source={{
                    uri:
                        "https://static.foodizzi.com/images/2020/2/15/2002155002_IZZICMSFavicon01.png",
                }}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
            <Text
                style={{
                    paddingVertical: 15,
                    fontSize: 40,
                }}
            >
                QR Scanner
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Qr Scanner")}
                style={styles.button}
            >
                <Text style={styles.textButton}>Go to Scanner</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Setting")}
                style={styles.button}
            >
                <Text style={styles.textButton}>Setting</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        backgroundColor: "#589be7",
        padding: 5,
        borderRadius: 4,
    },
    textButton: {
        color: "white",
        fontSize: 20
    },
});

export default HomeScreen;
