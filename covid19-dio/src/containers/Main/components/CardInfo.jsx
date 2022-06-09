import React, {memo} from "react"
import {Card} from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style'

function CardInfo({value, label, color}){
    return (
        <Card>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </Card>
    )
}

export default memo(CardInfo)