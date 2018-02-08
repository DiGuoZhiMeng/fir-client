declare namespace cc {
    class ComponentContainer extends cc.Class {
        constructor();

        ctor();

        add(component: cc.Component): Boolean;

        ctor(node);

        getComponent(name): any;

        isEmpty(): Boolean;

        remove(name: String | cc.Component): Boolean;

        removeAll();

        visit(delta: Number);

    }

}
