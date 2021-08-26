import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState(''); //keep text
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const inputHandlerChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
      console.log(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return results[0].show ? <ShowGrid data={results}/> : <ActorGrid data={results}/>;
    }
    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={inputHandlerChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="shows-search">
          
          <input
            type="radio"
            id="shows-search"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
          Shows
        </label>

        <label htmlFor="actors-search">
          
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
          Actors
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
