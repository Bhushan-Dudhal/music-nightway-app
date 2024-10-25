import { TouchableOpacity } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { iconSizes } from "../constants/dimensions"
import { colors } from "../constants/colors"

 export const GotoPreviousButton = () => {
    return (
        <TouchableOpacity>
            <MaterialCommunityIcons name={"skip-previous-outline"} size={iconSizes.lg}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}