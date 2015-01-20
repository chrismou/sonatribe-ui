/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sonatribe-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "",
      'font-src': "*",
      'connect-src': "*",
      'img-src': "*",
      'style-src': "'self' 'unsafe-inline'",
      'frame-src': "*"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['torii'] = {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey:      '787578521258518',
          redirectUri: 'http://dev.festivaltribe.co.uk:4200'
        },
        'facebook-connect': {
          appId:      '787578521258518'
        }
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['torii'] = {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey:      '787578521258518',
          redirectUri: 'http://dev.festivaltribe.co.uk:4200'
        },
        'facebook-connect': {
          appId:      '787578521258518'
        }
      }
    };
  }

  if (environment === 'production') {
    ENV['torii'] = {
      sessionServiceName: 'session',
      providers: {
        'facebook-oauth2': {
          apiKey:      '787578521258518',
          redirectUri: 'http://dev.festivaltribe.co.uk:4200'
        },
        'facebook-connect': {
          appId:      '787578521258518'
        }
      }
    };
  }

  return ENV;
};
