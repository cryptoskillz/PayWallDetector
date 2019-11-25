var urls;

function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}
$(document).ready(function() {
    var jsonUrl = chrome.runtime.getURL('/urls.json');
    $.get(jsonUrl, function(urlsJson) {
        urls = urlsJson["urls"].join(',');
    });
    $('body').on('mouseenter', 'a', function(e) {
        if (this.href != '#') {
            //console.log("href"+this.href)
            var uri = '';
            uri = $.url.parse(this.href);
            uri = uri.host;
            if (uri == 't.co') {
                
                var res = isURL($(this).text())
                console.log(res);
                if (res == false) {
                    var findURL = $(this).html()
                    var start_pos = findURL.indexOf('</g></svg></span><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">') + 1;
                    var end_pos = findURL.indexOf('</span></span></div></div></div>', start_pos);
                    var host = findURL.substring(start_pos, end_pos)
                    host = host.replace(/(<([^>]+)>)/ig, "");
                    host = host.replace('/g>', "");
                    host = "https://" + host + "/";
                } else {
                    //todo check if http / httpds ids there
                    host = "https://" + $(this).text() + "/";
                }
                console.log("1" + host);
            } else {
                uri = $.url.parse(this.href);
                host = uri.host;
            }
            console.log("2" + host);
            if (urls.includes(host)) {
                $(this).append('<i class="money-build-icon">');
            }
        }
    }).on('mouseleave', 'a', function(e) {
        $(this).find('.money-build-icon').remove();
    })
});