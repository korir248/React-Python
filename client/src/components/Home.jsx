import React from "react"
import { Navigate,Link} from 'react-router-dom'
import { getBooks } from '../redux/actions/actions'
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';

const Home = () => {
    const {loading} = useSelector(state => state.books)
  const dispatch = useDispatch()

  const handleClick = ()=>{
      <Navigate to={"/books"}/>
        dispatch(getBooks())
  }
    return (
        <div>
        <Link to="/books"><button onClick={handleClick}>{loading ? "loading..." :"Show books"}</button></Link>
            
        </div>
    )
}

export default Home
