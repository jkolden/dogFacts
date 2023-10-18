const helper = require("./helper.js");

("use strict");

// You can use your favorite http client package to make REST calls, however, the node fetch API is pre-installed with the bots-node-sdk.
// Documentation can be found at https://www.npmjs.com/package/node-fetch
// Un-comment the next line if you want to make REST calls using node-fetch.
// const fetch = require("node-fetch");

module.exports = {
  
  metadata: () => ({
    name: "DogFacts",
    properties: {
      accessToken: { required: false, type: "string" }

    },
    supportedActions: ["success", "error"]
  }),
  invoke: (context, done) => {

    helper
      .doStuff()
      .then((result) => {

        if ( typeof(result) == 'string') {

          context.variable("fact", result);
          context.transition("success");
          done();

        } else {

          context.transition("error");
          done();

        }
    
      });
  },
};