declare namespace cc {
    class TableView extends cc.ScrollView {
        constructor();

        ctor();

        dataSource;
        delegate;
        verticalFillOrder: Number;

        cellAtIndex(idx);

        ctor(dataSource, size, container);

        dequeueCell(): TableViewCell;

        getDataSource();

        getDelegate();

        insertCellAtIndex(idx);

        reloadData();

        removeCellAtIndex(idx);

        setVerticalFillOrder(fillOrder);

        updateCellAtIndex(idx);

    }

    class TableViewCell extends cc.Node {
        constructor();

        ctor();

        objectId: Number;

        getIdx();

        reset();

    }

}
