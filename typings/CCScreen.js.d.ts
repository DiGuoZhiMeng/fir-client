declare namespace cc {
    namespace screen {
        function autoFullScreen(element: Element, onFullScreenChange: Function);

        function exitFullScreen(): Boolean;

        function fullScreen(): Boolean;

        function init();

        function requestFullScreen(element: Element, onFullScreenChange: Function);

    }

}
