import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength, isEqualsToOtherValue } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
export default function Login() {

  const {
    value: emailValue,
     handleInputChange: handleEmailChange, 
     handleInputBlur: handleEmailBlur,
     hasError: emailHasError
    } = useInput("", (value)=>isEmail(value) && isNotEmpty(value));

 const {
  value: passwordValue,
  handleInputChange: handlePasswordChange,
  handleInputBlur: handlePasswordBlur,
  hasError: passwordHasError
 } = useInput("",(value) => hasMinLength(value, 6))


  function handleSubmit(event){
    event.preventDefault();   

    if(emailHasError || passwordHasError){
      return;
    }
    console.log(enteredValue, passwordValue);
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
            onBlur={handleEmailBlur} 
            onChange={handleEmailChange}
            value={emailValue} 
            error={emailHasError && "유효한 이메일 값을 넣어주세요"}
             />
        
          <Input 
          label="password"
          id="password" 
          type="password" 
          name="password" 
          onBlur={handlePasswordBlur} 
          onChange={handlePasswordChange} 
          value={passwordValue}
          error={passwordHasError && "비밀번호는 6자 이상입니다."}
          />
        </div>


      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button> 
      </p>

    </form>
  );
}
