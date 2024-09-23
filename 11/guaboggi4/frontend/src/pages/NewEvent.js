import { json, redirect } from 'react-router-dom';
import EventForm from "../components/EventForm";
function NewEventPage(){
    return(
        <EventForm />
    )
}
export default NewEventPage;

export async function action({request, params}){
    const data = await request.formData();

    const eventData = {
        title : data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description : data.get('description'),
    }

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
        headers:{
            'Content-Type' : 'application/json'
        }
    });

    if(!response.ok){
        throw json({ message: '이벤트를 저장하는데 실패하였습니다.'}, {status:500});
    }

    return redirect('/events');
}