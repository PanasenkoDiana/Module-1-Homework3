const moment = require('moment');

function getDate() {
    const now = moment();
    const formattedDate = now.format('YYYY/MM/DD HH:mm:ss');
    console.log(formattedDate);
}

getDate();
