import { AppRouter } from './router/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App()
{

  return (
    <Container className='vh-100  font-monospace'>
      <AppRouter />
    </Container>
  )
}

export default App
