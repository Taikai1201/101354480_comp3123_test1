const fs = require('fs');
const path = require('path');

const logsDir = 'Logs';

if (fs.existsSync(logsDir)) {
  fs.readdir(logsDir, (error, files) => {
    if (error) {
      console.error('Cannot read directory:', error);
    } else {
      console.log('Files to be deleted:');
      files.forEach((file) => {
        // console.log(file);
        const filePath = path.join(logsDir, file);

        fs.unlinkSync(filePath);
        console.log(`deleted files...${file}`);
      });

      fs.rmdirSync(logsDir);
      console.log(`Deleted directory: ${logsDir}`);
    }
  });
} else {
  console.log(`Directory "${logsDir}" does not exist.`);
}
