import {Account, Conversation, Gallery, Header, Intro, Story, Warning} from './views';
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

const App = () => {
  return (
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
        {/*<Account />*/}
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
