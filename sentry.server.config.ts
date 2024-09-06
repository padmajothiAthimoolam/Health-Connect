// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4daf65f23bdb58c2afa14830df263e0c@o4507903438815232.ingest.us.sentry.io/4507903440257024",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
