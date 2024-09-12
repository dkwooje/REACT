import { useState } from "react";
import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength, isEqualsToOtherValue } from "../util/validation.js";
export default function Login() {

 // const [enteredEmail, setEnteredEmail] = useState('');
 // const [enteredPassword, setEnteredPassword] = useState('');
  
  const [enteredValue, setEnteredValue] = useState({
    email: '',
    password: '',
  });

  const [didEdit, setDidEdit] = useState({
    email : false,
    password : false
  });

  //const emailIsInvalid =  didEdit.email && !enteredValue.email.includes('@');
  const emailIsInvalid =  didEdit.email && !isEmail(enteredValue.email) && !isNotEmpty(enteredValue.email);
 // const passwordIsInvalid = didEdit.password && enteredValue.password.trim().length <6;
 const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValue.password, 6);


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
    }));
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit => (
      {
        ...prevEdit,
        [identifier]: true
      }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
            label="email" 
            id="email" 
            type="text" 
            name="email" 
            onBlur={()=> handleInputBlur('email')} 
            onChange={(event)=>handleInputChange('email', event.target.value)}
            value={enteredValue.email} 
            error={emailIsInvalid && '유효한 이메일 값을 넣어주세요.'}
             />
        
          <Input 
          label="password"
          id="password" 
          type="password" 
          name="password" 
          onBlur={()=> handleInputBlur('password')} 
          onChange={(event)=>handleInputChange('password', event.target.value)} 
          value={enteredValue.password}
          error={passwordIsInvalid && '비밀번호는 6자 이상 넣어주세요.'}
          />
        </div>


      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button> 
      </p>

    </form>
  );
}
