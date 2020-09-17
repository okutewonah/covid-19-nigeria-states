import React from 'react';
import logo from '../../assets/images/logo.png';
import { ISystemData } from '../types/generic';
import Loading from './Loading';

interface Props {
    data: ISystemData;
    isLoading: boolean;
}

const Header: React.FC<Props> = (props) => {
    const totalItems: {heading: string, tValue: number | string}[] = [
        {
            heading: 'Total Samples Tested',
            tValue: (props.data.totalSamplesTested)
        },
        {
            heading: 'Total Confirmed Cases',
            tValue: (props.data.totalConfirmedCases)
        },
        {
            heading: 'Total Active Cases',
            tValue: (props.data.totalActiveCases)
        },
        {
            heading: 'Total Discharged',
            tValue: (props.data.discharged)
        },
        {
            heading: 'Total Death',
            tValue: (props.data.death)
        }
    ]
    return props.isLoading ? (
        <Loading />
    ) : (
        <header>
            <img src={logo} alt='' />
            <h1>NIGERIA COVID-19 UPDATE</h1>
            <table>
                <tbody>
                    { totalItems.map((totalItems, index) => (
                        <tr key={Math.random()}>
                            <td>{ totalItems.heading }</td>
                        <td>{ totalItems.tValue }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </header>
    )
}

export default Header
