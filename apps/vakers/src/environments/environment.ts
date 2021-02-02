// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    databaseURL: '<your-database-URL>',

    apiKey: 'AIzaSyDWIW6Fx2UtGAAJ7F0sGnuI4VN2KkH2E9k',
    authDomain: 'vaki-project-d00bd.firebaseapp.com',
    projectId: 'vaki-project-d00bd',
    storageBucket: 'vaki-project-d00bd.appspot.com',
    messagingSenderId: '396441712272',
    appId: '1:396441712272:web:fcf542a5efa6138ff3ca15',
    measurementId: 'G-035HQNPEDN',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
