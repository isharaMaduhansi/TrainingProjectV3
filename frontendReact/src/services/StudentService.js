import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";

class StudentService{

    getStudents(){
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student){
        return axios.post(STUDENT_API_BASE_URL + '/add' , student);
    }

    getStudentById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.post(STUDENT_API_BASE_URL + '/update/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/delete/' + studentId);
    }
}

export default new StudentService()