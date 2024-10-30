import { TouchableOpacity } from "react-native"
import { iconSizes } from "../constants/dimensions"
import { colors } from "../constants/colors"

import FontAwesome6 from "react-native-vector-icons/FontAwesome6"



 export const GotoPreviousButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"backward-step"} size={iconSizes.md}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}


export const PlayPauseButtton = () => {

    const isPlaying=true
    return (
        <TouchableOpacity activeOpacity={0.85}>

            <FontAwesome6 name={isPlaying?"pause":"play"} size={iconSizes.lg} color={colors.iconPrimary } />

        </TouchableOpacity>
    )
}




export const GotoNextButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"forward-step"} size={iconSizes.md}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}


export const GotoNextButton1 = () => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"forward-step"} size={iconSizes.md}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}