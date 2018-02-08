declare namespace cc {
    class Component extends cc.Class {
        constructor();

        ctor();
        ctor();

        getName(): String;

        getOwner(): any;

        init(): Boolean;

        isEnabled(): Boolean;

        onEnter();

        onExit();

        serialize(reader);

        setEnabled(enable);

        setName(name: String);

        setOwner(owner);

        update(delta);

    }

}
