import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const basename = process.env.NODE_ENV === 'production' ? '/alkya' : '/';

const App = () => {
    return (
        <Router basename={basename}>
           <AppRoutes />
        </Router>
    );
}

export default App;
