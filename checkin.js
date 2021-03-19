const axios = require("axios");

//const SCKEY = process.env.SCKEY;
//axios.defaults.headers.common.cookie = process.env.COOKIE;


const umsmail = () => {
    return axios({
        method: 'get',
        url: `http://sup.umsin.com/OrderEmail.aspx?cgID=1`,
        params: {
            text: `执行成功`
        }
    })
}

const stmail = () => {
    return axios({
        method: 'get',
        url: `http://sup.umsin.com/OrderEmail.aspx?cgID=2`,
        params: {
            text: `执行成功`
        }
    })
}
const GLaDOSCheckIn = async () => {
    umsmail();
    stmail();
    console.log(`执行成功`);
}

GLaDOSCheckIn();
