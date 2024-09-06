// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://039ce24ac11bac2ca1f8c5464756a45f@o4507903618056192.ingest.us.sentry.io/4507903619039232",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
