let ipAddress = document.getElementById('ipInput');
let errText = document.getElementById('errText');
let reloadBtn = document.getElementById('reloadBtn');
let detailBtn = document.getElementById('detailsBtn');
let ipDataDiv = document.getElementById('ipData');
let countryFlag = document.getElementById('countryFlag');
let continent = document.getElementById('cntn');
let country = document.getElementById('coun');
let latitude = document.getElementById('lat');
let longitude = document.getElementById('long');
let ipVer = document.getElementById('ipVer');
let showRequesterIp = document.getElementById('showRequesterIp');


reloadBtn.addEventListener('click', function () {
    location.reload(true);
});

fetch(`http://api.ipstack.com/check?access_key=570c4b9dae251ae17759e2db13320b26`)
    .then(req => req.json())
    .then((data) => {
        console.log(data)
        ipDataValue = data.ip;
        ipAddress.value = ipDataValue;
        showRequesterIp.addEventListener('mousemove', function () {
            showRequesterIp.innerHTML = 'got tired of making this more complex :)';
            setTimeout(() => {
                showRequesterIp.innerHTML = `:) Your Personal IP Address Is: ${ipDataValue}`;
            }, 4000);
        });
    }).catch(err => errText.innerHTML = err);

detailBtn.addEventListener('click', function () {
    ipDataDiv.classList.toggle('hide');
    console.log('hereeeee');

})





// async function getData() {
//     let userIP = await 
//     fetch(`http://api.ipstack.com/check?_key=570c4b9dae251ae17759e2db13320b26`)
//         .then(resp => resp.json())

//     let address = ipAddress.value;
//     let checkIp = address || userIP;

//     let ipDisplay = await fetch(`http:api.ipstack.com/${checkIp}?access_key=dec1ed13526f8c32c228db22671e2e05&output=json`)     
// }


// // showRequesterIp.addEventListener('click', function() {
// //      let ourRequest = new XMLHttpRequest();
// //      ourRequest.open('GET', 'http://api.ipstack.com/check?access_key=570c4b9dae251ae17759e2db13320b26')
// //      ourRequest.onload = function() {
// //          var ourData = JSON.parse(ourRequest.responseText);
// //          console.log(ourData);
// //      }


// //     // ipAddress.value = '95634';
// // })


// detailBtn.addEventListener('click', function () {

//     let address = ipAddress.value;

//     let checkIp = address || 'check';
//     console.log(checkIp);

//     if(!address) {
//         console.log('nothing here');
//         errText.innerHTML = '_Seriously_Are_You_Kiddn_You\'ve_Got_No_Input_There';
//     } else {
//         errText.innerHTML = '';
//         ipDataDiv.classList.toggle('hide');
//         detailBtn.disabled = true;
//         detailBtn.style.opacity = '.5';


//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open('GET', `http://api.ipstack.com/check
//     ? access_key = 570c4b9dae251ae17759e2db13320b26`);
//     ourRequest.onload = function () {
//         var ourData = JSON.parse(ourRequest.responseText);
//         console.log(ourData);
//         continent.innerHTML = ourData.country_name;
//         countryFlag.src = ourData.location.country_flag;
//     };
//     ourRequest.send();
//     // fetch(`http:api.ipstack.com/${address}?access_key=dec1ed13526f8c32c228db22671e2e05&output=json`)
//     // .then((resp)=> {
//     //     resp.json();
//     // })
//     // .then((data) => {
//     //     console.log(data)
//     // })
//     // .catch(err => console.log(err));

//     } ///closing if statement

//     console.log(address);
//     //     fetch('myApi')
//     //     .then(resp => resp.json())
//     //     .then(data => console.log(data))
//     //     .catch(err => console.log(err));
// });