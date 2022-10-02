import Users from './pages/users/Users';
import Albums from './pages/albums/Albums';
import Photos from './pages/photos/Photos';
import NotFound from './pages/NotFound'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        {/* <Route path="/albums" element={<Albums />} /> */}
        <Route path="/:userId/albums" element={<Albums />} />
        <Route path="/:userId/albums/:albumId/photos" element={<Photos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
