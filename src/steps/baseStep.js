import { SETTINGS } from "../appsettings";

async function open() {
  return browser.url(SETTINGS.URL);
}

const BaseStep = {
  Open: open,
};

export default BaseStep;
