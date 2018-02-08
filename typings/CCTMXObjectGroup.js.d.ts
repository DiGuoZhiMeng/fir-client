declare namespace cc {
    class TMXObjectGroup extends cc.Class {
        constructor();

        ctor();

        groupName: String;
        properties: Array<any>;

        ctor();

        getGroupName(): String;

        getObject(objectName: String): Object | null;

        getObjects(): Array<any>;

        getPositionOffset();

        getProperties(): Array<any>;

        propertyNamed(propertyName: String): Object;

        setGroupName(groupName: String);

        setObjects(objects: Object);

        setPositionOffset(offset: cc.Point);

        setProperties(Var: Object);

    }

}
