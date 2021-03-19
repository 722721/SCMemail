const axios = require("axios");

//const SCKEY = process.env.SCKEY;
//axios.defaults.headers.common.cookie = process.env.COOKIE;


const umsmail = () => {
    return axios({
        method: 'get',
        url: `http://sup.umsin.com/OrderEmail.aspx?cgID=1`,
        params: {
            text: ``
        }
    })
}

const stmail = () => {
    return axios({
        method: 'get',
        url: `http://sup.umsin.com/OrderEmail.aspx?cgID=2`,
        params: {
            text: ``
        }
    })
}
const GLaDOSCheckIn = async () => {
    umsmail();
    console.log(`UMS执行成功`);
    stmail();
    console.log(`ST执行成功`);
}

GLaDOSCheckIn();
