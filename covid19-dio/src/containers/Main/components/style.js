import styled from 'styled-components'
import {Typography, CardContent} from '../../../components/'

export const LabelStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1rem;
`
export const ValueStyled = styled(Typography)`
    font-weight: 400;
    font-size: 1.5rem;
`
export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({color})=> color || '#5d78ff'}
`
export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`
export const ItemStyled = styled.div`
    display:flex;
    justify-content: space-between;
    min-width: 150px;
`
export const CardBoardContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color:#DCDCDC;   
`
export const CardFootContentStyled =styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
    text-align: center;
`
