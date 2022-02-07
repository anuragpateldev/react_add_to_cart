import axios from 'axios';

export const registerUser = (user) => async (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const res = await axios.post('/api/users/register',user);
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }catch(err){
        dispatch({type:'USER_REGISTER_FAIL',payload:err})
    }
} 

export const loginUser = (user) => async (dispatch)=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try{
        const res = await axios.post('/api/users/login',user);
        dispatch({type:'USER_LOGIN_SUCCESS',payload:res.data})
        localStorage.setItem('currentUser',JSON.stringify(res.data))
        window.location.href = '/'
    }catch(err){
        dispatch({type:'USER_LOGIN_FAIL',payload:err})
    }
}