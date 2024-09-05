import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);

  //위치를 가져오는 코드 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const sortedPlaces = sortPlacesByDistance
      (AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );   //USeEffect: 1번 -> 속한 컴포넌트의 랜더링이 완료된 이후 

      setAvailablePlaces(sortedPlaces);   
  });  //리턴 X
  }, []); //실행 => 

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

function handleSelectPlace(id) {
  setPickedPlaces((prevPickedPlaces) => {
    if (prevPickedPlaces.some((place) => place.id === id)) {
      return prevPickedPlaces;
    }
    const place = AVAILABLE_PLACES.find((place) => place.id === id);
    return [place, ...prevPickedPlaces];
  });

  const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || []; 
  if (storedIds.indexOf(id) === -1) {
    localStorage.setItem('selectedPlace', JSON.stringify([id, ...storedIds]));
  }
}
  

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);  //이게 없으면 타이머는 무한 루프에 빠진다.

    const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || [] ;
    localStorage.setItem('selectedPlace', 
      JSON.stringify(storedIds.filter((id)=>id != selectedPlace.current))
    );
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          fallbackText={'아직 장소를 읽어 오는 중입니다......'}
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
