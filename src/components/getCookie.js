export default function getCookie(cookieName) {
    var cookieArr = document.cookie.split(';')

    for (var i =0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split('=')

        if (cookieName == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1])
        }
    }
    return null
}