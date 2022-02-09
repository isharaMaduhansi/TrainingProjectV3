import axios from 'axios';

const User_Detail_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserDetailService{

    getUsers(){
        return axios.get(User_Detail_API_BASE_URL);
    }

    getDeletedUsers(){
        return axios.get(User_Detail_API_BASE_URL + '/deleted-users');
    }

    getUserById(userId){
        return axios.get(User_Detail_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId){
        return axios.get(User_Detail_API_BASE_URL + '/delete/' + userId);
    }

    registeruser(user){
        return axios.post(User_Detail_API_BASE_URL + '/register' , user);
    }

    updateUser(user, userId){
        return axios.post(User_Detail_API_BASE_URL + '/update/' + userId, user);
    }
}

export default new UserDetailService()