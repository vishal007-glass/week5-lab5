const fs = require('fs');

try {
    const data = fs.readFileSync('sample.txt', 'utf8');
    console.log('File contents (Synchronous Read):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }

  try {
    fs.writeFileSync('output.txt', 'This is some sample data (Synchronous Write).');
    console.log('Data written to output.txt (Synchronous Write)');
  } catch (err) {
    console.error('Error writing file:', err);
  }