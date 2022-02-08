import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth";
const getToken = () => {
    return localStorage.getItem('USER_KEY');
}
class UserService{

    sendCredentials(user){
        return axios.post(USER_API_BASE_URL + '/login' , user);
    }

    fetchUserData(){
        return axios.get(USER_API_BASE_URL + '/userinfo' , {
            headers:{
            'Authorization':'IAcade '+getToken()
        }
    });
    } 

}
export default new UserService()