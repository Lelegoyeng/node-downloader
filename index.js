const Downloader = require("nodejs-file-downloader");
const inquirer = require('inquirer');


const downloadFiles = async (link) => {
    const downloader = new Downloader({
        // url: "http://212.183.159.230/200MB.zip",
        url: link,
        directory: "./downloads",
        onProgress: function (percentage, chunk, remainingSize) {

            console.log("% ", percentage);
            // console.log("Current chunk of data: ", chunk);
            // console.log("Remaining bytes: ", remainingSize);
        },
    });

    try {
        const { filePath, downloadStatus } = await downloader.download();
        console.log("All done");
    } catch (error) {
        console.log("Download failed", error);
    }
}


inquirer
    .prompt([
        {
            name: 'action',
            message: 'Masukkan Link Download Anda',
        },
    ])
    .then(async (answers) => {
        if (answers.action) {
            console.log(`Downloding: ${answers.action}.`);
            downloadFiles(answers.action)
        } else {
            console.log(`Link Kosong`)
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt tidak dapat dirender di lingkungan saat ini.");
        } else {
            console.log("Terjadi kesalahan lain: ", error);
        }
    });