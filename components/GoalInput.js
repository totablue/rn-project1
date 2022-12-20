import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const onAddGoal = () => {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={goalInputHandler}
                placeholder="Your course goal!"
                value={enteredGoalText}
            />
            <Button onPress={onAddGoal} title="Add Goal" />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 24,
        marginBottom: 24,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
        padding: 8,
        width: "70%",
    },
});
