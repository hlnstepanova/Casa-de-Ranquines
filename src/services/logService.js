import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://444c476038f54e5ea4b2e897e1a44c89@sentry.io/1551757"
  });
}

export default {
  init
};
