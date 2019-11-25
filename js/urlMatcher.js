var urls;
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

                //todo: check if this text is a URL and if it is then use it like this  host = "https://"+this.text+"/";

                //if it is not this is an example https://twitter.com/TheBlock__/status/1198814070813732865 you can extract the root url form the span between ... and /
                //<span class="css-901oao css-16my406 r-1qd0xha r-ad9z0x r-bcqeeo r-qvutc0">theblockcrypto.com</span>
                //you could also make an ajax call to the URL shortner URL but when I tried this I was getting CORS error from chrome
                //once you have it just set it as host.

               
            } else {
                uri = $.url.parse(this.href);
                host = uri.host;
            }

            console.log(host);
            if (urls.includes(host)) {
                $(this).append('<i class="money-build-icon">');
            }
        }
    }).on('mouseleave', 'a', function(e) {
        $(this).find('.money-build-icon').remove();
    })
});