import {createContext} from 'react';
import {
  Account,
  Confetti,
  Conversation,
  Gallery,
  Header,
  Intro,
  Notice,
  Story,
  Warning,
} from './views';
import {MainLayout} from './layouts';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

// Theme context, default to light theme
const GlobalContext = createContext('light');

const App = () => {
  return (
    <GlobalContext.Provider value="value">
      <ThemeProvider theme={theme}>
        <Warning />
        <MainLayout>
          <Header />
          <Intro />
          <Story />
          <Conversation />
          <img
            src="/wedding-invitation/images/confetti.jpeg"
            alt="baemin"
            width="100%"
          />
          <Gallery />
          <Notice />
          {/*<Confetti />*/}
          <Account />
        </MainLayout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
