import { configureStore } from '@reduxjs/toolkit';
import tabs from './features/tabs';
export default configureStore({
  reducer: { tabs },
});
