import { useState } from 'react'
import './scss/style.scss'
import JoinComponent from './component/JoinComponent';
import { useSelector, useDispatch } from 'react-redux'
import { changeAuth } from './redux/mainSlicer';

function App() {
  const auth = useSelector((state) => state.main.isAuth)
  const dispatch = useDispatch()
  const onlogin = () => {
    dispatch(changeAuth())
    console.log(auth)
  }
  return (
    <>
      <div className='wrapper'>
        <JoinComponent onlogin={onlogin}></JoinComponent>
      </div>
    </>
  )
}

export default App
