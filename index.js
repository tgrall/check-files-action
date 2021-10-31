const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');


async function checkFileExists(filePath) {
    return fs.promises.access(filePath)
    .then(() => {
        core.info(`File ${filePath} exists`);
        return true;
    })
    .catch(() => {
        core.setFailed(`File ${filePath} is mandatory`);
        return false;
    });
}

(
    async () => {
        try {
            checkFileExists("LICENSE");
            checkFileExists("README.md");

        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();