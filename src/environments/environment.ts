// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDmCskRfmyHb3lxghrDvJyENl0-APpffZw',
    authDomain: 'firestorecrud-d046e.firebaseapp.com',
    databaseURL: 'https://firestorecrud-d046e.firebaseio.com',
    projectId: 'firestorecrud-d046e',
    storageBucket: 'firestorecrud-d046e.appspot.com',
    messagingSenderId: '410673317856',
    appId: '1:410673317856:web:c0b4d79e0b5107bbc7cd85',
    measurementId: 'G-PWW0DFST6K'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
