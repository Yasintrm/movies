import './App.css'
import horrorJson from "../data/horror.json";
import sciFiJson from "../data/sci-fi.json";
import { MovieItem } from './types';
import { useMemo, useState } from 'react';
import RatingList from './features/RatingList';

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

  const selectedList = type === "horror" ? horrorMovieList : sciFiMovieList;

  return (
    <div className="App">
      <div>
        <input type={"radio"} onChange={() => setType("horror")} name="type" checked={type === "horror"} value="horror"/> Horror
        <input type={"radio"} onChange={() => setType("scifi")} name="type" checked={type === "scifi"} value="scifi"/> Sci Fi
      </div>
      <RatingList list={selectedList}></RatingList>
    </div>
  )
}

export default App
