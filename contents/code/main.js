workspace.clientFullScreenSet.connect(function(client, fullscreen, user) {
    if (fullscreen) {
        client.opacity = 1.0;
    } else {
        if (client.active) {
            client.opacity = 0.9;
        } else {
            client.opacity = 0.8;
        }
    }
    
    client.activeChanged.connect(function() {
        if (client.active) {
            if (fullscreen) {
                client.opacity = 1.0;
            } else {
                client.opacity = 0.9;
            }
        } else {
            client.opacity = 0.8;
        }
    });
});
