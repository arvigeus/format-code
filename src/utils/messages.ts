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
  "Internal server error",
  "Something happened",
  "Page not found",
  "Format complete"
];

export function getMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
