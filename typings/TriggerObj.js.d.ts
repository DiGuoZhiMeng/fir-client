declare namespace ccs {
    class BaseTriggerAction extends ccs.Class {
        constructor();

        ctor();
        ctor();

        done();

        init(): Boolean;

        removeAll();

        serialize(jsonVal);

    }

    class BaseTriggerCondition extends ccs.Class {
        constructor();

        ctor();
        ctor();

        detect(): Boolean;

        init(): Boolean;

        removeAll();

        serialize(jsonVal);

    }

    class TriggerObj extends ccs.Class {
        constructor();

        ctor();

        detect(): Boolean;

        done();

        getEvents(): null | Array<any>;

        getId(): Number;

        init(): Boolean;

        removeAll();

        serialize(jsonVal);

        setEnable(enable: Boolean);

    }

}
