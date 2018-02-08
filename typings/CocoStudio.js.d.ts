declare namespace ccs {

    enum TweenType {

        CUSTOM_EASING = -1,
        LINEAR = 0,

        SINE_EASEIN = 1,
        SINE_EASEOUT = 2,
        SINE_EASEINOUT = 3,

        QUAD_EASEIN = 4,
        QUAD_EASEOUT = 5,
        QUAD_EASEINOUT = 6,

        CUBIC_EASEIN = 7,
        CUBIC_EASEOUT = 8,
        CUBIC_EASEINOUT = 9,

        QUART_EASEIN = 10,
        QUART_EASEOUT = 11,
        QUART_EASEINOUT = 12,

        QUINT_EASEIN = 13,
        QUINT_EASEOUT = 14,
        QUINT_EASEINOUT = 15,

        EXPO_EASEIN = 16,
        EXPO_EASEOUT = 17,
        EXPO_EASEINOUT = 18,

        CIRC_EASEIN = 19,
        CIRC_EASEOUT = 20,
        CIRC_EASEINOUT = 21,

        ELASTIC_EASEIN = 22,
        ELASTIC_EASEOUT = 23,
        ELASTIC_EASEINOUT = 24,

        BACK_EASEIN = 25,
        BACK_EASEOUT = 26,
        BACK_EASEINOUT = 27,

        BOUNCE_EASEIN = 28,
        BOUNCE_EASEOUT = 29,
        BOUNCE_EASEINOUT = 30,

        TWEEN_EASING_MAX = 10000
    }

    let ANIMATION_TYPE_LOOP_BACK;
    let ANIMATION_TYPE_LOOP_FRONT;
    let ANIMATION_TYPE_MAX;
    let ANIMATION_TYPE_NO_LOOP;
    let ANIMATION_TYPE_SINGLE_FRAME;
    let ANIMATION_TYPE_TO_LOOP_BACK;
    let ANIMATION_TYPE_TO_LOOP_FRONT;
    let BLEND_TYPE_ADD: Number;
    let BLEND_TYPE_ALPHA: Number;
    let BLEND_TYPE_DARKEN: Number;
    let BLEND_TYPE_DIFFERENCE: Number;
    let BLEND_TYPE_ERASE: Number;
    let BLEND_TYPE_HIGHLIGHT: Number;
    let BLEND_TYPE_INVERT: Number;
    let BLEND_TYPE_LAYER: Number;
    let BLEND_TYPE_LIGHTEN: Number;
    let BLEND_TYPE_MULTIPLY: Number;
    let BLEND_TYPE_NORMAL: Number;
    let BLEND_TYPE_OVERLAY: Number;
    let BLEND_TYPE_SCREEN: Number;
    let BLEND_TYPE_SUBTRACT: Number;
    let cocostudioVersion;
    let DISPLAY_TYPE_ARMATURE: Number;
    let DISPLAY_TYPE_PARTICLE: Number;
    let DISPLAY_TYPE_SPRITE: Number;
    let DisplayManager;
    let FRAME_TYPE_FADE;
    let FRAME_TYPE_MAX;
    let FRAME_TYPE_MOVE;
    let FRAME_TYPE_ROTATE;
    let FRAME_TYPE_SCALE;
    let FRAME_TYPE_TINT;
    let FrameEaseType;
    let MovementEventType;
    let TweenType: Object;
    let uiReader;

    function armatureVersion(): String;

    function load(file: String, path?: String);

    function loadWithVisibleSize(file: String, path?: String);

    function registerTriggerClass(className: String, func: Function);

    function sendEvent(event: Number);


    class Class {
        constructor();

        ctor();

    }

    class Component extends ccs.Class {
        constructor();

        ctor();

    }

    class Node extends ccs.Class {
        constructor();

        ctor();

    }

    class Sprite extends ccs.Class {
        constructor();

        ctor();

    }

}
