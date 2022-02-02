workspace.clientFullScreenSet.connect(function(client, fullscreen, user) {
    var names = client.caption.split(' ');
    var isFirefox = false;
    for (var i = 0; i < names.length; i++) {
        if (names === 'Firefox')
            isFirefox = true;
    }

    if (isFirefox) {
        if (fullscreen) {
            print(client.opacity);
        } else {
            print(client.opacity);
        }
    }
});
