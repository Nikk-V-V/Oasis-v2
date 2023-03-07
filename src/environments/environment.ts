// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: require('../../package.json').version,
  firebase:  {
    apiKey: 'AIzaSyAxqtfb6kO6EEwuls-rqzwjnJghHjzTkWA',
    authDomain: 'oasa-f33c4.firebaseapp.com',
    projectId: 'oasa-f33c4',
    storageBucket: 'oasa-f33c4.appspot.com',
    messagingSenderId: '390179268074',
    appId: '1:390179268074:web:26fbcf732f3f4f1cdffe93',
    measurementId: 'G-8GSRRSE3F7'
  }
};
