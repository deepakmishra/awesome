var data_url = "http://jsonplaceholder.typicode.com/comments";
var sample_image_urls = [
    "http://blogs-images.forbes.com/chriswright/files/2014/06/modi.jpg",
    "http://static.dnaindia.com/sites/default/files/2014/05/23/238900-modi-5.jpg",
    "http://im.rediff.com/news/2011/mar/14slid1.jpg",
    "http://im.rediff.com/sports/2015/jul/13paes2.jpg"
    /*    
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/keibler-ass.jpg",
        "http://www.pwpix.net/wp/wp-content/uploads/2015/03/paige-25617312-620x400.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/torrie-beach.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/maryse-hot.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/maria-kanellis-beach.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/aksana-hot.jpg",
        "http://s10.postimg.org/dzg8pycll/0_Candice_Michelle_Nude_Playboy_Cover.jpg",
        "http://s10.postimg.org/txktlpydl/0_Chyna_Nude_Playboy_Cover.jpg",
        "http://s10.postimg.org/3vrzd6csp/0_Maria_Kanellis_Nude_Playboy_Cover.jpg",
        "http://s10.postimg.org/wyautqog9/0_Maryse_Nude_Playboy_Cover.jpg",
        "http://s2.postimg.org/v5b149lqh/kelly_dyer_sitting_on_bike_white_bikini.jpg",
        "http://s10.postimg.org/qpgc8oc3t/0_Chyna_Nude_Playboy_Cover_b.jpg",
        "http://s10.postimg.org/sq2qz4zt5/0_Sable_Nude_Playboy_Cover.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/trish-baby-shoot.jpg",
        "http://s2.postimg.org/8w1qyzs5l/theresa_correa_red_bikini_laying_down.jpg",
        "http://s2.postimg.org/ceqp2zc95/Jessica_Jane_topless_hand_bra.jpg",
        "http://s2.postimg.org/ncym0w0uh/april_gutierrez_topless_hand_bra.jpg",
        "http://s2.postimg.org/acu62wksp/Jennifer_Ellison_bent_over_boobs.jpg",
        "http://s2.postimg.org/4j82lkzpl/Melyssa_Grace_hanging_boobs.jpg",
        "http://s2.postimg.org/cghtfe6rt/Denise_Milani_boobs_bathing_suit.jpg",
        "http://s2.postimg.org/fnb6502fd/brenda_lynn_shower.jpg",
        "http://s2.postimg.org/hbgu80edl/Ayanna_Jordan_ass.jpg",
        "http://s2.postimg.org/3st6eiq15/Christine_Mendoza_office_work.jpg",
        "http://s2.postimg.org/a130rqw5l/green_bikini_boobs.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/10/bella-twins-hot.jpg",
        "http://s27.postimg.org/x4fq7i3xv/Torrie_Wilson_Nude_Playboy.jpg",
        "http://s27.postimg.org/mf21f8s4z/WWE_Maria...ude_Playboy.jpg",
        "http://s27.postimg.org/bcwygsy2b/wwe_taryn_terrell_nude_diva.jpg",
        "http://i57.tinypic.com/2w35gld.jpg",
        "http://image.forumcommunity.it/9/3/9/9/0/6/9/1433781739.jpg",
        "http://s27.postimg.org/y2w39sh9v/wwe_lana_nude_tits.jpg",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/02/Sable-Torrie-Kiss.gif",
        "http://cdn3.whatculture.com/wp-content/uploads/2014/08/nattie-bikini.jpg",
        "http://s10.postimg.org/u7po7y5sl/Gail_Kim_Nude_Photosaaaaa.jpg",
        "http://www.bestnudeceleb.com/matrix/celeb1275/pics/maryse-ouellet-06.jpg",
        "http://www.tittietittietittie.com/wwe-divas-naked/images/1maryse_nude1.jpg",
        "http://2.bp.blogspot.com/-XLjc3w5HD_k/T7YIMKONNmI/AAAAAAAA0ug/-AyxLs7Rle0/s1600/Sunny-Leone-Topless-Photo-Shoot-Photos-170.jpg",
        "http://i.imgur.com/B8ihiod.jpg",
        "http://i.imgur.com/8Cixq0W.jpg",
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
        "http://i.imgur.com/cUQFZgb.jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2f30.media.tumblr.com%2ftumblr_lcfn4veBDo1qbu9bqo1_400.jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2fupload.lushstories.com%2f1108616401-Asian+(3).jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2fupload.lushstories.com%2f1005901317-asian+(6).jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2fupload.lushstories.com%2f2008046265-asian+(7).jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2fupload.lushstories.com%2f416295625-asian+(8).jpg",
        "https://www.lushstories.com/services/imageproxy.ashx?r=http%3a%2f%2fupload.lushstories.com%2f1330491456-Asian+(9).jpg",
        "http://fap.to/images/49/646130397/celebrities-porn/WWE-Diva-Maryse-Ouellet-Naked-4.jpg"
    */
];
var sample_source_urls = [
    "http://www.financialexpress.com/article/economy/global-warming-may-eat-up-200-bn-crops-globally-by-2050-study/100410/",
    "http://www.dnaindia.com/money/report-mega-projects-worth-rs-12-lakh-crore-ready-for-narendra-modi-s-approval-1990886",
    "http://www.forbes.com/sites/chriswright/2014/05/26/modis-to-do-list-priorities-for-a-new-india/",
    "http://www.rediff.com/news/column/ls-election-column-apoorvanand-is-narendra-modi-a-fascist/20140421.htm",
    "http://track.rediff.com/click?url=___http%3a%2f%2fwww.rediff.com%2fmovies%2freport%2fbirthday-special-just-how-well-do-you-know-lyricist-vairamuthu%2f20150713.htm___&service=news&clientip=180.149.59.151&source=mostrecent&type=recent",
    "http://www.rediff.com/sports/report/this-wimbledon-title-is-among-my-most-special-wins-leander-paes-hingis/20150713.htm",
    "http://track.rediff.com/click?url=___http%3a%2f%2fwww.rediff.com%2fsports%2freport%2fpix-10-best-sports-photos-of-the-week-sania-djokovic-gasquet-sienna-miller-moto-gp-iker-casillas-ashes%2f20150713.htm___&service=news&clientip=180.149.59.151&source=mostrecent&type=recent",
    "http://www.hindustantimes.com/india-news/up-top-cop-suspended-for-taking-fight-against-mulayam-to-centre/article1-1368932.aspx",
    "http://www.hindustantimes.com/india-news/pak-high-commission-invites-kashmiri-separatists-for-eid-milan/article1-1368855.aspx",
    "http://www.hindustantimes.com/india-news/dress-code-may-force-muslim-girls-to-sit-out-of-medical-test/article1-1368904.aspx",
    "http://www.financialexpress.com/article/miscellaneous/pakistan-high-commission-invites-kashmiri-separatist-leaders-to-celebrate-eid-milan/100374/",
    "http://timesofindia.indiatimes.com/business/india-business/Market-cheers-Greece-deal-sensex-surges-300-points/articleshow/48054797.cms",
    "http://timesofindia.indiatimes.com/city/mumbai/Lab-to-check-if-Leptospirosis-strain-has-mutated/articleshow/48061455.cms",
    "http://timesofindia.indiatimes.com/world/us/Hillary-Clintons-economic-plan-would-lead-US-to-Greece-Bobby-Jindal-says/articleshow/48059806.cms",
    "http://timesofindia.indiatimes.com/world/europe/Greek-banks-to-remain-shut-beyond-Monday-Finance-ministry-source/articleshow/48057322.cms",
    "http://timesofindia.indiatimes.com/business/india-business/Retail-inflation-nudges-up-to-5-4-in-June/articleshow/48055114.cms",
    "http://timesofindia.indiatimes.com/city/delhi/Mob-beats-up-2-Delhi-cops-for-flagging-traffic-rules/articleshow/48061249.cms",
    "http://timesofindia.indiatimes.com/world/rest-of-world/Pope-says-he-wasnt-offended-by-Communist-crucifix/articleshow/48059797.cms",
    "http://blogs.timesofindia.indiatimes.com/random-harvest/why-a-sania-mirza-win-always-has-a-socio-cultural-subtext/",
    "http://timesofindia.indiatimes.com/india/India-investigating-breach-of-space-agencys-Antrix-website/articleshow/48059403.cms",
    "http://timesofindia.indiatimes.com/india/Nashik-Kumbh-Mela-to-start-tomorrow-CM-Rajnath-to-be-present/articleshow/48059334.cms",
    "http://timesofindia.indiatimes.com/india/Vijay-Mallya-suffers-legal-setback-in-F1-car-ad-case/articleshow/48058401.cms"
];
var geolocation = {};
var total_data = 0;
var page_loaded = 0;
var saved_data = [];
var index = 0;
var current_data, previous_data, next_data;
var filters = {};
var filter_order = [];
$(document).on("pagecreate", "#home", function() {
    if (!navigator.onLine) {
        alert("You are not connected to internet");
        $(document).on('click', function() {
            if (navigator.onLine) {
                location.reload();
            }
        });
        return;
    }
    $.mobile.changePage.defaults.allowSamePageTransition = true;
    $.mobile.allowCrossDomainPages = true;
    $.mobile.phonegapNavigationEnabled = true;
    navigator.geolocation.watchPosition(geo_success, geo_error, {
        maximumAge: 3600000,
        timeout: 10000,
        enableHighAccuracy: false
    });
    getData(false);
    populatePage();
    $("#nav-rate-share").attr("href", getRateShareLink);
    $(".previous").on("click", showPrevious);
    $(".next").on("click", showNext);
    $(".current").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction.toLowerCase() === 'down') {
                showPrevious();
            } else if (direction.toLowerCase() === 'up') {
                showNext();
            } else {
                $.mobile.changePage("#detail", {
                    transition: "slide",
                    reverse: (direction.toLowerCase() === 'right')
                });
            }
        }
    });
    $(".detail, .center").on("swipeleft", function() {
        $.mobile.changePage("#home", {
            transition: "slide"
        });
    });
    $(".detail, .center").on("swiperight", function() {
        $.mobile.changePage("#home", {
            transition: "slide",
            reverse: true
        });
    });
    $(".navpanel a, .original a").on("click", function() {
        href = $(this).attr("href");
        if (href[0] === '#') {
            $("#search-box").focus();
            $.mobile.changePage(href, {
                transition: "slide",
                reverse: true
            });
        } else {
            window.open(href, '_self', 'location=yes');
        }
        return false;
    });
    $("#category, #geography").each(function() {
        var filter_key = $(this).attr("id");
        $(this).find(".center a").on("click", function() {
            var filter_value = $(this).text();
            $("#" + filter_key).find(".center .selection").text(filter_value);
            applyFilter(filter_key, filter_value);
            return false;
        });
    });
    $("#search").each(function() {
        var filter_key = $(this).attr("id");
        $(this).on("pageshow", function() {
            $("#search-box").on("change keyup", function() {
                if ($(this).val().length === 0) {
                    $("#search .center a").addClass("ui-disabled");
                } else {
                    $("#search .center a").removeClass("ui-disabled");
                }
            });
            $("#search-box").val(filters['filter_key']);
            $("#search-box").trigger("change");
        });
        $(this).find(".center a").on("click", function() {
            var filter_value = $("#search-box").val();
            applyFilter(filter_key, filter_value);
            return false;
        });
    });
    $(".adsbygoogle").each(function() {
        (adsbygoogle = window.adsbygoogle || []).push({});
    });
});

