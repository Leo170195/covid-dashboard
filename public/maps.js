// fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
//     .then(response => response.json())
//     .then(dateTodayApiRegion => {

//     const options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//     };

//     let userPosition;

//     function success(pos) {
//         userPosition = pos.coords;

//         const lati = userPosition.latitude
//         const longi = userPosition.longitude
//         const userPos = { lat: lati, lng: longi };
        
//     }

//     function error(err) {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }

//     navigator.geolocation.getCurrentPosition(success, error, options);
//     // The map, centered on the userPos
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 16,
//         center: userPos,
//     });
//     // The marker, positioned on the userPos
//     const marker = new google.maps.Marker({
//         position: regionMark,
//         map: map,
//     });
// })
