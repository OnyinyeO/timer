const args = process.argv.slice(2);

const scheduleAlarm = function (delay) {
  if (delay < 0 || isNaN(delay)) {
    return; // Skip negative numbers and non-numeric values
  }

  setTimeout(() => {
    process.stdout.write("\x07"); // System beep
  }, delay * 1000);
};

for (const arg of args) {
  const delay = Number(arg);
  scheduleAlarm(delay);
}
