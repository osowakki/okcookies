(function() {
    'use strict';
    console.log(window.location.hostname.replace("www.", ""));
    switch(window.location.hostname.replace("www.", "")) {

    case 'google.co.uk':
        document.getElementById('cnsh').style.display = 'none';
        break;//2018-10-31

    case 'facebook.com':
        document.querySelector('[data-testid=cookie-policy-banner]').style.display = 'none';
        break;//2018-10-31

    case 'google.com':
        document.getElementById('cnsh').style.display = 'none';
        break;//2018-10-31

    case 'amazon.co.uk':
        (document.getElementById('desktop-banner-stripe').textContent.indexOf('cookies')>-1)?document.getElementById('desktop-banner-stripe').style.display = 'none':'';
        break;//2018-10-31

    case 'youtube.com':
        document.getElementsByTagName('ytd-consent-bump-renderer')[0].style.display = 'none';
        break;//2018-10-31

    case 'ebay.co.uk':
        document.getElementById('gdpr-banner').style.display = 'none';
        break;//2018-10-31

    case 'bbc.co.uk':
        document.getElementById('bbcprivacy').style.display = 'none';
        break;//2018-10-31

    case 'guce.oath.com':
        document.querySelector('[name=agree]').click();
        break;//2018-10-31

    case 'twitter.com':
        document.getElementsByClassName('eu-cookie-notice')[0].style.display = 'none';
        break;//2018-10-31

    default:
        console.log("Default");
}
})();