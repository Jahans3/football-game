function getRandom (number) {
  return Math.floor(Math.random() * Math.floor(number)) + 1;
}

// pre-pick football teams
// i.e. user can prick their teams ahead of time
//      all sign up to the app, pick their teams whenever
//      (connected via network)
function getThing(number) {
  let throwIn;
  let goalKick;
  let shot;
  let freeKick;

  while (
    shot === throwIn ||
    shot === goalKick ||
    shot === freeKick ||
    throwIn === shot ||
    throwIn === goalKick ||
    throwIn === freeKick ||
    goalKick === shot ||
    goalKick === throwIn ||
    goalKick === freeKick ||
    freeKick === shot ||
    freeKick === throwIn ||
    freeKick === goalKick
    ) {
    throwIn = getRandom(number);
    shot = getRandom(number);
    goalKick = getRandom(number);
    freeKick = getRandom(number);
}

  const result = [];

  result[throwIn] = 'Throw In ';
  result[goalKick] = 'Goal Kick';
  result[shot] = 'Shot     ';
  result[freeKick] = 'Free Kick';

  console.log('-----------------------------');
  result.map((thing, i) => {
    let name;
    if (i === 0) name = 'Josh ';
    if (i === 1) name = 'Joey ';
    if (i === 2) name = 'Walid';
    if (i === 3) name = 'Ben  ';
    console.log(`${name}  |  ${thing}  |  (${i})  |`);
  });
  console.log('-----------------------------');
}

getThing(process.argv[2]);
