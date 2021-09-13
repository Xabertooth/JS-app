'use strict'

const ipToInt = (ip = '127.0.0.1') => {
    return ip.split(".").reduce((prev, item) => (prev << 8) + parseInt(item));
}

console.log(ipToInt());