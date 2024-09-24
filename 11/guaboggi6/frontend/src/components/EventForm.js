import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const data = useActionData();

  const navigate = useNavigate();
  const navigation = useNavigation(); // 라우터의 하나의 경로에서 다른 경로로 이동할 때의 '상태'를 가지고 있다.

  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">이미지</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">날짜</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">상세내용</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          취소
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "제출중입니다..." : "저장"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request, params}){
  const data = await request.formData();
  const method = request.method;

  const eventData = {
      title : data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description : data.get('description'),
  }

  let url = 'http://localhost:8080/events';

  if(method === 'PATCH'){
    const eventId = params.eventId;
    url = 'http://localhost:8080/events/' + eventId;
  }

  const response = await fetch(url, {
      method: method,
      body: JSON.stringify(eventData),
      headers:{
          'Content-Type' : 'application/json'
      }
  });

  if(response.status === 422){
      return response;
  }

  if(!response.ok){
      throw json({ message: '이벤트를 저장하는데 실패하였습니다.'}, {status:500});
  }

  return redirect('/events');
}