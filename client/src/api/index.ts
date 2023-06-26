import axios from "axios"

export const  loginUser = async(number: string)=>{
    try{
        const response = axios.get("http://localhost:5000",{headers:{'number':number}})
        return response
    }catch(err){
        return err
    }
}