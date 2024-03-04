var favchannels = [
    { img_url: "/Bhavya shah/img/channels/Discovery.jpg"},
    { img_url: "/Bhavya shah/img/channels/Docubay.jpg"},
    { img_url: "/Bhavya shah/img/channels/Erosnow.jpg"},
    { img_url: "/Bhavya shah/img/channels/Hayu.jpg"},
    { img_url: "/Bhavya shah/img/channels/hoichoi.jpg"},
    { img_url: "/Bhavya shah/img/channels/Lionsgateplay.jpg"},
    { img_url: "/Bhavya shah/img/channels/MANORAMAMAX.jpg"},
    { img_url: "/Bhavya shah/img/channels/Mubi.jpg"},
    { img_url: "/Bhavya shah/img/channels/ShortsTV.jpg"},


];

favchannels.map(function (elem){
    var div = document.createElement('div');
    div.setAttribute("class", "channelDiv");

    var image = document.createElement("img");
    image.setAttribute ("src",elem.img_url);

    div.append(image);
    document.querySelector(".ChannelBtn").append(div);
});

localStorage.setItem("favchannels", JSON.stringify(favchannels));
