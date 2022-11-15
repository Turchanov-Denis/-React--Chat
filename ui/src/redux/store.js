import { configureStore } from '@reduxjs/toolkit'
import mainSlicer from './mainSlicer'

export default configureStore({
  reducer: {
    main: mainSlicer,
  },
})