$(document).on("pagecreate","#home", function() {
    var data_url = "http://jsonplaceholder.typicode.com/comments";
    var sample_image_urls = [
        "http://i.imgur.com/PmHmWcB.jpg",
        "http://i.imgur.com/7fIClkG.jpg",
        "http://i.imgur.com/UOZmIg5.jpg",
        "http://i.imgur.com/78zBxzw.jpg",
        "http://i.imgur.com/z3LMYKt.jpg",
        "http://i.imgur.com/5MwH6rX.jpg",
        "http://i.imgur.com/bqJLmbg.jpg",
        "http://i.imgur.com/cMpKl6V.jpg",
        "http://i.imgur.com/q4na79c.jpg",
        "http://i.imgur.com/iZzs80d.jpg",
        "http://i.imgur.com/xLbgf5z.jpg",
        "http://i.imgur.com/PIfEoEm.jpg",
        "http://i.imgur.com/cUQFZgb.jpg",
        "http://i.imgur.com/OX6YgL9.jpg",
        "http://i.imgur.com/cUQFZgb.jpg"
    ];

    var location = {};

    var total_data = 0;
    var page_loaded = 0;
    var saved_data = [];
    var index = 0;
    var current_data, previous_data, next_data;

    getData();
    populatePage();

    $.mobile.changePage.defaults.allowSamePageTransition = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.phonegapNavigationEnabled = true

    $(".previous").on("click", showPrevious);
    $(".next").on("click", showNext);

    $(".current").swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if(direction.toLowerCase() === 'down') {
                showPrevious();
            } else if(direction.toLowerCase() === 'up') {
                showNext();
            } else {
                $.mobile.changePage("#detail", { transition: "slide", reverse: (direction.toLowerCase() === 'right') });
            }
        }
    });

    $( ".detail" ).on( "swipeleft", function() {
        $.mobile.changePage("#home", { transition: "slide" });
    });

    $( ".detail" ).on( "swiperight", function() {
        $.mobile.changePage("#home", { transition: "slide", reverse: true });
    });

    function showPrevious() {
        if(index > 0) {
            index--;
            populatePage();
            $.mobile.changePage("#home", { transition: "slidedown" });
        }
    }

    function showNext() {
        if(index < (total_data - 1)) {
            index++;
            populatePage();
            $.mobile.changePage("#home", { transition: "slideup" });

            if(index > (total_data - 5)) {
                getData();
            }
        }
    }

    function populatePage() {
        populateCurrent();
        populatePrevious();
        populateNext();
        $(".headline").textfill({ maxFontPixels: 100 });
    }

    function populateCurrent() {
        current_data = saved_data[index];        

        // current
        $(".current .headline span.display").text(current_data['name']);
        $(".current .content span.display").text(current_data['body']);
        $(".current .image img").attr("src",sample_image_urls[index%sample_image_urls.length]);

        // detail
        $(".detail .headline span.display").text(current_data['name']);
        $(".detail .content span.display").text(current_data['name'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['name'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['body']);
        $(".detail .image img").attr("src",sample_image_urls[index%sample_image_urls.length]);
        $(".original a").attr("href",sample_image_urls[index%sample_image_urls.length]);
    }

    function populatePrevious() {
        if(index === 0) {
            $(".previous .headline span.display").text($(".previous .headline span.backup").text());
        } else {
            previous_data = saved_data[index - 1];
            $(".previous .headline span.display").text(previous_data['name']);            
        }
    }

    function populateNext() {
        if(index === (total_data - 1)) {
            $(".next .headline span.display").text($(".next .headline span.backup").text());
        } else {
            next_data = saved_data[index + 1];
            $(".next .headline span.display").text(next_data['name']);            
        }
    }

    function getData() {
        page_loaded++;

        $.ajax({
            url: data_url,
            dataType: 'json',
            async: (page_loaded > 1),
            success: function( data ) {
                saved_data = saved_data.concat(data);
                total_data = saved_data.length;
            }
        });
    }

    navigator.geolocation.getCurrentPosition(
        function(position) { alert("Lat: " + position.coords.latitude + "\nLon: " + position.coords.longitude); },
        function(error){ alert(error.message); },
        { enableHighAccuracy: false, timeout : 55000 }
    );

    var watchId = navigator.geolocation.watchPosition(geo_success, geo_error, { maximumAge: 5000, timeout: 5000, enableHighAccuracy: true });

function geo_error(error){
    //comment
    alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}
 
function geo_success(position) {
  alert(position);   alert(position.coords);   alert(position.coords.latitude);   
  }

    function onPositionSuccess(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
            location.lat = position.coords.latitude;
            location.lng = position.coords.longitude;
            $(".debug span").text(location.lat + " " + location.lng)
    };
});
