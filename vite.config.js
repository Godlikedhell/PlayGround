const previewSetup = {
  name: 'preview-setup',
  configurePreviewServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url?.split('?')[0] === '/favicon.ico') {
        response.statusCode = 204;
        response.end();
        return;
      }
      next();
    });
  },
};

export default {
  plugins: [previewSetup],
  preview: {
    allowedHosts: ['live-42628518862-1.omgithub.com'],
  },
};
