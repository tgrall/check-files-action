const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            core.notice("Calling our action");
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();