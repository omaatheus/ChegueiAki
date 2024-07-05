import { View, Text, TouchableOpacity } from "react-native";
import { participantStyles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant(props: Props) {
    return (
        <View style={participantStyles.container}>
            <Text style={participantStyles.name}>{props.name}</Text>

            <TouchableOpacity style={participantStyles.button} onPress={props.onRemove}>
                <Text style={participantStyles.buttonText}>-</Text>
            </TouchableOpacity>

        </View>
    );
}