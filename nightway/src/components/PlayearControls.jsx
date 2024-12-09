import {  Text, TouchableOpacity } from "react-native"
import { iconSizes } from "../constants/dimensions"
import { colors } from "../constants/colors"

import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { View } from "react-native-reanimated/lib/typescript/Animated"



 export const GotoPreviousButton = ({size=iconSizes.lg}) => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"backward-step"} size={iconSizes.md}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}


export const PlayPauseButtton = ({size=iconSizes.lg}) => {

    const isPlaying=true
    return (
        <TouchableOpacity activeOpacity={0.85}>

            <FontAwesome6 name={isPlaying ? "pause" : "play"} size={iconSizes.lg} color={colors.iconPrimary} />
           

        </TouchableOpacity>
    )
}




export const GotoNextButton = ({size=iconSizes.lg}) => {
    return (
        <TouchableOpacity activeOpacity={0.85}>
            <FontAwesome6 name={"forward-step"} size={iconSizes.md}  color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}


