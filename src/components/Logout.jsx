import axios from "./api/axios";
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Logout = (e) => {
  const navigate = useNavigate()

  const handleLogout = () => {
		axios.get('http://localhost:3500/routes/logout')
		.then(res => {
			navigate('/login')
		}).catch(err => console.log(err));
	}





  return (
   <button onClick={handleLogout}>Logout</button>
  )
}
export default Logout