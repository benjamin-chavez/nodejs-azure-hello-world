const { app } = require('@azure/functions');

app.http('helloWorld1', {
  methods: ['POST', 'GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    context.log('HTTP Function was triggered.');
    return { body: 'Hello World!' };
  },
});
