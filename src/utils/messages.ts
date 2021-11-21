const messages = [
  "Segmentation fault",
  "PC LOAD LETTER",
  "Core dumped",
  "Stack overflow",
  "Out of memory exception",
  "Keyboard not found",
  "Task failed successfully",
  "Abort, Retry, Fail?",
  "Kernel panic",
  "Does Not Compute",
  "This program has performed an illegal operation and will be shut down",
  "sudo rm -rf /",
  "500 Internal server error",
  "Something happened",
  "404 Page not found",
  "Format complete",
  "418 I'm a teapot",
  "Authentication exception",
  "File Is Too Large for Destination File System",
  "User is not in the sudoers file. This incident will be reported",
  "Invalid Node version",
  "Uncaught ReferenceError: React is not defined",
  "Have you tried turning it off and on again?",
  "Task is taking too long to complete",
  "Power down",
  "Not responding",
  "Unable to connect to server",
  "Please deposit $3.49 to continue",
  "Please hold. Our assistant will be with you shortly"
];

export function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
