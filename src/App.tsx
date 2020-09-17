import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import { IState, ISystemData } from './components/types/generic';
import StateGrid from './components/ui/StateGrid';
import Search from './components/ui/Search';
import Fuse from 'fuse.js';

const options: any = {
  caseSensitive: false,
  shouldSort: true,
  threshold: 0.5,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    {
      name: "state",
      weight: 0.95,
    },
    {
      name: "_id",
      weight: 0.65
    }
  ]
}

function App() {

  const [data, setData] = useState<ISystemData>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Array<IState> | null>(null);

  const fetchItems = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://covidnigeria.herokuapp.com/api`
    )
    const myData = response.data.data;
    setData(myData);
    setIsLoading(false);
  }

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const rows: any = data?.states;
    if(rows) {
      const fuse = new Fuse(rows, options);
      const results: any = fuse.search(value).map(result => result.item);
      setSearchResults(results);
    }
  }

  useEffect(() => {
    if(!data) {
      fetchItems()
    }
  }, [data])

  return (
    <div className="App">
      {
        data
        ?
        (
          <React.Fragment>
            <Header isLoading={isLoading} data={data} />
            <Search
              state={data}
              handleSearch={handleSearch}
              value={searchValue}
            />
            {
              searchValue && searchValue.length > 0
              ?
              (
                searchResults
                ?
                  searchResults.length > 0
                  ?
                  (
                    <StateGrid isLoading={isLoading} data={searchResults} />
                  )
                  :
                  (
                    <div style={{width: '100%', display:'flex', justifyContent: 'center'}}>
                      <p>{"No states to show. Change your search query to see states!"}</p>
                    </div>
                  )
                :
                  null
              )
              :
              (
                <StateGrid isLoading={isLoading} data={data.states} />
              )
              
            }
          </React.Fragment>
        )
        :
        (
          null
        )
      }
    </div>
  );
}

export default App;
