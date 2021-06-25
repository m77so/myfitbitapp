const axios = require('axios');
const config = require('./credential.json');

(async ()=>{
    const res = await axios.get('https://api.fitbit.com/1/user/-/activities/heart/date/2021-06-25/1d/1sec.json', {
    headers: {
        Authorization: `Bearer ${config.access_token}`,
    }
    })
    console.log(res.data['activities-heart-intraday']['dataset'].map(v=>`${v.time}, ${v.value}`).join('\n'))
})();
