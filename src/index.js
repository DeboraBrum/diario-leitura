const app = require('./server');

app.listen(process.env.PORT || process.env.SV_PORT);