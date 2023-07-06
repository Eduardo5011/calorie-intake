import { useEffect } from "react"
import {useNavigation } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigation(false)

    useEffect(() => {
        setTimeout(() => {
            navigate("/", { state: "Error" })
        })
    }, [])


  return (
    <div>NotFoundPage</div>
  )
}
export default NotFoundPage