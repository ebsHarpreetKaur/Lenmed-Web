let authToken = localStorage.getItem('token')
let user = localStorage.getItem('user')
var authUser = JSON.parse(user);
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
};

function formattedDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight
}
export {
    authUser,
    authToken,
    headers,
    formattedDate,
    dimensions
}
