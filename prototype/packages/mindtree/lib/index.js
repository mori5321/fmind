"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MindTree_settings, _MindTree_children, _MindNode_content, _MindNode_children;
class MindTree {
    constructor(settings) {
        _MindTree_settings.set(this, void 0);
        _MindTree_children.set(this, void 0);
        __classPrivateFieldSet(this, _MindTree_settings, settings, "f");
        __classPrivateFieldSet(this, _MindTree_children, [], "f");
    }
    addNode(node) {
        __classPrivateFieldGet(this, _MindTree_children, "f").push(node);
    }
    getChildren() {
        return __classPrivateFieldGet(this, _MindTree_children, "f");
    }
    getSettings() {
        return __classPrivateFieldGet(this, _MindTree_settings, "f");
    }
}
_MindTree_settings = new WeakMap(), _MindTree_children = new WeakMap();
class MindNode {
    constructor(content) {
        _MindNode_content.set(this, void 0);
        _MindNode_children.set(this, void 0);
        __classPrivateFieldSet(this, _MindNode_content, content, "f");
        __classPrivateFieldSet(this, _MindNode_children, [], "f");
    }
    getContent() {
        return __classPrivateFieldGet(this, _MindNode_content, "f");
    }
    getChildren() {
        return __classPrivateFieldGet(this, _MindNode_children, "f");
    }
}
_MindNode_content = new WeakMap(), _MindNode_children = new WeakMap();
