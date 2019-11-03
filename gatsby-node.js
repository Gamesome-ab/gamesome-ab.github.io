exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /mwc-switch.js/,
                        use: loaders.null(),
                    },
                    {
                        test: /mwc-button.js/,
                        use: loaders.null()
                    }
                ],
            },
        });
    }
};
