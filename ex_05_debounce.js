function debounce(fn, timeout = 300) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
}

function logMessage(message) {
  console.log(`[Log]: ${message}`);
}

const debouncedLogMessage = debounce(logMessage, 10000);
const debouncedLogMessage2 = debounce(logMessage, 15000);
const debouncedLogMessage3 = debounce(logMessage, 30000);

console.log("Debounced function called. Waiting some secs...");

debouncedLogMessage("Hello, there!");
debouncedLogMessage2("Looking for issues in the code...");
debouncedLogMessage3("This is just a test message. No issues at all. Program finished successfully!");
