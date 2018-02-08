declare namespace ccs {
    class ColliderBody extends ccs.Class {
        constructor();

        ctor();

        colliderFilter;
        contourData;
        shape;

        getCalculatedVertexList(): Array<any>;

        getColliderFilter();

        getContourData();

        getShape();

        setColliderFilter(colliderFilter: ccs.ColliderFilter);

        setContourData(contourData: ccs.ContourData);

        setShape(shape: any);

    }

    class ColliderDetector extends ccs.Class {
        constructor(bone?: ccs.Bone);

        ctor(bone?: ccs.Bone);

        active: Boolean;
        body: Object;
        colliderFilter;

        addContourData(contourData: ccs.ContourData);

        addContourDataList(contourDataList: Array<any>);

        getColliderFilter();

        removeAll();

        removeContourData(contourData);

        setColliderFilter(filter: ccs.ColliderFilter);

    }

    class ColliderFilter extends ccs.Class {
        constructor();

        ctor();

    }

}
