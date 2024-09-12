import { useState } from "react";
export default function Login() {

 // const [enteredEmail, setEnteredEmail] = useState('');
 // const [enteredPassword, setEnteredPassword] = useState('');
  
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  })

  const [didEdit, setDidEdit] = useState({
    email : false,
    password : false
  })

  const emailIsInvalid = 
  didEdit.email && !enteredValue.email.includes('@');

  function handleSubmit(event){
    event.preventDefault();   


    //submit할 때의 유효성 검사 추가
    //아래쪽 구문이 실행되지 못하도록 추가
    console.log(enteredValue);
  }

  function handleInputChange(identifier, value){
    setEnteredValue(prevValues => ({
      ...prevValues, 
      [identifier] : value,
    }));
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false,
    }))
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => (
      {
        ...prevEdit,
        [identifier]: true
      }
    ))
  }



  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" 
          name="email" 
          onBlur={()=> handleInputBlur('email')} 
          onChange={(event)=>handleInputChange('email', event.target.value)}
           value={enteredValue.email} />
          <div className="control-error">{emailIsInvalid && <p>유효한 이메일 주소를 입력하십시오.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" 
          type="password" 
          name="password" 
          onChange={(event)=>handleInputChange('password', event.target.value)} 
          value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button> 
      </p>

    </form>
  );
}
