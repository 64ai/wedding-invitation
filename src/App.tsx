import {createContext, useRef} from 'react';
import {
  Account,
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
import {Confetti} from './components';
import {useQuery} from './hooks';

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
  const ref = useRef<any>(null);
  const {naver} = useQuery();
  return (
    <GlobalContext.Provider value="value">
      <ThemeProvider theme={theme}>
        <Warning />
        <MainLayout>
          {naver && (
            <div>
              <button 
                onClick={() =>{
                  window.location.href = 'nmap://map?lat=37.4979502&lng=127.0276368&zoom=20&appname=com.example.myapp'; 
                }}
              >
                naver
              </button>
            </div>
          )}
          <Header />
          <Intro />
          <Story />
          <Conversation />
          <Box sx={{userSelect: 'none'}}>
            <img
              src="/wedding-invitation/images/confetti3.jpeg"
              alt="confetti"
              width="100%"
            />
          </Box>
          <Gallery />
          <Notice />
          <Notice2 />
          {/*<Notice3 />*/}
          {/*<Account />*/}
        </MainLayout>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default App;
