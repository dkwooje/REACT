export async function fetchAvailablePlaces(){

    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if(!response.ok){
        throw new Error("데이터를 가져 오는 중 문제 발생");
    }
    return resData.places;
}

export async function fetchUserPlaces(){

    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();

    if(!response.ok){
        throw new Error("사용자가 추가한 장소 목록을 가져오는데 실패하였습니다.");
    }
    return resData.places;
}


export async function updateUserPlaces(places) {
   const response = await fetch("http://localhost:3000/user-places",{
        method:'PUT',
        body:JSON.stringify({places}),
        headers:{
            'Content-Type':'application/json'
        }
    });

    const resData = await response.json();

   if(!response.ok){
    throw new Error('사용자 선택 장소에 대한 업로드를 실패하였습니다.');
   } 

   return resData.message()
}