import { config } from "../../wdio.conf";

async function Open() {
    return browser.url(config.baseUrl);
}

const BaseStep = {
    Open
}

export default BaseStep;
