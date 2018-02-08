declare namespace ccui {

    enum VideoPlayer {
        PLAYING = "play",
        PAUSED = "pause",
        STOPPED = "stop",
        COMPLETED = "complete"
    }

    class VideoPlayer extends ccui.Widget {
        constructor();

        ctor();

        EventType;
        path: String;

        getURL(): String;

        isFullScreenEnabled();

        isPlaying(): Boolean;

        onPlayEvent();

        pause();

        play();

        removeEventListener(event: ccui.VideoPlayer.EventType);

        resume();

        seekTo(sec: Number);

        setEventListener(event: ccui.VideoPlayer.EventType, callback: Function);

        setFullScreenEnabled(enable: Boolean);

        setKeepAspectRatioEnabled(enable);

        setURL(address: String);

        stop();

    }

}
