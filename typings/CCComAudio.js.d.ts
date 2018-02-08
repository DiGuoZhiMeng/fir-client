declare namespace ccs {
    class ComAudio extends ccs.Component {
        constructor();

        ctor();
        ctor();

        end();

        getBackgroundMusicVolume(): Number;

        getEffectsVolume(): Number;

        getFile(): String;

        init(): Boolean;

        isBackgroundMusicPlaying(): Boolean;

        isLoop(): Boolean;

        onExit();

        pauseAllEffects();

        pauseBackgroundMusic();

        pauseEffect(soundId: Number);

        playBackgroundMusic(pszFilePath?: String, loop?: Boolean);

        playEffect(pszFilePath?: String, loop?: Boolean): Boolean;

        preloadBackgroundMusic(pszFilePath: String);

        preloadEffect(pszFilePath: String);

        resumeAllEffects();

        resumeBackgroundMusic();

        resumeEffect(soundId: Number);

        rewindBackgroundMusic();

        setBackgroundMusicVolume(volume: Number);

        setEffectsVolume(volume: Number);

        setFile(pszFilePath: String);

        setLoop(loop: Boolean);

        stopAllEffects();

        stopBackgroundMusic(releaseData: String);

        stopEffect(soundId: Number);

        unloadEffect(pszFilePath: String);

        willPlayBackgroundMusic(): Boolean;

    }

}
