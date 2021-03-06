import React, {memo} from 'react'
//import RefreshIcon from '../../../assets/images/refresh.svg'
import {Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share

function Panel({ onChange, data, country}) {
    const { cases, recovered, deaths, todayCases, todayDeaths} = data

    const renderCountries = (country, index) =>(
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`}/>
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} Casos: ${cases} Recuperados: ${recovered} Mortes: ${deaths} Casos Hoje: ${todayCases} Mortes Hoje: ${todayDeaths} `

    const copyInfo=()=>{
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share ({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant='contained' color='primary' onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant='contained' color='primary' onClick={copyInfo}>
                Copiar
            </Button>
         </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <div>
                        <Typography variant="h5" component="span" color="primary">COVID19  </Typography>
                    </div>   
                    <div>
                        <Typography variant="h6" component="span" color="primary">Painel Coronavírus </Typography>
                    </div> 
                    <div>
                        <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                <div>
                    {navigatorHasShare ? renderCopyButton : renderShareButton }
                </div>
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)