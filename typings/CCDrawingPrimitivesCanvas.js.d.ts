declare namespace cc {

    class CanvasContextWrapper extends CanvasRenderingContext2D {
    }

    class DrawingPrimitiveCanvas extends cc.Class {
        constructor(renderContext: CanvasRenderingContext2D);

        ctor(renderContext: CanvasRenderingContext2D);
        ctor(renderContext: cc.CanvasContextWrapper);

        drawCardinalSpline(config: Array<any>, tension: Number, segments: Number);

        drawCatmullRom(points: Array<any>, segments: Number);

        drawCircle(center: cc.Point, radius: Number, angle: Number, segments: Number, drawLineToCenter?: Boolean);

        drawColorBall(ctx: cc.CanvasContextWrapper, radius: Number, color: cc.Color);

        drawCubicBezier(origin: cc.Point, control1: cc.Point, control2: cc.Point, destination: cc.Point, segments: Number);

        drawImage(image: HTMLImageElement | HTMLCanvasElement, sourcePoint: cc.Point, sourceSize: cc.Size, destPoint: cc.Point, destSize: cc.Size);

        drawLine(origin: cc.Point, destination: cc.Point);

        drawPoint(point: cc.Point, size: Number);

        drawPoints(points: Array<any>, numberOfPoints: Number, size: Number);

        drawPoly(vertices: Array<any>, numOfVertices: Number, closePolygon: Boolean, fill?: Boolean);

        drawQuadBezier(origin: cc.Point, control: cc.Point, destination: cc.Point, segments: Number);

        drawRect(origin: cc.Point, destination: cc.Point);

        drawSolidPoly(polygons: Array<any>, numberOfPoints: Number, color: cc.Color);

        drawSolidRect(origin: cc.Point, destination: cc.Point, color: cc.Color);

        drawStar(ctx: cc.CanvasContextWrapper, radius: Number, color: cc.Color);

        fillText(strText: String, x: Number, y: Number);

        setDrawColor(r: Number, g: Number, b: Number, a: Number);

        setLineWidth(width: Number);

        setPointSize(pointSize: Number);

    }

}
