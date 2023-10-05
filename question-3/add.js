const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs'); 

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDir, fileName);

  fs.writeFileSync(filePath, `File ${i}`);
}

// Output the file names to console
const files = fs.readdirSync(logsDir);
console.log('Files created:');
files.forEach((file) => {
  console.log(file);
});
