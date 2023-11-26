const Queue = require('bull');
const sendFile = require('../utils/sendFile');
const fs = require('fs').promises;

const fileQueue = new Queue('FileJob');

fileQueue.process('sendFile', async (job) => {
    console.log(job.data)
    console.log
  const { filePath, fileName} = job.data;
    await sendFile(filePath, fileName, job.res);
    console.log("File sent successfully.");
    await fs.unlink(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
    return { status: 'completed' };
})

module.exports = {fileQueue};
