const Downloader = require("nodejs-file-downloader");

(async () => {

    const downloader = new Downloader({
        url: "http://212.183.159.230/200MB.zip",
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
})();