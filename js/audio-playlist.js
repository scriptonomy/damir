//<![CDATA[
    $(document).ready(function(){
        "use strict";
        new jPlayerPlaylist({
            jPlayer: "#musica-jquery-jplayer",
            cssSelectorAncestor: "#musica-audio-player-container"
        }, [
            { 
                title:"Iron maiden ", 
                artist:"<span class='music-time'>04:27</span>",
                mp3:"audio/guitar-tune.mp3",
                oga:"audio/guitar-tune.ogg",
                poster: "images/home/poster1.jpg",
                
            }
        ], {
            playlistOptions: {
                autoPlay: true,
                loopOnPrevious: true,
                shuffleOnLoop: true,
                enableRemoveControls: true,
                displayTime: "show",
                freeItemClass: "jp-playlist-item-free",
            },
            swfPath: "js/jquery.jplayer.swf",
            supplied: "oga, mp3",
            wmode: "window",
            useStateClassSkin: true,
            autoBlur: true,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            volume: 1,
        });
    
    
    
    });
    //]]>