function hasStatusCode(statusCode, expectedStatusCode) {
  if (statusCode !== expectedStatusCode)
    throw new Error(`Expected ${expectedStatusCode}, but found ${statusCode}.`);
}

export { hasStatusCode };
