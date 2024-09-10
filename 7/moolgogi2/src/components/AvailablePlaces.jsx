import { useState, useEffect } from 'react';
//import ErrorPage form './Error.jsx';
import Place from './Places.jsx';
import Places from './Places.jsx';
import {sortPlacesByDistance} from '../http.js';
import { fetchAvailablePlaces } from '../http.js';


export default function AvailablePlaces({ onSelectPlace }) {

  const [isFetching, setIsFetching] = useState(false);
  const [AvailablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

useEffect(() -> {
  async function fetchPlaces() {
    setIsFetching(true);
    
  }



}

)

  return (
    <Places
      title="Available Places"
      places={[AvailablePlaces]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
