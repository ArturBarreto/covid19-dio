import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board.jsx'
import { ContainerStyled } from './style'

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className ="md-2">

            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)