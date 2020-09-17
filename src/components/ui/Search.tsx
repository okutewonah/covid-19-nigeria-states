import React from 'react';
import { ISystemData } from '../types/generic';

interface Props {
    value: any;
    state: ISystemData;
    handleSearch: (value: string) => void;
}

const Search:React.FC<Props> = (props) => {

    const onChange = (query: string) => {
        props.handleSearch(query);
    }

    return (
        <section className='search'>
            <form>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='Search state'
                    value={props.value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
