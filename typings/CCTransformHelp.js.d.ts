declare namespace ccs {
    class TransformHelp {
        constructor();

        ctor();

        static matrixToNode(matrix: cc.AffineTransform, node: ccs.BaseData);

        static nodeConcat(target: ccs.BaseData, source: ccs.BaseData);

        static nodeSub(target: ccs.BaseData, source: ccs.BaseData);

        static nodeToMatrix(node: ccs.BaseData, matrix: cc.AffineTransform);

        static transformFromParent(bone: ccs.BaseData, parentNode);

    }

}
