const fs = require('fs');

// file will be created or overwritten by default.
fs.copyFile('dist/usePortal.d.ts', 'dist/usePortal.min.d.ts', (err) => {
  if (err) throw err;
  
});
