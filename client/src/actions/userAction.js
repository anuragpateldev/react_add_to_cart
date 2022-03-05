import axios from 'axios';

export const registerUser = (user) => async (dispatch)=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try{
        const res = await axios.post('/api/users/register',user);
        dispatch({type:'USER_REGISTER_SUCCESS'})
    }catch(err){
        console.log('err',err);
        console.log('err',err.response.data.message);
        dispatch({type:'USER_REGISTER_FAIL',payload:err.response.data.message})
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
        console.log('errrrrr ==>',err.response);
        dispatch({type:'USER_LOGIN_FAIL',payload:err.response.data.message})
    }
}
 
export const getAllUsers = () => async(dispatch) =>{
    dispatch({type:'GET_USER_REQUEST'});
    try{
        const { data } = await axios.get('/api/users/getusers');
        console.log('action data ==>',data);
        dispatch({type:'GET_USER_SUCCESS',payload:data});
    }catch(err){
        dispatch({type:'GET_USER_ERROR',payload:err});
    }
}

export const deleteUser = (userid) => async(dispatch) =>{
    dispatch({type:'DELETE_USER_REQUEST'});
    try{
        const { data } = await axios.post('/api/users/deleteuser',{userid});
        dispatch({type:'DELETE_USER_SUCCESS',payload:data});
    }catch(err){
        dispatch({type:'DELETE_USER_ERROR'});
    }
}

export const logoutUser = () => async(dispatch) =>{
    localStorage.removeItem('currentUser');
    window.location.href="/";
}