function showPrevious() {
    if (index > 0) {
        index--;
        populatePage();
        $.mobile.changePage("#home", {
            transition: "slidedown"
        });
    }
    return false;
}

function showNext() {
    if (index < (total_data - 1)) {
        index++;
        populatePage();
        $.mobile.changePage("#home", {
            transition: "slideup"
        });
        if (index > (total_data - 5)) {
            getData(false);
        }
        if (index % 2 === 0) {
            populateCache();
        }
    }
    return false;
}

function populatePage() {
    populateCurrent();
    populatePrevious();
    populateNext();
}

function populateCache() {
    if (index < total_data - 3) {
        setTimeout(function() {
            (new Image()).src = sample_image_urls[(index + 2) % sample_source_urls.length];
        }, 500);
        setTimeout(function() {
            (new Image()).src = sample_image_urls[(index + 3) % sample_source_urls.length];
        }, 1000);
    }
}

function populateCurrent() {
    if (index > -1 && total_data > 0) {
        current_data = saved_data[index];
        // current
        $(".current .headline span").text(current_data['name']);
        $(".current .content span").text(current_data['body'] + " " + current_data['body'] + " " + current_data['body']);
        $(".current .image img").attr("src", sample_image_urls[index % sample_image_urls.length]);
        // detail
        $(".detail .headline span").text(current_data['name']);
        $(".detail .content span").text(current_data['name'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['name'] + " " + current_data['body'] + " " + current_data['body'] + " " + current_data['body']);
        $(".detail .image img").attr("src", sample_image_urls[index % sample_image_urls.length]);
        $(".original a").attr("href", sample_source_urls[index % sample_source_urls.length]);
        $(".original a").text(sample_source_urls[index % sample_source_urls.length].replace("http://", "").replace("https://", "").split("/")[0]);
    }
}

function populatePrevious() {
    if (index < 1) {
        $(".previous span.display").text($(".previous span.backup").text());
    } else {
        previous_data = saved_data[index - 1];
        $(".previous span.display").text(previous_data['name'] + " " + previous_data['name']);
    }
}

function populateNext() {
    if (index === (total_data - 1)) {
        $(".next span.display").text($(".next span.backup").text());
    } else {
        next_data = saved_data[index + 1];
        $(".next span.display").text(next_data['name'] + " " + next_data['name']);
    }
}

function getRateShareLink() {
    var rateShareLink = "http://www.awesummly.com";
    // Check which platform
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        rateShareLink = "https://itunes.apple.com/us/app/YOUR-APP-SLUG-HERE/id000000000?mt=8&uo=4";
    } else if (navigator.userAgent.match(/Android/i)) {
        rateShareLink = "market://details?id=com.and.awesummly";
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
        rateShareLink = "http://appworld.blackberry.com/webstore/content/<applicationid>";
    }
    return rateShareLink;
}

