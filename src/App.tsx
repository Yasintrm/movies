import './App.css'
import horrorJson from "../data/horror.json";
import sciFiJson from "../data/sci-fi.json";
import { MovieItem } from './types';
import { useMemo, useState } from 'react';
import RatingList from './features/RatingList';
import { Tab } from './components/tab/Tab';

function buildList(obj: Record<string, MovieItem[]>) {
  return Object.values(obj).reduce((arr, movieArr) => {
    arr.push(...movieArr);
    return arr;
  }, [] as MovieItem[]);
}

function App() {
  const horrorMovieList = useMemo(() => buildList(horrorJson), []);
  const sciFiMovieList = useMemo(() => buildList(sciFiJson), []);
  const [type, setType] = useState("horror");

  return (
    <div className="App">
      <Tab selectedTab={type}>
        <Tab.Item value='horror' onClick={() => setType("horror")}>
          <Tab.Item.Title>Horror</Tab.Item.Title>
          <Tab.Item.Body>
            <RatingList list={horrorMovieList}></RatingList>
          </Tab.Item.Body>

        </Tab.Item>

        <Tab.Item value='scifi' onClick={() => setType("scifi")}>
          <Tab.Item.Title>Sci-Fi</Tab.Item.Title>
          <Tab.Item.Body>
            <RatingList list={sciFiMovieList}></RatingList>
          </Tab.Item.Body>

        </Tab.Item>

      </Tab>

    </div>
  )
}

export default App
