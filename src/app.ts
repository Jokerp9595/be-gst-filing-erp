/****************************
 SERVER MAIN FILE
 ****************************/
process.env.TZ = 'Asia/Kolkata';
import express from 'express';
import { configuration, expressConfig } from './configs';

// Include Modules

const app = expressConfig();
/* Old path for serving public folder */
app.use('/', express.static(__dirname + '/'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.listen(configuration.serverPort, () => {
    console.log(`Server running at :${configuration.apiUrl}`);
});
