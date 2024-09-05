// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://42eab4d68f98b845a2a53ac1fb118e59@o4507896066277376.ingest.us.sentry.io/4507896492130304",
  // Only needed for SDK versions < 8.0.0
  // integrations: [
  //   Sentry.metrics.metricsAggregatorIntegration(),
  // ],
});
