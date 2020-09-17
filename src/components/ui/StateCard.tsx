import React from 'react';
import { IState } from '../types/generic';

interface Props {
    state: IState;
}

const StateCard:React.FC<Props> = (props) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <h1>{props.state.state}</h1>
                <ul>
                    <li><b>Confirmed Cases: </b> { props.state.confirmedCases }</li>
                    <li><b>Receiving Treatment: </b> { props.state.casesOnAdmission } </li>
                    <li><b>Discharged: </b> {props.state.discharged } </li>
                    <li><b>Deaths: </b> {props.state.death } </li>
                </ul>
            </div>
        </div>
    )
};

export default StateCard
