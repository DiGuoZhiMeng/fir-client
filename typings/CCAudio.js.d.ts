declare namespace cc {
    namespace audioEngine {
        function end();

        function getEffectsVolume(): Number;

        function getMusicVolume(): Number;

        function isMusicPlaying(): Boolean;

        function pauseAllEffects();

        function pauseEffect(audio: Number);

        function pauseMusic();

        function playEffect(url: String, loop: Boolean): Number | null;

        function playMusic(url: String, loop: Boolean);

        function resumeAllEffects();

        function resumeEffect(audio: Number);

        function resumeMusic();

        function rewindMusic();

        function setEffectsVolume(volume: Number);

        function setMusicVolume(volume: Number);

        function stopAllEffects();

        function stopEffect(audio: Number);

        function stopMusic(releaseData?: Boolean);

        function unloadEffect(url: String);

        function willPlayMusic(): Boolean;

    }

}
