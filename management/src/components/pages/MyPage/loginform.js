import React,{useState} from 'react';
import './mypage.css';

function LoginForm({Login, error}) {
    const [details,setDetails]=useState({name:"",email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
        <div className="LoginForm">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>LOGIN</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        {/*<label htmlFor="name">NAME</label>*/}
                        {/* <input type="text" name="name" id="name" placeholder="이름을 입력해 주세요." onChange={e=>setDetails({...details, name:e.target.value})} value={details.name}/>  */}
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">EMAIL</label> */}
                        <input type="email" name="email" id="email" placeholder="이메일을 입력해 주세요." onChange={e=>setDetails({...details, email:e.target.value})} value={details.email} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="password">PASSWORD</label> */}
                        <input type="password" name="password" id="password" placeholder="비밀번호를 입력해 주세요." onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}/>
                    </div>
                    <div className="btn-group">
                        <input type="submit" value="LOGIN" id="login-btn"/>
                        <input type="submit" value="REGISTER" id="register-btn"/>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;
