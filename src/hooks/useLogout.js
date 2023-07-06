import axios from "../components/api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const {setAuth } = useAuth();

    const logout = async () => {
        
        //RETURN FOR CLEARING ACCESSTOKEN / COOKIES 
        try{
            const response = await axios.get('/logout', {
                headers: { "Content-Type": "application/json" },
                withCredentials: true


            }
            );
            const cookies = response?.data?.cookies; 
            setAuth({cookies});  

        } catch (err) {
            console.log(err);
        }
    }
    return logout;
}
export default useLogout