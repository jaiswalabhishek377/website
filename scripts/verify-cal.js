const cal = require('../src/lib/leetcodeSnapshot.json');
const dateCountMap = {};
let totalCount = 0;
for (const [ts, count] of Object.entries(cal)) {
  const d = new Date(Number(ts) * 1000);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const key = `${year}-${month}-${day}`;
  dateCountMap[key] = (dateCountMap[key] || 0) + count;
  totalCount += count;
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const startYear = 2025;
const startMonth = 8;
const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth) + 1;

console.log('Total Months:', totalMonths, 'Total Submissions:', totalCount);
for (let i = 0; i < totalMonths; i++) {
  const d = new Date(startYear, startMonth + i, 1);
  const year = d.getFullYear();
  const month = d.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let monthSubmissions = 0;
  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    monthSubmissions += (dateCountMap[key] || 0);
  }
  console.log(`Month ${i}: ${year}-${String(month+1).padStart(2,'0')} -> Submissions: ${monthSubmissions}`);
}
