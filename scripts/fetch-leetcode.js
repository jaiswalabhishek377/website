const https = require('https');
const fs = require('fs');

const data = JSON.stringify({
  query: `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        userCalendar {
          streak
          totalActiveDays
          submissionCalendar
        }
      }
    }
  `,
  variables: { username: 'ic5DzrEttY' }
});

const req = https.request('https://leetcode.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Referer': 'https://leetcode.com',
    'User-Agent': 'Mozilla/5.0'
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      const cal = json.data?.matchedUser?.userCalendar?.submissionCalendar;
      if (cal) {
        fs.writeFileSync('src/lib/leetcodeSnapshot.json', cal);
        console.log('SUCCESS: Saved LeetCode snapshot to src/lib/leetcodeSnapshot.json');
      } else {
        console.log('NO_CALENDAR', body);
      }
    } catch (e) {
      console.error(e);
    }
  });
});

req.on('error', console.error);
req.write(data);
req.end();
