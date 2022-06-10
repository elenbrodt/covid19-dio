import React, {memo, useCallback, useState, useEffect} from 'react'
import Api from '../../Api'
import Board from './components/Board'
import Panel from'./components/Panel'
import Footer from './components/Footer'
import { ContainerStyled, PainelStyled, BoardStyled, FooterStyled} from './style'


function Main() {

    const [data,setData]= useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) =>{ Api.getCountry(country).then(data => setData(data))
    }, [])

    useEffect(() =>{
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange=({target}) =>{
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <PainelStyled>
                <div className="mb-2" >
                    <Panel
                        data={data}
                        onChange={handleChange}
                        country={country}
                        getCovidData={getCovidData}
                    />
                </div>
            </PainelStyled>
            <BoardStyled>
                <div className='mb-2'>
                    <Board data={data}/>
                </div>
            </BoardStyled>
            <FooterStyled>
                <div className='mb-2'>
                    <Footer updateAt={updateAt}/>
                </div>
            </FooterStyled>
        </ContainerStyled>
    )
}

export default memo(Main)