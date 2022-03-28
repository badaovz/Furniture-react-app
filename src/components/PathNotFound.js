import { Link } from 'react-router-dom';

function PathNotFound() {
  return (
    <div className='pathNotFound'>
       <div className='pathNotFound__content'>
            <h1 className='pathNotFound__content__errorCode'>404</h1>
            <h5 className='pathNotFound__content__notify'>Sorry, the page you tried cannot be found</h5>
            <Link to='/'>
                <button className='pathNotFound__content__btn btn'>back home</button>
            </Link>
       </div>
    </div>
  )
}

export default PathNotFound;