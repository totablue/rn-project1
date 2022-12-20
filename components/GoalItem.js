import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ text, id, onDeleteItem }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#32056d" }}
                onPress={onDeleteItem.bind(this, id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: "#5e08cc",
        // Styles don't cascade like in CSS: color property set to parent doesn't affect child element
        // color: "#fff",
        margin: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },

    goalText: {
        color: "#fff",
        padding: 8,
    },
});
