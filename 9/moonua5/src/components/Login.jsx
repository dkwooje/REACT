import { useRef,useState } from "react";
export default function Login() {
  const [ emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event){
    event.preventDefault();   

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes('@');

    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    console.log("이제 HTTP 요청을 보냅시다....");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" 
                type="email" 
                 name="email" 
                 ref={email}
         />
            <div className="control-error">
                {emailIsInvalid && <p>유효한 이메일 주소를 입력합시다.</p>}
            </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" 
                 type="password"
                 name="password"
                 ref={password}
           />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button> 
      </p>

    </form>
  );
}
