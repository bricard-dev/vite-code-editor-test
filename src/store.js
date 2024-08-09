import { configureStore } from '@reduxjs/toolkit';
import preview from './features/preview';
import tabs from './features/tabs';
export default configureStore({
  reducer: { tabs, preview },
});
