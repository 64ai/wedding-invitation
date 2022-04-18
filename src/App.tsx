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
import {Box} from '@mui/material';
import Notice3 from './views/Notice/Notice3';
import Notice2 from './views/Notice/Notice2';
import {Diagonal} from './components';


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
          <Box sx={{userSelect: 'none'}}>
            <img
              src="/wedding-invitation/images/confetti.jpeg"
              alt="baemin"
              width="100%"
            />
          </Box>
          <Gallery />
          <Notice />
          <Notice2 />
          <Notice3 />
          {/*<Confetti />*/}
          <Account />
        </MainLayout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
