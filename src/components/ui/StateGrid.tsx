import React from 'react';
import StateCard from './StateCard';
import { IState } from '../types/generic';
import Loading from './Loading';

interface Props {
    data: IState[];
    isLoading: boolean;
}

const StateGrid:React.FC<Props> = (props) => {
    return props.isLoading ? (
        <Loading />
    ) : (
        <div className='card-container'>
            {
                props.data
                ?
                (
                    props.data.length > 0
                    ?
                    (
                        props.data.map(state => {
                            return <StateCard state={state} key={state._id} />
                        })
                    )
                    :
                    (
                        null
                    )
                )
                :
                (
                    null
                )
            }
        </div>
    )
}

export default StateGrid
