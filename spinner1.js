const spinner = function(howMany, delay) {
  const sticks = [ "\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\" ];
  let i = 0;
  while (howMany--) {
    sticks.forEach((stick) => setTimeout(() => process.stdout.write(stick), delay + (delay * i++)));
  }
  setTimeout(() => process.stdout.write('\rDone!'), delay + (delay * i++));
  setTimeout(() => process.stdout.write('\n'), delay + (delay * i));
};

spinner(10, 50);
