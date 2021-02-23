import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';

import useConstructor from './shared/hooks/useContructor';
import MatThemeService from './shared/themes/matThemeService';
import ToastService from './shared/services/toastService';
import SessionService from './shared/services/sessionService';

import PublicShell from './public/_shell/publicShell';
import PrivateShell from './private/_shell/privateShell';

import {
  createStyles, makeStyles, Theme, ThemeProvider, CssBaseline,
  withWidth, isWidthDown, useMediaQuery,
  Snackbar
} from '@material-ui/core';

const App = (_props: any) => {
  const classes = useStyles();

  const [showToast, setShowToast] = useState(false);
  useConstructor(() => {
    MatThemeService.INIT();
    ToastService.INIT(setShowToast);
  });

  MatThemeService.setIsMobileScreen(isWidthDown('xs', _props.width));
  MatThemeService.setToolbarHeight(useMediaQuery('(min-width:600px)'));

  //!!! moving aboe the constructor is causing theme undefined error
  const [currentTheme, setCurrentTheme] = useState(MatThemeService.getCurrentTheme());
  const toggleThemeMode = () => { setCurrentTheme(MatThemeService.toggleMode()); }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      {/* !!!.Don't Remove the Snack Bar!!! */}
      {/* It is required to show the Toast across the application */}
      <Snackbar open={showToast} anchorOrigin={ToastService.anchorOrigin} autoHideDuration={ToastService.autoHideDuration} onClose={ToastService.closeToast}>
        <MuiAlert elevation={ToastService.elevation} variant={ToastService.variant} onClose={ToastService.closeToast} severity={ToastService.toastType}>{ToastService.message}</MuiAlert>
      </Snackbar>

      <div className={classes.root}>
        {/* Load the corresponding page on startup */}
        {SessionService.isNotAuthenticated() ?
          <PrivateShell onThemeModeToggle={toggleThemeMode} />
          : <PublicShell onThemeModeToggle={toggleThemeMode} />}

      </div>
    </ThemeProvider >

  );
}
export default withWidth()(App);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  }),
);


// import './App.css';
// import React, { useState } from 'react';
// import { Button, CssBaseline, Snackbar, ThemeProvider } from '@material-ui/core';
// import MuiAlert from '@material-ui/lab/Alert';
// import MatThemeService from './shared/themes/matThemeService';
// import SessionService from './shared/services/sessionService';
// import PrivateShell from './private/_shell/privateShell';
// import PublicShell from './public/_shell/publicShell';
// import ToastService from './shared/services/toastService';
// import useConstructor from './shared/hooks/useContructor';

// function App() {

//   const [showToast, setShowToast] = useState(false);
//   useConstructor(() => {
//     MatThemeService.INIT();
//     ToastService.INIT(setShowToast);
//   });

//   //!!! moving aboe the constructor is causing theme undefined error
//   const [currentTheme, setCurrentTheme] = useState(MatThemeService.getCurrentTheme());

//   const toggleThemeMode = () => {
//     setCurrentTheme(MatThemeService.toggleMode());
//   }
//   return (
//     <ThemeProvider theme={currentTheme}>
//       <CssBaseline />

//       {/* !!!.Don't Remove the Snack Bar!!! */}
//       {/* It is required to show the Toast across the application */}
//       <Snackbar open={showToast} anchorOrigin={ToastService.anchorOrigin} autoHideDuration={ToastService.autoHideDuration} onClose={ToastService.closeToast}>
//         <MuiAlert elevation={ToastService.elevation} variant={ToastService.variant} onClose={ToastService.closeToast} severity={ToastService.toastType}>{ToastService.message}</MuiAlert>
//       </Snackbar>

//       {/* Load the corresponding page on startup */}
//       {SessionService.isNotAuthenticated() ? <PrivateShell onThemeModeToggle={toggleThemeMode} /> : <PublicShell onThemeModeToggle={toggleThemeMode} />}

//     </ThemeProvider>
//   );
// }
// export default App;