function getData(reinit) {
    if (navigator.onLine) {
        reinit = (typeof(reinit) != 'undefined' && reinit);
        $.ajax({
            url: data_url,
            dataType: 'json',
            data: filters,
            async: (page_loaded > 0 && !reinit),
            success: function(data) {
                if (data.length > 0) {
                    if (reinit) {
                        saved_data = [];
                        page_loaded = 0;
                        index = 0;
                    }
                    saved_data = saved_data.concat(data);
                    total_data = saved_data.length;
                    page_loaded++;
                } else {
                    alert("No result in found in your selection");
                }
            }
        });
    } else {
        alert("You are not connected to internet");
    }
}

function applyFilter(filter_key, filter_value) {
    var filter_order_index = filter_order.indexOf(filter_key);
    if (filter_order_index != -1) {
        filter_order.splice(filter_order_index, 1);
    }
    filter_order.push(filter_key);
    filters['filter_order'] = filter_order.join();
    if (filters[filter_key] != filter_value) {
        // alert(filter_key + " : " + filter_value);
        filters[filter_key] = filter_value;
        getData(true);
        populatePage();
    }
    $.mobile.changePage("#home", {
        transition: "slide",
        reverse: true
    });
}

function geo_error(error) {
    // alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function geo_success(position) {
    geolocation.latitude = position.coords.latitude;
    geolocation.longitude = position.coords.longitude;
    filters['location'] = geolocation.latitude + "," + geolocation.longitude;
}
