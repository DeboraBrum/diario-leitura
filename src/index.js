const app = require('./server');

app.listen(process.env.SV_PORT || process.env.PORT);