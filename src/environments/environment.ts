// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: require('../../package.json').version,
  firebase:  {
    apiKey: 'AIzaSyBX4g84u7rTQQP_lpJ7jlZttvsSjm48Cmk',
    authDomain: 'stage-oasa.firebaseapp.com',
    projectId: 'stage-oasa',
    storageBucket: 'stage-oasa.appspot.com',
    messagingSenderId: '237920509237',
    appId: '1:237920509237:web:b3af64a73e5ef8e182407c',
    measurementId: 'G-VPML65VJ6V'
  }
};
