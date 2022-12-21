import { useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal,
    Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, onCancel, visible }) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const onAddGoal = () => {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/goal.png")}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    placeholder="Your course goal!"
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={onAddGoal}
                            title="Add Goal"
                            color="#b180f0"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onCancel}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: "#311b6b",
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    image: {
        height: 100,
        margin: 20,
        width: 100,
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: "#e4d0ff",
        borderColor: "#e4d0ff",
        borderRadius: 6,
        color: "#120438",
        padding: 16,
        width: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});
