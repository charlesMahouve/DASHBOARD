/* try {
    //my code
} catch (error) {
   window.open(`https://stackoverflow.com/search?q=${error.message}`,'_blank');
}
*/

function loadAllWidgets() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/loadWidget", true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var widgets = JSON.parse(xhr.responseText)
            for (var i = 0; i < widgets.length; i++) {
                if (widgets[i].widgetName == "youtube") {
                    if (widgets[i].widgetRole == "loadVideo") {
                        videos(widgets[i].widgetContent)
                    } else if (widgets[i].widgetRole == "getVideoViews") {
                        views(widgets[i].widgetContent)
                    } else if (widgets[i].widgetRole == "getVideoLikesDislikes") {
                        LikesandDislikes(widgets[i].widgetContent)
                    }
                } else if (widgets[i].widgetName == "weather") {
                    if (widgets[i].widgetRole == "getWeatherByCity") {
                        weather(widgets[i].widgetContent)
                    }
                } else if (widgets[i].widgetName == "steam") {
                    if (widgets[i].widgetRole == "getPlayerInformation") {
                        steam(widgets[i].widgetContent)
                    }
                } else if (widgets[i].widgetName == "cinema") {
                    if (widgets[i].widgetRole == "getMovieInformation") {
                        movies(widgets[i].widgetContent)
                    }
                }
            }
        }
    }
    xhr.send()
}