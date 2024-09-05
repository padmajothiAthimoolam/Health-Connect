// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://42eab4d68f98b845a2a53ac1fb118e59@o4507896066277376.ingest.us.sentry.io/4507896492130304",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
