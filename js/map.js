var map;
var marker;
var center = {
    lat: 35.6378969, // 緯度
    lng: 139.726117 // 経度
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: center, // 地図の中心を指定
        zoom: 19 // 地図のズームを指定
    });

    marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
        map: map // マーカーを立てる地図を指定
    });
}