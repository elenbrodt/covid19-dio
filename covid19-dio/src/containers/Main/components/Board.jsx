import React, {memo} from "react";
//import PropTypes from 'prop-types'
import { Grid, Skeleton, Card } from '../../../components'
import CardInfo from './CardInfo'
import {CardBoardContentStyled} from './style'

function Board ({data}) {
    const { cases, todayCases, deaths, todayDeaths, recovered  } = data

    const getValue = (value) => value ? value : <Skeleton variant='text' width={182} height={35}>não atualizado</Skeleton>

    return(
        <Card>
            <CardBoardContentStyled>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <CardInfo value={getValue(cases)} label='Total de casos' color='#5d78ff'></CardInfo>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardInfo value={getValue(todayDeaths)} label='Óbitos hoje' color='#F7B829'></CardInfo>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardInfo value={getValue(todayCases)} label="Casos hoje" color='#000'></CardInfo>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardInfo value={getValue(deaths)} label='Total de mortos' color='#E95078'></CardInfo>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CardInfo value={getValue(recovered)} label='Total de recuperados' color='#67C887'></CardInfo>
                    </Grid>
                </Grid>
            </CardBoardContentStyled>
        </Card>
        
    )
}

export default memo(Board)