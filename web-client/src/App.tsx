import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { RouterComponent } from './router';
import { theme } from './styles/Theme';
import { StyledGlobal } from './styles/Global';
import { Header } from './components/Header';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledGlobal />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};
