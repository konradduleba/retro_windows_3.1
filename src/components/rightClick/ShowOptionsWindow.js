import React from 'react'
import BarOptionsWindow from './BarOptionsWindow'
import AppOptionsWindow from './AppOptionsWindow'

export default function ShowOptionsWindow(props) {

    const { optionsType } = props.properties;

    if (optionsType === 'bar') return <BarOptionsWindow  {...props} />
    else if (optionsType === 'app') return <AppOptionsWindow {...props} />
}