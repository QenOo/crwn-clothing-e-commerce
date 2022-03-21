import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home/Homepage.component';
import Navigation from './components/Navigation/Navigation.component';
import Authentication from './routes/Authentication/Authentication.component';

function Shop() {
    return <h1>Im shop</h1>;
}

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='shop' element={<Shop />} />
                    <Route path='authentication' element={<Authentication />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
