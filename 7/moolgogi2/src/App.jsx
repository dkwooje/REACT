import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';


function App() {
  const selectedPlace = useRef();

  
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();


  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=>{
    async function fetchPlaces() {
      setIsFetching(true);
      try{
     const Places = await fetchUserPlaces();
     setUserPlaces(places);
    }catch(error){
      setError({message: error.message || '사용자 선택 장소 목록을 불러오는데 실패'});
    }
    setIsFetching(false);
    }
    fetchPlaces();
  },[])
 

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces]
    }); 

  try{
   await updateUserPlaces([selectedPlace, ...userPlaces]);
    }catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error.message || '업데이트를 실패하였습니다.'});
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try{
   await updateUserPlaces(userPlaces.filter(place => place.id !== selectedPlace.current.id))
    }catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({ message : error.message || '장소 삭제 시도를 실패했습니다.' });
    }
    setModalIsOpen(false);
  }, [userPlaces]);

function handleError(){
  setErrorUpdatingPlaces(null);
}

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
       {errorUpdatingPlaces && <ErrorPage title="에러 발생" 
        message={errorUpdatingPlaces.message} 
        onConfirm={handleError} />}
      </Modal>
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
        {error && <ErrorPage title="에러 발생" message={error.message}></ErrorPage>
        {!error && Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isFetching}
          loadingText="장소를 불러 오는 중입니다....."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}
        
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
