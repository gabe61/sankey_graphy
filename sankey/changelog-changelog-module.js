(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changelog-changelog-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of subscriptions to the move event. Used to avoid
         * hitting the zone if the consumer didn't subscribe to it.
         */
        this._moveEventSubscriptions = 0;
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._moveEvents.subscribe(observer);
            _this._moveEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._moveEventSubscriptions--;
            };
        });
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find(function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (distanceX + distanceY >= _this._config.dragStartThreshold) {
                    _this._hasStartedDragging = true;
                    _this._ngZone.run(function () { return _this._startDragSequence(event); });
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                /** @type {?} */
                var transform = getTransform(activeTransform.x, activeTransform.y);
                // Preserve the previous `transform` value, if there was one. Note that we apply our own
                // transform before the user's, because things like rotation can affect which direction
                // the element will be translated towards.
                _this._rootElement.style.transform = _this._initialTransform ?
                    transform + ' ' + _this._initialTransform : transform;
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEventSubscriptions > 0) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = function (event) {
            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!_this._dragDropRegistry.isDragging(_this)) {
                return;
            }
            _this._removeSubscriptions();
            _this._dragDropRegistry.stopDragging(_this);
            if (_this._handles) {
                _this._rootElement.style.webkitTapHighlightColor = _this._rootElementTapHighlight;
            }
            if (!_this._hasStartedDragging) {
                return;
            }
            _this.released.next({ source: _this });
            if (!_this._dropContainer) {
                // Convert the active transform into a passive one. This means that next time
                // the user starts dragging the item, its position will be calculated relatively
                // to the new passive transform.
                _this._passiveTransform.x = _this._activeTransform.x;
                _this._passiveTransform.y = _this._activeTransform.y;
                _this._ngZone.run(function () { return _this.ended.next({ source: _this }); });
                _this._dragDropRegistry.stopDragging(_this);
                return;
            }
            _this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._dragDropRegistry.stopDragging(_this);
            });
        };
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map(function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); });
        (/** @type {?} */ (this))._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            this._document.body.appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._toggleNativeDragInteractions();
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            this._initialContainer.element.appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            var _a = _this._getPointerPositionOnPage(event), x = _a.x, y = _a.y;
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(x, y);
            _this.ended.next({ source: _this });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = (/** @type {?} */ (this._dropContainer))._getSiblingContainerFromPosition(this, x, y) ||
            this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left it's
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this.entered.next({ item: _this, container: (/** @type {?} */ (newContainer)) });
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
            });
        }
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = viewRef.rootNodes[0];
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ ((function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                })));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = this._placeholderRef.rootNodes[0];
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            point.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            point.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            point.x = clamp(point.x, minX, maxX);
            point.y = clamp(point.y, minY, maxY);
        }
        return point;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this.disabled || this._handles.length > 0;
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document) {
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        _dragDropRegistry.registerDropContainer(this);
        this._document = _document;
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] ? element.nativeElement : element;
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeStarted.next();
        this._isDragging = true;
        this._activeDraggables = this._draggables.slice();
        this._cacheOwnPosition();
        this._cacheItemPositions();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.entered.next({ item: item, container: this });
        this.start();
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        /** @type {?} */
        var currentIndex = this._activeDraggables.indexOf(item);
        /** @type {?} */
        var newPositionReference = this._activeDraggables[newIndex];
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            this._activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            this._activeDraggables.splice(newIndex, 0, item);
        }
        else {
            this.element.appendChild(placeholder);
            this._activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items.slice();
        items.forEach(function (item) { return item._withDropContainer((/** @type {?} */ (_this))); });
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if it's out of range.
        if (!this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        this._clientRect = this.element.getBoundingClientRect();
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            /** @type {?} */
            var clientRect = elementToMeasure.getBoundingClientRect();
            return {
                drag: drag,
                offset: 0,
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                }
            };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) { return item.getRootElement().style.transform = ''; });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        });
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = this._document.elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === this.element || this.element.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.find` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); },
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // TODO(crisbeto): prevent mouse wheel scrolling while
            // dragging until we've set up proper scroll handling.
            if (!isTouchEvent) {
                this._globalListeners.set('wheel', {
                    handler: this._preventDefaultWhileDragging,
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find(function (instance) { return instance.id === id; });
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, viewportRuler, dragDropRegistry, config, _dir, 
    /**
     * @deprecated `viewportRuler` and `dragDropRegistry` parameters
     * to be removed. Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        // @breaking-change 8.0.0 Remove null check once the paramter is made required.
        if (dragDrop) {
            this._dragRef = dragDrop.createDrag(element, config);
        }
        else {
            this._dragRef = new DragRef(element, config, _document, _ngZone, viewportRuler, dragDropRegistry);
        }
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._proxyEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map(function (item) { return item._stateChanges; }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes.rootElementSelector;
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElementSelector`. */
    /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = this.boundaryElementSelector;
        return selector ? getClosestMatchingAncestor(this.element.nativeElement, selector) : null;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     */
    /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._proxyEvents = /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function () {
            _this.ended.emit({ source: _this });
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this
            });
        });
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: DragDrop }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPlaceholder,] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragBoundary',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragDisabled',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDropRegistry, _changeDetectorRef, _dir, _group, _document, 
    /**
     * @deprecated `dragDropRegistry` and `_document` parameters to be removed.
     * Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // @breaking-change 8.0.0 Remove null check once `dragDrop` parameter is made required.
        if (dragDrop) {
            this._dropListRef = dragDrop.createDropList(element);
        }
        else {
            this._dropListRef = new DropListRef(element, dragDropRegistry, _document || document);
        }
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function (items) {
            _this._dropListRef.withItems(items.map(function (drag) { return drag._dragRef; }));
        });
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find(function (list) { return list.id === drop; }))) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            ref.lockAxis = _this.lockAxis;
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: DragDropRegistry },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: DragDrop }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return CdkDrag; }), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListEnterPredicate',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js ***!
  \*************************************************************************/
/*! exports provided: BadgeModule, MDBBadgeComponent, MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule, MdbBtnDirective, ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, CardsFreeModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent, CarouselComponent, CarouselModule, SlideComponent, CarouselConfig, ChartsModule, BaseChartDirective, CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule, CollapseComponent, CollapseModule, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownState, BsDropdownConfig, DropdownModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective, IconsModule, InputUtilitiesModule, MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputsModule, EqualValidatorDirective, MdbInputDirective, MdbInput, ModalBackdropComponent, ModalBackdropOptions, ModalOptions, MDBModalRef, ModalDirective, ModalModule, MDBModalService, ModalContainerComponent, NavbarComponent, NavbarModule, PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent, TableModule, MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig, WavesDirective, WavesModule, MDBRootModule, MDBBootstrapModule, ɵb, ɵa, ɵc, ɵd, ɵh, ɵi, ɵg, ɵj, ɵe, ɵk, ɵf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBadgeComponent", function() { return MDBBadgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbBreadcrumbComponent", function() { return MdbBreadcrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbBreadcrumbItemComponent", function() { return MdbBreadcrumbItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbBtnDirective", function() { return MdbBtnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsFreeModule", function() { return CardsFreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardComponent", function() { return MdbCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardBodyComponent", function() { return MdbCardBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardImageComponent", function() { return MdbCardImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardTextComponent", function() { return MdbCardTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardTitleComponent", function() { return MdbCardTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardFooterComponent", function() { return MdbCardFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbCardHeaderComponent", function() { return MdbCardHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChartDirective", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return CheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseComponent", function() { return CollapseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbIconComponent", function() { return MdbIconComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalDirective", function() { return FalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarDirective", function() { return FarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FasDirective", function() { return FasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabDirective", function() { return FabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputUtilitiesModule", function() { return InputUtilitiesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbErrorDirective", function() { return MdbErrorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbSuccessDirective", function() { return MdbSuccessDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbValidateDirective", function() { return MdbValidateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsModule", function() { return InputsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidatorDirective", function() { return EqualValidatorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbInputDirective", function() { return MdbInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbInput", function() { return MdbInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalRef", function() { return MDBModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalService", function() { return MDBModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTablePaginationComponent", function() { return MdbTablePaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTableRowDirective", function() { return MdbTableRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTableScrollDirective", function() { return MdbTableScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTableSortDirective", function() { return MdbTableSortDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTableDirective", function() { return MdbTableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbTableService", function() { return MdbTableService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesDirective", function() { return WavesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesModule", function() { return WavesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRootModule", function() { return MDBRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBootstrapModule", function() { return MDBBootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return LinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NavbarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NavlinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return PositioningService; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MDBBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            var customClassArr = this.color.split(' ');
            customClassArr.forEach(function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            });
        }
    };
    MDBBadgeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-badge',
                    template: "<span [attr.class]=\"class\">\n  <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MDBBadgeComponent.propDecorators = {
        default: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-default',] }],
        primary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-primary',] }],
        success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-success',] }],
        info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-info',] }],
        warning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-warning',] }],
        danger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-danger',] }],
        pill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.badge-pill',] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MDBBadgeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [MDBBadgeComponent],
                    exports: [MDBBadgeComponent]
                },] }
    ];
    return BadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBreadcrumbComponent = /** @class */ (function () {
    function MdbBreadcrumbComponent() {
    }
    MdbBreadcrumbComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-breadcrumb',
                    template: "<ol class=\"breadcrumb list-inline list-unstyled {{customClass}} text-{{textTransform}}\">\n  <ng-content></ng-content>\n</ol>\n"
                }] }
    ];
    MdbBreadcrumbComponent.propDecorators = {
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        textTransform: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbBreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBreadcrumbItemComponent = /** @class */ (function () {
    function MdbBreadcrumbItemComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MdbBreadcrumbItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._renderer.addClass(this._el.nativeElement, 'breadcrumb-item');
    };
    MdbBreadcrumbItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-breadcrumb-item',
                    template: "<li class=\"list-inline-item breadcrumb-item font-weight-{{fontWeight}}\">\n  <ng-content></ng-content>\n</li>\n"
                }] }
    ];
    /** @nocollapse */
    MdbBreadcrumbItemComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbBreadcrumbItemComponent.propDecorators = {
        fontWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbBreadcrumbItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent],
                    exports: [MdbBreadcrumbComponent, MdbBreadcrumbItemComponent]
                },] }
    ];
    return BreadcrumbModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbBtnDirective = /** @class */ (function () {
    function MdbBtnDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.color = '';
        this.rounded = false;
        this.gradient = '';
        this.outline = false;
        this.flat = false;
        this.size = '';
        this.block = false;
        this.floating = false;
    }
    /**
     * @return {?}
     */
    MdbBtnDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var colorClass = 'btn-' + this.color;
        /** @type {?} */
        var gradientClass = this.gradient + '-gradient';
        /** @type {?} */
        var outlineClass = 'btn-outline-' + this.color;
        /** @type {?} */
        var flatClass = 'btn-flat';
        /** @type {?} */
        var roundedClass = 'btn-rounded';
        /** @type {?} */
        var sizeClass = 'btn-' + this.size;
        /** @type {?} */
        var blockClass = 'btn-block';
        /** @type {?} */
        var floatingClass = 'btn-floating';
        this.renderer.addClass(this.el.nativeElement, 'btn');
        if (this.color !== '') {
            this.renderer.addClass(this.el.nativeElement, colorClass);
        }
        if (this.rounded) {
            this.renderer.addClass(this.el.nativeElement, roundedClass);
        }
        if (this.gradient) {
            if (this.color !== '') {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            this.renderer.addClass(this.el.nativeElement, gradientClass);
        }
        if (this.outline) {
            this.renderer.removeClass(this.el.nativeElement, colorClass);
            this.renderer.addClass(this.el.nativeElement, outlineClass);
        }
        if (this.flat) {
            if (this.color) {
                this.renderer.removeClass(this.el.nativeElement, colorClass);
            }
            if (this.gradient) {
                this.renderer.removeClass(this.el.nativeElement, gradientClass);
            }
            if (this.outline) {
                this.renderer.removeClass(this.el.nativeElement, outlineClass);
            }
            if (this.rounded) {
                this.renderer.removeClass(this.el.nativeElement, roundedClass);
            }
            this.renderer.addClass(this.el.nativeElement, flatClass);
        }
        if (this.size) {
            this.renderer.addClass(this.el.nativeElement, sizeClass);
        }
        if (this.block) {
            this.renderer.addClass(this.el.nativeElement, blockClass);
        }
        if (this.floating) {
            this.renderer.removeClass(this.el.nativeElement, 'btn');
            this.renderer.addClass(this.el.nativeElement, floatingClass);
        }
    };
    MdbBtnDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbBtn]'
                },] }
    ];
    /** @nocollapse */
    MdbBtnDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbBtnDirective.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        gradient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        outline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        flat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        block: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        floating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbBtnDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        this.state = state$$1;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        btnCheckboxFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.active',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    // @HostBinding('class.active')
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = 
    // @HostBinding('class.active')
    /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(function (element) {
                _this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(function (element) {
                _this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    ButtonRadioDirective.propDecorators = {
        mdbRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        uncheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.active',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }]
    };
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, MdbBtnDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardFooterComponent = /** @class */ (function () {
    function MdbCardFooterComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-footer');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardFooterComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-footer',
                    template: "<ng-content></ng-content>\n"
                }] }
    ];
    /** @nocollapse */
    MdbCardFooterComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbCardFooterComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardFooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardTitleComponent = /** @class */ (function () {
    function MdbCardTitleComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._r.addClass(this._el.nativeElement, 'card-title');
    };
    MdbCardTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-title',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    MdbCardTitleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    return MdbCardTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardTextComponent = /** @class */ (function () {
    function MdbCardTextComponent() {
    }
    MdbCardTextComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-text',
                    template: "<p class=\"card-text {{class}} \">\n    <ng-content></ng-content>\n</p>"
                }] }
    ];
    MdbCardTextComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardTextComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardBodyComponent = /** @class */ (function () {
    function MdbCardBodyComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardBodyComponent.prototype, "cascade", {
        set: /**
         * @param {?} cascade
         * @return {?}
         */
        function (cascade) {
            if (cascade) {
                this._r.addClass(this._el.nativeElement, 'card-body-cascade');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-body');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardBodyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-body',
                    template: "\n    <ng-content></ng-content>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None
                }] }
    ];
    /** @nocollapse */
    MdbCardBodyComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbCardBodyComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        cascade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardComponent = /** @class */ (function () {
    function MdbCardComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    Object.defineProperty(MdbCardComponent.prototype, "narrower", {
        set: /**
         * @param {?} narrower
         * @return {?}
         */
        function (narrower) {
            if (narrower) {
                this._r.addClass(this._el.nativeElement, 'narrower');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "reverse", {
        set: /**
         * @param {?} reverse
         * @return {?}
         */
        function (reverse) {
            if (reverse) {
                this._r.addClass(this._el.nativeElement, 'reverse');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "dark", {
        set: /**
         * @param {?} dark
         * @return {?}
         */
        function (dark) {
            if (dark) {
                this._r.addClass(this._el.nativeElement, 'card-dark');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "bgColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCardComponent.prototype, "borderColor", {
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            if (color) {
                this._r.addClass(this.card.nativeElement, color);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card');
        if (this.cascade) {
            this._r.addClass(this._el.nativeElement, 'card-cascade');
        }
        if (this.wider) {
            this._r.addClass(this._el.nativeElement, 'wider');
        }
        if (this.narrower) {
            this._r.addClass(this._el.nativeElement, 'narrower');
        }
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
        if (this._el.nativeElement.parentElement.classList.contains('card-deck')) {
            this._r.addClass(this.card.nativeElement, 'w-100');
            this._r.addClass(this.card.nativeElement, 'mx-0');
        }
    };
    MdbCardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card',
                    template: "<div class=\"card\" [ngClass]=\"{'card-cascade': cascade, 'wider': wider}\" #card>\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MdbCardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbCardComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        cascade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        wider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['card',] }],
        narrower: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        dark: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        bgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardImageComponent = /** @class */ (function () {
    function MdbCardImageComponent() {
    }
    MdbCardImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-img',
                    template: "<img class=\"img-fluid\" [src]=\"src\" [alt]=\"alt\">"
                }] }
    ];
    MdbCardImageComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        alt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbCardHeaderComponent = /** @class */ (function () {
    function MdbCardHeaderComponent(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    MdbCardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._r.addClass(this._el.nativeElement, 'card-header');
        if (this.class) {
            this.class.split(' ').forEach(function (element) {
                _this._r.addClass(_this._el.nativeElement, element);
            });
        }
    };
    MdbCardHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-card-header',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    MdbCardHeaderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbCardHeaderComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbCardHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CardsFreeModule = /** @class */ (function () {
    function CardsFreeModule() {
    }
    /**
     * @return {?}
     */
    CardsFreeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CardsFreeModule, providers: [] };
    };
    CardsFreeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [
                        MdbCardComponent,
                        MdbCardBodyComponent,
                        MdbCardImageComponent,
                        MdbCardTextComponent,
                        MdbCardTitleComponent,
                        MdbCardFooterComponent,
                        MdbCardHeaderComponent
                    ],
                    exports: [
                        MdbCardComponent,
                        MdbCardBodyComponent,
                        MdbCardImageComponent,
                        MdbCardTextComponent,
                        MdbCardTitleComponent,
                        MdbCardFooterComponent,
                        MdbCardHeaderComponent
                    ]
                },] }
    ];
    return CardsFreeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = typeof window !== 'undefined' && window || (/** @type {?} */ ({}));
/** @type {?} */
var document$1 = win.document;
/** @type {?} */
var location = win.location;
/** @type {?} */
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
/** @type {?} */
var performance = win['performance'] ? win['performance'] : null;
/** @type {?} */
var Event = win['Event'];
/** @type {?} */
var MouseEvent = win['MouseEvent'];
/** @type {?} */
var KeyboardEvent = win['KeyboardEvent'];
/** @type {?} */
var EventTarget = win['EventTarget'];
/** @type {?} */
var History = win['History'];
/** @type {?} */
var Location = win['Location'];
/** @type {?} */
var EventListener = win['EventListener'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
LinkedList = /** @class */ (function () {
    function LinkedList() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @protected
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var outArray = [];
        /** @type {?} */
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    // public get(position: number): T {
    // public get(position: number): T {
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = 
    // public get(position: number): T {
    /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = {
            value: (/** @type {?} */ (value)),
            next: (/** @type {?} */ (undefined)),
            previous: (/** @type {?} */ (undefined))
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = 
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    // public pop(): T {
    // public pop(): T {
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = 
    // public pop(): T {
    /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    // public shift(): T {
    // public shift(): T {
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = 
    // public shift(): T {
    /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = /**
     * @return {?}
     */
    function () {
        return '[Linked List]';
    };
    // public find(fn: any): T {
    // public find(fn: any): T {
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = 
    // public find(fn: any): T {
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        // let result: T;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        // let result: number;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
    CarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return CarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0, NEXT: 1, PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, el, platformId, cdRef) {
        this.cdRef = cdRef;
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        this.el = null;
        this.animationEnd = true;
        this.isBrowser = false;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"](false);
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = /**
     * @return {?}
     */
    function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        get: /**
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeSlideIndex) {
            setTimeout(function () {
                _this._select(_this.activeSlideIndex);
                _this.activeSlideChange.emit({ 'relatedTarget': _this.activeSlide });
            }, 0);
        }
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
            this.cdRef.markForCheck();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            /** @type {?} */
            var direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
            this.cdRef.markForCheck();
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
            this.cdRef.markForCheck();
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
            this.cdRef.markForCheck();
        }
        if (!this.animation) {
            this.activeSlideChange.emit({ 'direction': 'Prev', 'relatedTarget': this.activeSlide });
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @return {?}
     */
    function (goToIndex) {
        var _this = this;
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionNext = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    _this.activeSlideChange.emit({ 'direction': 'Next', 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }, 0);
            }
        }
    };
    /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = /**
     * @protected
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    function (goToIndex, direction) {
        var _this = this;
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        /** @type {?} */
        var goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionLeft = true;
                        currentSlide.directionLeft = true;
                        _this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                if (this.isBrowser) {
                    setTimeout(function () {
                        goToSlide.directionRight = true;
                        currentSlide.directionRight = true;
                        _this.cdRef.markForCheck();
                    }, 100);
                }
            }
            if (this.isBrowser) {
                setTimeout(function () {
                    goToSlide.directionLeft = false;
                    goToSlide.directionNext = false;
                    currentSlide.directionLeft = false;
                    currentSlide.directionNext = false;
                    goToSlide.directionRight = false;
                    goToSlide.directionPrev = false;
                    currentSlide.directionRight = false;
                    currentSlide.directionPrev = false;
                    _this.animationEnd = true;
                    _this.activeSlide = goToIndex;
                    /** @type {?} */
                    var directionName;
                    if (direction === Direction.NEXT) {
                        directionName = 'Next';
                    }
                    else if (direction === Direction.PREV) {
                        directionName = 'Prev';
                    }
                    _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                    _this.play();
                    _this.cdRef.markForCheck();
                }, 700);
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * @return {?}
     */
    function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        /** @type {?} */
        var currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        if (this.isBrowser) {
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = setInterval(function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                        _this.nextSlide();
                    }
                    else {
                        _this.pause();
                    }
                }, interval);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = /**
     * @protected
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            /** @type {?} */
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.focus();
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-carousel',
                    template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\">\n  <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\">\n    <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fas fa-chevron-left\"></i></a>\n    <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fas fa-chevron-right\"></i></a>\n  </div>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\">\n    <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\">\n      <img  class=\"d-block w-100 img-fluid\" src=\"{{ getImg(slidez) }}\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\"><ng-content></ng-content></div>\n  <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span  class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['isControls',] }],
        keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['class',] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['type',] }],
        animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['animation',] }],
        activeSlideIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        play: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['mouseleave',] }],
        pause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['mouseenter',] }],
        keyboardControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['keyup', ['$event'],] }],
        focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel, el) {
        this.carousel = carousel;
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.el = null;
        // this.carousel = carousel;
        this.el = el;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-slide, mdb-carousel-item',
                    template: "\n  <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.animated',] }],
        directionNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.carousel-item-next',] }],
        directionLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.carousel-item-left',] }],
        directionPrev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.carousel-item-prev',] }],
        directionRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.carousel-item-right',] }],
        el: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent],
                    providers: [CarouselConfig]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if ((changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) && !changes.hasOwnProperty('labels')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = /**
     * @param {?} ctx
     * @return {?}
     */
    function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        /** @type {?} */
        var datasets = this.getDatasets();
        /** @type {?} */
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        /** @type {?} */
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = /**
     * @private
     * @param {?} newDataValues
     * @return {?}
     */
    function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((/** @type {?} */ (this.data))).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                /** @type {?} */
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @private
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] }
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"],] }] }
    ]; };
    BaseChartDirective.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        datasets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        labels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        chartType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        colors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        legend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        chartClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        chartHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return BaseChartDirective;
}());
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    /** @type {?} */
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] }
    ];
    return ChartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () { return CheckboxComponent; }),
    multi: true
};
/** @type {?} */
var defaultIdNumber = 0;
var MdbCheckboxChange = /** @class */ (function () {
    function MdbCheckboxChange() {
    }
    return MdbCheckboxChange;
}());
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.defaultId = "mdb-checkbox-" + ++defaultIdNumber;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        // Control Value Accessor Methods
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    };
    Object.defineProperty(CheckboxComponent.prototype, "changeEvent", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var newChangeEvent = new MdbCheckboxChange();
            newChangeEvent.element = this;
            newChangeEvent.checked = this.checked;
            return newChangeEvent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.toggle();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CheckboxComponent.prototype.onCheckboxChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.change.emit(this.changeEvent);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.checked = !!value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-checkbox',
                    template: "<div\n  [ngClass]=\"{ \n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input \n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{ \n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\"\n  >\n  <label\n    [ngClass]=\"{ \n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right', \n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>",
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        inputEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['input',] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        filledIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        rounded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        checkboxPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        default: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [
                        CheckboxComponent
                    ],
                    exports: [
                        CheckboxComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
                    ]
                },] }
    ];
    return CheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
        this.isCollapsed = true;
        this.showBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.shownBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.hideBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.hiddenBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.overflow = 'hidden';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    CollapseComponent.prototype.onExpandBodyDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'expanded') {
            this.shownBsCollapse.emit(this);
            this.expanded.emit(this);
        }
        else {
            this.hiddenBsCollapse.emit(this);
            this.collapsed.emit(this);
        }
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.show() : this.hide();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.initializeCollapseState = /**
     * @return {?}
     */
    function () {
        this.isCollapsed ? this.hide() : this.show();
    };
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeCollapseState();
    };
    CollapseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: '[mdbCollapse]',
                    exportAs: 'bs-collapse',
                    template: '<ng-content></ng-content>',
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expandBody', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', visibility: 'hidden', overflow: 'hidden' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible', overflow: 'visible' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease')),
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return []; };
    CollapseComponent.propDecorators = {
        isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        showBsCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        shownBsCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        hideBsCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        hiddenBsCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        expandAnimationState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['@expandBody',] }],
        overflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['style.overflow',] }],
        onExpandBodyDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['@expandBody.done', ['$event'],] }]
    };
    return CollapseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    CollapseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [CollapseComponent],
                    exports: [CollapseComponent]
                },] }
    ];
    return CollapseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger$$1) { return trigger$$1.split(':'); })
        .map(function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    /** @type {?} */
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger$$1) {
        if (trigger$$1.open === trigger$$1.close) {
            listeners.push(renderer.listen(target, trigger$$1.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger$$1.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger$$1.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = /**
     * @param {?} compType
     * @return {?}
     */
    function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = 
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = 
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            /** @type {?} */
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({ providers: this._providers, parent: this._injector });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector((/** @type {?} */ (this.container)))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = /**
     * @param {?} listenOpts
     * @return {?}
     */
    function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = /**
     * @return {?}
     */
    function () {
        return this._innerComponent;
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    function (content, data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"]) {
            if (this._viewContainerRef) {
                /** @type {?} */
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            /** @type {?} */
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({ providers: this._providers, parent: this._injector });
            /** @type {?} */
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var 
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elPosition;
        /** @type {?} */
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            /** @type {?} */
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            /** @type {?} */
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    function (element, round) {
        if (round === void 0) { round = true; }
        /** @type {?} */
        var elBcr = element.getBoundingClientRect();
        /** @type {?} */
        var viewportOffset = {
            top: window.pageYOffset - ((/** @type {?} */ (document.documentElement))).clientTop,
            left: window.pageXOffset - ((/** @type {?} */ (document.documentElement))).clientLeft
        };
        /** @type {?} */
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    function (hostElement, targetElement, placement, appendToBody) {
        /** @type {?} */
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        /** @type {?} */
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        /** @type {?} */
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        /** @type {?} */
        var targetElBCR = targetElement.getBoundingClientRect();
        /** @type {?} */
        var placementPrimary = placement.split(' ')[0] || 'top';
        /** @type {?} */
        var placementSecondary = placement.split(' ')[1] || 'center';
        /** @type {?} */
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = /**
     * @private
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    function (element, prop) { return ((/** @type {?} */ (window.getComputedStyle(element))))[prop]; };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var offsetParentEl = (/** @type {?} */ (element.offsetParent)) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = (/** @type {?} */ (offsetParentEl.offsetParent));
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    /** @type {?} */
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    //  public position(options: PositioningOptions): void {
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = 
    //  public position(options: PositioningOptions): void {
    /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return (/** @type {?} */ (document.querySelector(element)));
        }
        if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]) {
            return element.nativeElement;
        }
        return (/** @type {?} */ (element));
    };
    PositioningService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return PositioningService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer2
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"] },
        { type: PositioningService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ApplicationRef"] }
    ]; };
    return ComponentLoaderFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return BsDropdownConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-dropdown-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
                    template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: BsDropdownState }
    ]; };
    BsDropdownContainerComponent.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['style.display',] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['style.position',] }]
    };
    return BsDropdownContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.shown = this._dropdown.shown;
        this.onHidden = this._dropdown.onHidden;
        this.hidden = this._dropdown.hidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        // const parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this.shown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            /** @type {?} */
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        /** @type {?} */
        var parent = this._elementRef.nativeElement.classList;
        /** @type {?} */
        var container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                    _this.hidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
                this.hidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            // clean up subscriptions and destroy dropdown
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [BsDropdownState]
                },] }
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
        { type: ComponentLoaderFactory },
        { type: BsDropdownConfig },
        { type: BsDropdownState }
    ]; };
    BsDropdownDirective.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        dropup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.dropup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return BsDropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] }
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"] }
    ]; };
    return BsDropdownMenuDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            // .subscribe((value: boolean) => this.isDisabled = value || null));
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__values"])(this._subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle'
                },] }
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: BsDropdownState },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        ariaHaspopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.aria-haspopup',] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.disabled',] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.aria-expanded',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }],
        onDocumentClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['document:click', ['$event'],] }],
        onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['keyup.esc',] }]
    };
    return BsDropdownToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    DropdownModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownContainerComponent,
                        BsDropdownDirective
                    ],
                    exports: [
                        BsDropdownMenuDirective,
                        BsDropdownToggleDirective,
                        BsDropdownDirective
                    ],
                    entryComponents: [BsDropdownContainerComponent]
                },] }
    ];
    return DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbIconComponent = /** @class */ (function () {
    function MdbIconComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fas = true;
        this.sizeClass = '';
    }
    /**
     * @return {?}
     */
    MdbIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.size) {
            this.sizeClass = "fa-" + this.size;
        }
        if (this._el.nativeElement.parentElement.classList.contains('md-form')) {
            this._renderer.addClass(this._el.nativeElement, 'prefix');
        }
        /** @type {?} */
        var classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
    };
    MdbIconComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-icon',
                    template: "<i [ngClass]=\"{'fas': fas, 'far': far, 'fab': fab, 'fal': fal}\" class=\"fa-{{icon}} {{class}} {{sizeClass}}\"></i>\n"
                }] }
    ];
    /** @nocollapse */
    MdbIconComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbIconComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbIconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FalDirective = /** @class */ (function () {
    function FalDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fal');
    }
    FalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[fal], [light]' },] }
    ];
    /** @nocollapse */
    FalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    return FalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FarDirective = /** @class */ (function () {
    function FarDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'far');
    }
    FarDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[far], [regular]' },] }
    ];
    /** @nocollapse */
    FarDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    return FarDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FasDirective = /** @class */ (function () {
    function FasDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fas');
    }
    FasDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[fas], [solid]' },] }
    ];
    /** @nocollapse */
    FasDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    return FasDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FabDirective = /** @class */ (function () {
    function FabDirective(_el, _r) {
        this._el = _el;
        this._r = _r;
        this._r.addClass(this._el.nativeElement, 'fab');
    }
    FabDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[fab], [brands]' },] }
    ];
    /** @nocollapse */
    FabDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    return FabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [
                        MdbIconComponent,
                        FabDirective,
                        FarDirective,
                        FasDirective,
                        FalDirective
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    exports: [
                        MdbIconComponent,
                        FabDirective,
                        FarDirective,
                        FasDirective,
                        FalDirective
                    ]
                },] }
    ];
    return IconsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultIdNumber$1 = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective() {
        this.id = "mdb-error-" + defaultIdNumber$1++;
        this.errorMsg = true;
        this.messageId = this.id;
    }
    MdbErrorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: 'mdb-error'
                },] }
    ];
    MdbErrorDirective.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        errorMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.error-message',] }],
        messageId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.id',] }]
    };
    return MdbErrorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultIdNumber$2 = 0;
var MdbSuccessDirective = /** @class */ (function () {
    function MdbSuccessDirective() {
        this.id = "mdb-success-" + defaultIdNumber$2++;
        this.successMsg = true;
        this.messageId = this.id;
    }
    MdbSuccessDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: 'mdb-success'
                },] }
    ];
    MdbSuccessDirective.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        successMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.success-message',] }],
        messageId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.id',] }]
    };
    return MdbSuccessDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbValidateDirective = /** @class */ (function () {
    function MdbValidateDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this._validate = true;
        this._validateSuccess = true;
        this._validateError = true;
    }
    Object.defineProperty(MdbValidateDirective.prototype, "validate", {
        get: /**
         * @return {?}
         */
        function () { return this._validate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validate = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateSuccess", {
        get: /**
         * @return {?}
         */
        function () { return this._validateSuccess; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateSuccess = value;
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbValidateDirective.prototype, "validateError", {
        get: /**
         * @return {?}
         */
        function () { return this._validateError; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validateError = value;
            this.updateErrorClass();
            this.updateSuccessClass();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateSuccessClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateSuccess) {
            this.renderer.addClass(this.el.nativeElement, 'validate-success');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-success');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.updateErrorClass = /**
     * @return {?}
     */
    function () {
        if (this.validate && this.validateError) {
            this.renderer.addClass(this.el.nativeElement, 'validate-error');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'validate-error');
        }
    };
    /**
     * @return {?}
     */
    MdbValidateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSuccessClass();
        this.updateErrorClass();
    };
    MdbValidateDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbValidate]'
                },] }
    ];
    /** @nocollapse */
    MdbValidateDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    MdbValidateDirective.propDecorators = {
        mdbValidate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        validate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        validateSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        validateError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbValidateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputUtilitiesModule = /** @class */ (function () {
    function InputUtilitiesModule() {
    }
    InputUtilitiesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                    exports: [MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective],
                },] }
    ];
    return InputUtilitiesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var setToNullValue = null;
        // self value (e.g. retype password)
        /** @type {?} */
        var v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        /** @type {?} */
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    EqualValidatorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function () { return EqualValidatorDirective; }), multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    EqualValidatorDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"], args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Attribute"], args: ['reverse',] }] }
    ]; };
    return EqualValidatorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbInputDirective = /** @class */ (function () {
    function MdbInputDirective(_elRef, _renderer, platformId) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.mdbValidate = true;
        this.validateSuccess = true;
        this.validateError = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = _elRef;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        this.validationFunction();
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = /**
     * @return {?}
     */
    function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oniput = /**
     * @return {?}
     */
    function () {
        this.validationFunction();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputDirective.prototype.onkeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) {
        }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.oncut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onpaste = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ondrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateErrorMsg = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.wrongTextContainer) {
            this.wrongTextContainer.innerHTML = value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbInputDirective.prototype.updateSuccessMsg = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.rightTextContainer) {
            this.rightTextContainer.innerHTML = value;
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) {
            console.log(error);
        }
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        if (this.mdbValidate) {
            this.wrongTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.wrongTextContainer, 'inputVal');
            this._renderer.addClass(this.wrongTextContainer, 'text-danger');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.wrongTextContainer);
            /** @type {?} */
            var textWrong = this._elRef.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            if (!textWrong && this.errorMessage !== undefined) {
                this.wrongTextContainer.innerHTML = this.errorMessage;
            }
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this.rightTextContainer = this._renderer.createElement('span');
            this._renderer.addClass(this.rightTextContainer, 'inputVal');
            this._renderer.addClass(this.rightTextContainer, 'text-success');
            this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.rightTextContainer);
            /** @type {?} */
            var textSuccess = this._elRef.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            if (!textSuccess && this.successMessage !== undefined) {
                this.rightTextContainer.innerHTML = this.successMessage;
            }
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('errorMessage')) {
            /** @type {?} */
            var newErrorMsg = changes.errorMessage.currentValue;
            this.updateErrorMsg(newErrorMsg);
        }
        if (changes.hasOwnProperty('successMessage')) {
            /** @type {?} */
            var newSuccessMsg = changes.successMessage.currentValue;
            this.updateSuccessMsg(newSuccessMsg);
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-valid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-success')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this.mdbValidate &&
            this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-dirty') &&
            !this._elRef.nativeElement.classList.contains('counter-danger')) {
            this._renderer.addClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'visible');
            this._renderer.setStyle(this.rightTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
            this._renderer.setStyle(this.wrongTextContainer, 'top', this._elRef.nativeElement.offsetHeight + 'px');
        }
        if (this._elRef.nativeElement.classList.contains('ng-invalid') &&
            this._elRef.nativeElement.classList.contains('ng-pristine') &&
            this._elRef.nativeElement.classList.contains('ng-untouched') || this._elRef.nativeElement.disabled) {
            if (this._elRef.nativeElement.classList.contains('counter-success')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
                this._renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
            }
            else if (this._elRef.nativeElement.classList.contains('counter-danger')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
                this._renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            }
        }
        if (!this.validateSuccess) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            this._renderer.setStyle(this.rightTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-valid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            }
        }
        if (!this.validateError) {
            this._renderer.removeClass(this._elRef.nativeElement, 'counter-danger');
            this._renderer.setStyle(this.wrongTextContainer, 'display', 'none');
            if (this._elRef.nativeElement.classList.contains('ng-invalid')) {
                this._renderer.removeClass(this._elRef.nativeElement, 'counter-success');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.validationFunction = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this._elRef.nativeElement.classList.contains('ng-invalid')) {
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-success');
                _this._renderer.removeClass(_this._elRef.nativeElement, 'counter-danger');
            }
            if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-invalid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-danger');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
            else if (_this._elRef.nativeElement.classList.contains('ng-touched') &&
                _this._elRef.nativeElement.classList.contains('ng-valid')) {
                if (_this.mdbValidate) {
                    _this._renderer.addClass(_this._elRef.nativeElement, 'counter-success');
                    _this._renderer.setStyle(_this.rightTextContainer, 'visibility', 'visible');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'visibility', 'hidden');
                    _this._renderer.setStyle(_this.rightTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                    _this._renderer.setStyle(_this.wrongTextContainer, 'top', _this._elRef.nativeElement.offsetHeight + 'px');
                }
            }
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) {
            }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        /* if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this._renderer.removeClass(this.elLabel, 'active');
        } */
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.delayedResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) {
            }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) {
            }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) ;
        }
    };
    MdbInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbInputDirective]'
                },] }
    ];
    /** @nocollapse */
    MdbInputDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"],] }] }
    ]; };
    MdbInputDirective.propDecorators = {
        mdbInputDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['mdbInputDirective',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['placeholder',] }],
        customRegex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['customRegex',] }],
        mdbValidate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['mdbValidate',] }],
        validateSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['validateSuccess',] }],
        validateError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['validateError',] }],
        focusCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['focusCheckbox',] }],
        focusRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['focusRadio',] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        successMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onfocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['focus',] }],
        onblur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['blur',] }],
        onchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['change',] }],
        oniput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['input',] }],
        onkeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['keydown', ['$event'],] }],
        oncut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['cut',] }],
        onpaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['paste',] }],
        ondrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['drop',] }]
    };
    return MdbInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbInput = /** @class */ (function () {
    function MdbInput(el, _renderer, platformId) {
        this.el = el;
        this._renderer = _renderer;
        this.elLabel = null;
        this.elIcon = null;
        this.element = null;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    MdbInput.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        try {
            this._renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onblur = /**
     * @return {?}
     */
    function () {
        try {
            if (this.el.nativeElement.value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onchange = /**
     * @return {?}
     */
    function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.oniput = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInput.prototype.onkeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        try {
            if (event.target.type === 'number') {
                if (event.shiftKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 10;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 10;
                            break;
                    }
                }
                if (event.altKey) {
                    switch (event.keyCode) {
                        case 38:
                            event.target.value = +event.target.value + 0.1;
                            break;
                        case 40:
                            event.target.value = +event.target.value - 0.1;
                            break;
                    }
                }
            }
        }
        catch (error) { }
        this.delayedResize();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.oncut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.onpaste = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ondrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.delayedResize();
            }, 0);
        }
        catch (error) { }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            try {
                this.element = document.querySelector('.md-textarea-auto');
            }
            catch (error) { }
        }
        /** @type {?} */
        var type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this._renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.resize = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.classList.contains('md-textarea-auto')) {
            this._renderer.setStyle(this.el.nativeElement, 'height', 'auto');
            this._renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.delayedResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.resize();
        }, 0);
    };
    /**
     * @return {?}
     */
    MdbInput.prototype.initComponent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputId;
        /** @type {?} */
        var inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this._renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this._renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInput.prototype.checkValue = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this._renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this._renderer.removeClass(this.elIcon, 'active');
                }
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this._renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    MdbInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbInput]'
                },] }
    ];
    /** @nocollapse */
    MdbInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"],] }] }
    ]; };
    MdbInput.propDecorators = {
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['placeholder',] }],
        focusCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['focusCheckbox',] }],
        focusRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['focusRadio',] }],
        onfocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['focus',] }],
        onblur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['blur',] }],
        onchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['change',] }],
        oniput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['input',] }],
        onkeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['keydown', ['$event'],] }],
        oncut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['cut',] }],
        onpaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['paste',] }],
        ondrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['drop',] }]
    };
    return MdbInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: InputsModule, providers: [] };
    };
    InputsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                    exports: [MdbInput, MdbInputDirective, EqualValidatorDirective],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"]],
                },] }
    ];
    return InputsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    ModalOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return ModalOptions;
}());
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     */
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = /**
     * Hides the modal
     * @return {?}
     */
    function () { };
    MDBModalRef.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return MDBModalRef;
}());
/** @type {?} */
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    containerClass: '',
    animated: true,
    scroll: false,
    data: {}
};
/** @type {?} */
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isAnimated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isShown = value;
            if (value) {
                this.renderer.addClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.addClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, "" + ClassName.IN);
                if (!isBs3()) {
                    this.renderer.removeClass(this.element.nativeElement, "" + ClassName.SHOW);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        else {
            this.renderer.addClass(this.element.nativeElement, "" + ClassName.FADE);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    ModalBackdropComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-modal-backdrop',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ModalBackdropComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    ModalBackdropComponent.propDecorators = {
        classNameBackDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.modal-backdrop',] }]
    };
    return ModalBackdropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TRANSITION_DURATION = 300;
/** @type {?} */
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        // seems like an Options
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        // public get config(): ModalOptions {
        get: 
        // public get config(): ModalOptions {
        /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        /** allows to set modal configuration via element property */
        set: /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    // todo: consider preventing default and stopping propagation
    // todo: consider preventing default and stopping propagation
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = 
    // todo: consider preventing default and stopping propagation
    /**
     * @return {?}
     */
    function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /* Public methods */
    /** Allows to manually toggle modal visibility */
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    function () {
        return this._isShown ? this.hide() : this.show();
    };
    /** Allows to manually open modal */
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = /**
     * Allows to manually open modal
     * @return {?}
     */
    function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        this.open.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /** Allows to manually close modal */
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        this.close.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /** Private methods @internal */
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  @internal
     */
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.showElement = /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        /** @type {?} */
        var transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
            _this.opened.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.hideModal = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
            _this.closed.emit(_this);
        });
    };
    // todo: original show was calling a callback when done, but we can use promise
    /** @internal */
    // todo: original show was calling a callback when done, but we can use promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = 
    // todo: original show was calling a callback when done, but we can use promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            var callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._backdrop.hide();
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = /**
     * @protected
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
            if (!otherOpenedModals.length) {
                return;
            }
            //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
            otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
        }
        catch (error) { }
    };
    /** @internal */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /** Scroll bar tricks */
    /** @internal */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = /**
     * @protected
     * @return {?}
     */
    function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    ModalDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbModal]',
                    exportAs: 'mdb-modal, mdbModal'
                },] }
    ];
    /** @nocollapse */
    ModalDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: ComponentLoaderFactory }
    ]; };
    ModalDirective.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }],
        onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['keydown.esc',] }]
    };
    return ModalDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var msConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.modalClass = 'modal';
        this.tabindex = -1;
        this.role = 'dialog';
        this.modal = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = /**
     * @return {?}
     */
    function () {
        if (this.config.keyboard &&
            this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.config.animated) {
            this._renderer.addClass(this._element.nativeElement, 'fade');
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.addClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, ClassName.OPEN);
        }
        if (this.config.containerClass) {
            this.updateContainerClass();
        }
        if (this.config.scroll) {
            this._renderer.setStyle(this._element.nativeElement, 'overflow-y', 'auto');
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.updateContainerClass = /**
     * @return {?}
     */
    function () {
        if (this.config.containerClass) {
            /** @type {?} */
            var containerClasses = this.config.containerClass;
            /** @type {?} */
            var classArr = containerClasses.split(' ');
            for (var i = 0; i < classArr.length; i++) {
                this._renderer.addClass(this._element.nativeElement, classArr[i]);
            }
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW);
        setTimeout(function () {
            _this.isShown = false;
            if (document &&
                document.body &&
                _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.removeClass(document.body, ClassName.OPEN);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    ModalContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-modal-container',
                    template: "<div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalContainerComponent.ctorParameters = function () { return [
        { type: ModalOptions },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    ModalContainerComponent.propDecorators = {
        tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['tabindex',] }],
        role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['role',] }],
        modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.modal',] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }],
        onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['window:keydown.esc',] }]
    };
    return ModalContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
        msConfig.serviceInstance = this;
    }
    /** Shows a modal */
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, data: this.config.data });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @protected
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = /**
     * @protected
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    MDBModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    /** @nocollapse */
    MDBModalService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["RendererFactory2"] },
        { type: ComponentLoaderFactory }
    ]; };
    return MDBModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    ModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                    exports: [ModalBackdropComponent, ModalDirective],
                    entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"]]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = /**
     * @return {?}
     */
    function () {
        this.navbarLinkClicks.next();
    };
    NavbarService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return NavbarService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350; // ms
        // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.addTogglerIconClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.containerInside) {
            /** @type {?} */
            var childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach(function (child) {
                _this.renderer.appendChild(_this.navbar.nativeElement, child);
                _this.container.nativeElement.remove();
            });
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    NavbarComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-navbar',
                    template: "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button #toggler class=\"navbar-toggler\" type=\"button\" (click)=\"toggle(); $event.preventDefault()\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>"
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: NavbarService }
    ]; };
    NavbarComponent.propDecorators = {
        iconBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        SideClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        containerInside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        el: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['navbar',] }],
        mobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['mobile',] }],
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['nav',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['container',] }],
        toggler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['toggler',] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['window:resize', ['$event'],] }],
        onScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['document:scroll',] }]
    };
    return NavbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    LinksComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'links',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    LinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    LinksComponent.propDecorators = {
        links: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"], descendants: true },] }],
        linkClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return LinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'logo, mdb-navbar-brand',
                    template: "\n  <ng-content></ng-content>\n  "
                }] }
    ];
    return LogoComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    NavlinksComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'navlinks',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NavlinksComponent.ctorParameters = function () { return [
        { type: NavbarService }
    ]; };
    NavlinksComponent.propDecorators = {
        links: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"], descendants: true },] }],
        linkClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return NavlinksComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                    exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                    providers: [NavbarService]
                },] }
    ];
    return NavbarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    PopoverConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return PopoverConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    PopoverContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-popover-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
                    template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig }
    ]; };
    PopoverContainerComponent.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.show',] }],
        role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['attr.role',] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class',] }]
    };
    return PopoverContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.shown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        this.hidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            return this._popover.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
        { type: PopoverConfig },
        { type: ComponentLoaderFactory }
    ]; };
    PopoverDirective.propDecorators = {
        mdbPopover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        mdbPopoverHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }],
        onblur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['window:click',] }]
    };
    return PopoverDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    PopoverModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] }
    ];
    return PopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableDirective = /** @class */ (function () {
    function MdbTableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.stickyHeader = false;
        this.stickyHeaderBgColor = '';
        this.stickyHeaderTextColor = '';
    }
    /**
     * @return {?}
     */
    MdbTableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'table');
        if (this.stickyHeader) {
            /** @type {?} */
            var tableHead = this.el.nativeElement.querySelector('thead');
            this.renderer.addClass(tableHead, 'sticky-top');
            if (this.stickyHeaderBgColor) {
                this.renderer.setStyle(tableHead, 'background-color', this.stickyHeaderBgColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'background-color', '#f2f2f2');
            }
            if (this.stickyHeaderTextColor) {
                this.renderer.setStyle(tableHead, 'color', this.stickyHeaderTextColor);
            }
            else {
                this.renderer.setStyle(tableHead, 'color', '#000000');
            }
        }
    };
    MdbTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbTable]'
                },] }
    ];
    /** @nocollapse */
    MdbTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    MdbTableDirective.propDecorators = {
        striped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-striped',] }],
        bordered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-bordered',] }],
        borderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-borderless',] }],
        hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-hover',] }],
        small: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-sm',] }],
        responsive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.table-responsive',] }],
        stickyHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        stickyHeaderBgColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        stickyHeaderTextColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbTableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective() {
        // tslint:disable-next-line:no-input-rename
        this.dataSource = [];
        this.sorted = false;
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.sortBy.toString().toLowerCase());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.dataSource.sort(function (a, b) {
            if (a[key] < b[key]) {
                return _this.sorted ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return _this.sorted ? -1 : 1;
            }
            return 0;
        });
        this.sorted = !this.sorted;
    };
    MdbTableSortDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbTableSort]'
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return []; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"], args: ['mdbTableSort',] }],
        sortBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click',] }]
    };
    return MdbTableSortDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableScrollDirective = /** @class */ (function () {
    function MdbTableScrollDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.scrollY = false;
        this.maxHeight = null;
        this.scrollX = false;
        this.maxWidth = null;
    }
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-y', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @param {?} tableWrapper
     * @return {?}
     */
    MdbTableScrollDirective.prototype.wrapTableWithHorizontalAndVerticalScrollingWrapper = /**
     * @param {?} tableWrapper
     * @return {?}
     */
    function (tableWrapper) {
        this.renderer.setStyle(tableWrapper, 'max-height', this.maxHeight + 'px');
        this.renderer.setStyle(tableWrapper, 'max-width', this.maxWidth + 'px');
        this.renderer.setStyle(tableWrapper, 'overflow-x', 'auto');
        this.renderer.setStyle(tableWrapper, 'display', 'block');
    };
    /**
     * @return {?}
     */
    MdbTableScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parent = this.el.nativeElement.parentNode;
        /** @type {?} */
        var tableWrapper = this.renderer.createElement('div');
        if (this.scrollY && this.scrollX && this.maxHeight && this.maxWidth) {
            this.wrapTableWithHorizontalAndVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollY && this.maxHeight) {
            this.wrapTableWithVerticalScrollingWrapper(tableWrapper);
        }
        if (this.scrollX && this.maxWidth) {
            this.wrapTableWithHorizontalScrollingWrapper(tableWrapper);
        }
        this.renderer.insertBefore(parent, tableWrapper, this.el.nativeElement);
        this.renderer.removeChild(parent, this.el.nativeElement);
        this.renderer.appendChild(tableWrapper, this.el.nativeElement);
    };
    MdbTableScrollDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbTableScroll]'
                },] }
    ];
    /** @nocollapse */
    MdbTableScrollDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    MdbTableScrollDirective.propDecorators = {
        scrollY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        maxHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        scrollX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }]
    };
    return MdbTableScrollDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableRowDirective = /** @class */ (function () {
    function MdbTableRowDirective(el) {
        this.el = el;
        this.rowCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.rowRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    };
    /**
     * @return {?}
     */
    MdbTableRowDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.rowRemoved.emit({ removed: true });
    };
    MdbTableRowDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbTableRow]'
                },] }
    ];
    /** @nocollapse */
    MdbTableRowDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    MdbTableRowDirective.propDecorators = {
        rowCreated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        rowRemoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return MdbTableRowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTableService = /** @class */ (function () {
    function MdbTableService() {
        this._dataSource = [];
        this._dataSourceChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @param {?} newRow
     * @return {?}
     */
    MdbTableService.prototype.addRow = /**
     * @param {?} newRow
     * @return {?}
     */
    function (newRow) {
        this.getDataSource().push(newRow);
    };
    /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    MdbTableService.prototype.addRowAfter = /**
     * @param {?} index
     * @param {?} row
     * @return {?}
     */
    function (index, row) {
        this.getDataSource().splice(index, 0, row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbTableService.prototype.removeRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.getDataSource().splice(index, 1);
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.rowRemoved = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowRemoved = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(true);
        });
        return rowRemoved;
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.removeLastRow = /**
     * @return {?}
     */
    function () {
        this.getDataSource().pop();
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.getDataSource = /**
     * @return {?}
     */
    function () {
        return this._dataSource;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTableService.prototype.setDataSource = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._dataSource = data;
        this._dataSourceChanged.next(this.getDataSource());
    };
    /**
     * @return {?}
     */
    MdbTableService.prototype.dataSourceChange = /**
     * @return {?}
     */
    function () {
        return this._dataSourceChanged;
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.filterLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        return this.getDataSource().filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                return (obj[key].toLowerCase()).includes(searchKey);
            });
        });
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchLocalDataBy = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        if (!searchKey) {
            return this.getDataSource();
        }
        if (searchKey) {
            return this.filterLocalDataBy(searchKey);
        }
    };
    /**
     * @param {?} searchKey
     * @return {?}
     */
    MdbTableService.prototype.searchDataObservable = /**
     * @param {?} searchKey
     * @return {?}
     */
    function (searchKey) {
        var _this = this;
        /** @type {?} */
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_this.searchLocalDataBy(searchKey));
        });
        return observable;
    };
    MdbTableService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MdbTableService.ctorParameters = function () { return []; };
    /** @nocollapse */ MdbTableService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["defineInjectable"])({ factory: function MdbTableService_Factory() { return new MdbTableService(); }, token: MdbTableService, providedIn: "root" });
    return MdbTableService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MdbTablePaginationComponent = /** @class */ (function () {
    function MdbTablePaginationComponent(tableService, cdRef) {
        var _this = this;
        this.tableService = tableService;
        this.cdRef = cdRef;
        this.searchPagination = false;
        this.searchDataSource = null;
        this.paginationAlign = '';
        this.hideDescription = false;
        this.maxVisibleItems = 10;
        this.firstItemIndex = 0;
        this.lastItemIndex = this.maxVisibleItems;
        this.lastVisibleItemIndex = 5;
        this.activePageNumber = 1;
        this.allItemsLength = 0;
        this.nextShouldBeDisabled = false;
        this.previousShouldBeDisabled = true;
        this.searchText = '';
        this.pagination = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.nextPageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.previousPageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.tableService.dataSourceChange().subscribe(function (data) {
            _this.allItemsLength = data.length;
            _this.lastVisibleItemIndex = data.length;
            _this.calculateFirstItemIndex();
            _this.calculateLastItemIndex();
            _this.disableNextButton(data);
            if (_this.maxVisibleItems > _this.allItemsLength) {
                _this.maxVisibleItems = _this.allItemsLength;
            }
        });
    }
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.allItemsLength = this.tableService.getDataSource().length;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var searchDataSource = changes['searchDataSource'];
        if (searchDataSource.currentValue.length !== 0) {
            this.allItemsLength = searchDataSource.currentValue.length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        if (searchDataSource.currentValue.length === 0) {
            this.firstItemIndex = 0;
            this.lastItemIndex = 0;
            this.lastVisibleItemIndex = 0;
            this.allItemsLength = 0;
        }
        else {
            this.lastVisibleItemIndex = this.maxVisibleItems;
        }
        if (searchDataSource.currentValue.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
            this.lastVisibleItemIndex = searchDataSource.currentValue.length;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.setMaxVisibleItemsNumberTo = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.lastItemIndex = value;
        this.lastVisibleItemIndex = value;
        this.maxVisibleItems = value;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.searchTextObs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_this.searchText);
        });
        return observable;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.disableNextButton = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data.length <= this.maxVisibleItems) {
            this.nextShouldBeDisabled = true;
        }
        else {
            this.nextShouldBeDisabled = false;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateFirstItemIndex = /**
     * @return {?}
     */
    function () {
        this.firstItemIndex = this.activePageNumber * this.maxVisibleItems - this.maxVisibleItems + 1;
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateLastItemIndex = /**
     * @return {?}
     */
    function () {
        this.lastItemIndex = this.activePageNumber * this.maxVisibleItems;
        this.lastVisibleItemIndex = this.lastItemIndex;
        if (this.searchDataSource && (this.lastItemIndex > this.searchDataSource.length)) {
            this.lastVisibleItemIndex = this.searchDataSource.length;
        }
        else if (!this.searchDataSource) {
            this.lastVisibleItemIndex = this.lastItemIndex;
        }
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
            this.lastVisibleItemIndex = this.tableService.getDataSource().length;
        }
        this.pagination.next({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.paginationChange = /**
     * @return {?}
     */
    function () {
        return this.pagination;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.calculateHowManyPagesShouldBe = /**
     * @return {?}
     */
    function () {
        return Math.ceil(this.tableService.getDataSource().length / this.maxVisibleItems);
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber--;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        this.previousPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.activePageNumber++;
        this.calculateFirstItemIndex();
        this.calculateLastItemIndex();
        if (this.lastItemIndex > this.tableService.getDataSource().length) {
            this.lastItemIndex = this.tableService.getDataSource().length;
        }
        if (this.lastVisibleItemIndex > this.allItemsLength) {
            this.lastVisibleItemIndex = this.allItemsLength;
        }
        this.nextPageClick.emit({ first: this.firstItemIndex, last: this.lastItemIndex });
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.nextPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_this.firstItemIndex);
        });
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.previousPageObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var obs = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            observer.next(_this.lastVisibleItemIndex);
        });
        return obs;
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfNextShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.searchDataSource && (this.lastVisibleItemIndex === this.searchDataSource.length)) {
            return true;
        }
        if (this.activePageNumber >= this.calculateHowManyPagesShouldBe()) {
            return true;
        }
        if (this.nextShouldBeDisabled) {
            return this.nextShouldBeDisabled;
        }
    };
    /**
     * @return {?}
     */
    MdbTablePaginationComponent.prototype.checkIfPreviousShouldBeDisabled = /**
     * @return {?}
     */
    function () {
        if (this.activePageNumber === 1) {
            return true;
        }
    };
    MdbTablePaginationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-table-pagination',
                    template: "<!--Pagination -->\n<nav>\n  <ul class=\"pagination pagination-circle pg-blue d-flex flex-center\" [ngClass]=\"{\n      'justify-content-end': paginationAlign =='end',\n      'justify-content-start': paginationAlign =='start'\n    }\">\n\n    <p *ngIf=\"!hideDescription\">{{firstItemIndex}} - {{lastVisibleItemIndex}} of {{allItemsLength}}</p>\n    <!--Arrow left-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfPreviousShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Previous\" (click)=\"previousPage()\">\n        <span aria-hidden=\"true\">\u00AB</span>\n      </a>\n    </li>\n\n    <!--Arrow right-->\n    <li class=\"page-item\" [ngClass]=\"{'disabled': checkIfNextShouldBeDisabled()}\">\n      <a class=\"page-link\" mdbWavesEffect aria-label=\"Next\" (click)=\"nextPage()\">\n        <span aria-hidden=\"true\">\u00BB</span>\n      </a>\n    </li>\n\n  </ul>\n</nav>\n<!--/Pagination -->\n"
                }] }
    ];
    /** @nocollapse */
    MdbTablePaginationComponent.ctorParameters = function () { return [
        { type: MdbTableService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] }
    ]; };
    MdbTablePaginationComponent.propDecorators = {
        searchPagination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        searchDataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        paginationAlign: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        hideDescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        nextPageClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        previousPageClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }]
    };
    return MdbTablePaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective
                    ],
                    exports: [
                        MdbTablePaginationComponent,
                        MdbTableRowDirective,
                        MdbTableScrollDirective,
                        MdbTableSortDirective,
                        MdbTableDirective
                    ],
                    entryComponents: [MdbTablePaginationComponent],
                    providers: [MdbTableService]
                },] }
    ];
    return TableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"] }
    ];
    return TooltipConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, r) {
        this.r = r;
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        setTimeout(function () {
            /** @type {?} */
            var arrowClassList = _this.tooltipArrow.nativeElement.classList;
            /** @type {?} */
            var tooltipHeight = _this.tooltipInner.nativeElement.clientHeight;
            if (arrowClassList.contains('top')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
            }
            else if (arrowClassList.contains('left')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
            else if (arrowClassList.contains('right')) {
                _this.r.setStyle(_this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
        }, 0);
    };
    TooltipContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"], args: [{
                    selector: 'mdb-tooltip-container',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                    },
                    template: "\n  <div #tooltipArrow class=\"tooltip-arrow\" [ngClass]=\"{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}\"></div>\n  <div #tooltipInner class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }
    ]; };
    TooltipContainerComponent.propDecorators = {
        tooltipInner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['tooltipInner',] }],
        tooltipArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['tooltipArrow',] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostBinding"], args: ['class.show',] }]
    };
    return TooltipContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/**
 * @return {?}
 */
function OnChange() {
    /** @type {?} */
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: /**
             * @return {?}
             */
            function () { return this[_key]; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.xxx = _viewContainerRef;
        this.yyy = cis;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])((this.platformId));
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.changePositionIfNotFit = /**
     * @return {?}
     */
    function () {
        if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < (parseInt(this.customHeight, 10) + 16)) {
            this.placement = 'bottom';
        }
        if (this.placement === 'bottom' && ((/** @type {?} */ (this.getBottomOffset()))) < (parseInt(this.customHeight, 10) + 32)) {
            this.placement = 'top';
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getBottomOffset = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        if (!this.customHeight) {
            /** @type {?} */
            var elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
            if (this.placement === 'top' && elPosition.top < 40) {
                this.placement = 'bottom';
            }
            if (this.placement === 'bottom' && (/** @type {?} */ (this.getBottomOffset())) < 60) {
                this.placement = 'top';
            }
        }
        else if (this.customHeight) {
            this.changePositionIfNotFit();
        }
        /** @type {?} */
        var showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () {
                showTooltip();
            }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbTooltip]',
                    exportAs: 'mdb-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"],] }] }
    ]; };
    TooltipDirective.propDecorators = {
        mdbTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        tooltipChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        shown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
        delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        customHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        fadeDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
        onclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }],
        onblur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['window:click',] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
        OnChange(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
    ], TooltipDirective.prototype, "mdbTooltip", void 0);
    return TooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    TooltipModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    declarations: [TooltipDirective, TooltipContainerComponent],
                    exports: [TooltipDirective],
                    entryComponents: [TooltipContainerComponent]
                },] }
    ];
    return TooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            /** @type {?} */
            var button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            /** @type {?} */
            var xPos = event.clientX - button.getBoundingClientRect().left;
            /** @type {?} */
            var yPos = event.clientY - button.getBoundingClientRect().top;
            /** @type {?} */
            var tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            /** @type {?} */
            var ripple = button.appendChild(tmp);
            /** @type {?} */
            var top_1 = yPos + 'px';
            /** @type {?} */
            var left = xPos + 'px';
            tmp.style.top = top_1;
            tmp.style.left = left;
            /** @type {?} */
            var scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            /** @type {?} */
            var duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    WavesDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"], args: [{
                    selector: '[mdbWavesEffect]'
                },] }
    ];
    /** @nocollapse */
    WavesDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"] }
    ]; };
    WavesDirective.propDecorators = {
        click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"], args: ['click', ['$event'],] }]
    };
    return WavesDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: WavesModule, providers: [] };
    };
    WavesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    declarations: [WavesDirective],
                    exports: [WavesDirective]
                },] }
    ];
    return WavesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MODULES = [
    ButtonsModule,
    CardsFreeModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{
                    imports: [
                        ButtonsModule,
                        WavesModule.forRoot(),
                        InputsModule.forRoot(),
                        NavbarModule,
                        DropdownModule.forRoot(),
                        CarouselModule.forRoot(),
                        ChartsModule,
                        CollapseModule.forRoot(),
                        ModalModule.forRoot(),
                        TooltipModule.forRoot(),
                        PopoverModule.forRoot(),
                        IconsModule,
                        CardsFreeModule.forRoot(),
                        CheckboxModule,
                        TableModule,
                        BadgeModule,
                        BreadcrumbModule,
                        InputUtilitiesModule
                    ],
                    exports: MODULES,
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["NO_ERRORS_SCHEMA"]]
                },] }
    ];
    return MDBRootModule;
}());
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"], args: [{ exports: MODULES },] }
    ];
    return MDBBootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-bootstrap-md.js.map

/***/ }),

/***/ "./node_modules/atoa/atoa.js":
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "./node_modules/contra/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(/*! ticky */ "./node_modules/ticky/ticky-browser.js");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "./node_modules/contra/emitter.js":
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(/*! atoa */ "./node_modules/atoa/atoa.js");
var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/contra/debounce.js");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "./node_modules/crossvent/node_modules/custom-event/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/crossvent/node_modules/custom-event/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}


/***/ }),

/***/ "./node_modules/crossvent/src/crossvent.js":
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ "./node_modules/crossvent/node_modules/custom-event/index.js");
var eventmap = __webpack_require__(/*! ./eventmap */ "./node_modules/crossvent/src/eventmap.js");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}


/***/ }),

/***/ "./node_modules/crossvent/src/eventmap.js":
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;


/***/ }),

/***/ "./node_modules/dragula/classes.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "./node_modules/dragula/dragula.js":
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ "./node_modules/contra/emitter.js");
var crossvent = __webpack_require__(/*! crossvent */ "./node_modules/crossvent/src/crossvent.js");
var classes = __webpack_require__(/*! ./classes */ "./node_modules/dragula/classes.js");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;


/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ckeditor_module_1 = __webpack_require__(/*! ./src/ckeditor.module */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js");
exports.CKEditorModule = ckeditor_module_1.CKEditorModule;
var ckeditor_component_1 = __webpack_require__(/*! ./src/ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
exports.CKEditorComponent = ckeditor_component_1.CKEditorComponent;
var ckbutton_directive_1 = __webpack_require__(/*! ./src/ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
exports.CKButtonDirective = ckbutton_directive_1.CKButtonDirective;
var ckgroup_directive_1 = __webpack_require__(/*! ./src/ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
exports.CKGroupDirective = ckgroup_directive_1.CKGroupDirective;
//# sourceMappingURL=ng2-ckeditor.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
 *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
 *      </ckbutton>
 *   </ckeditor>
 */
var CKButtonDirective = /** @class */ (function () {
    function CKButtonDirective() {
        this.click = new core_1.EventEmitter();
    }
    CKButtonDirective.prototype.initialize = function (editor) {
        var _this = this;
        editor.instance.addCommand(this.command, {
            exec: function (evt) {
                _this.click.emit(evt);
            },
        });
        editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon,
        });
    };
    CKButtonDirective.prototype.ngOnInit = function () {
        if (!this.name)
            throw new Error('Attribute "name" is required on <ckbutton>');
        if (!this.command)
            throw new Error('Attribute "command" is required on <ckbutton>');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKButtonDirective.prototype, "click", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "command", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "toolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = __decorate([
        core_1.Directive({
            selector: 'ckbutton',
        })
    ], CKButtonDirective);
    return CKButtonDirective;
}());
exports.CKButtonDirective = CKButtonDirective;
//# sourceMappingURL=ckbutton.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditor component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
 */
var CKEditorComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function CKEditorComponent(zone) {
        this.zone = zone;
        this.change = new core_1.EventEmitter();
        this.editorChange = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.contentDom = new core_1.EventEmitter();
        this.fileUploadRequest = new core_1.EventEmitter();
        this.fileUploadResponse = new core_1.EventEmitter();
        this.paste = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this._value = '';
    }
    CKEditorComponent_1 = CKEditorComponent;
    Object.defineProperty(CKEditorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.onChange(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    CKEditorComponent.prototype.ngOnChanges = function (changes) {
        if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
        }
    };
    /**
     * On component destroy
     */
    CKEditorComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.removeAllListeners();
                CKEDITOR.instances[_this.instance.name].destroy();
                _this.instance.destroy();
                _this.instance = null;
            });
        }
    };
    /**
     * On component view init
     */
    CKEditorComponent.prototype.ngAfterViewInit = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * On component view checked
     */
    CKEditorComponent.prototype.ngAfterViewChecked = function () {
        this.ckeditorInit(this.config || {});
    };
    /**
     * Value update process
     */
    CKEditorComponent.prototype.updateValue = function (value) {
        var _this = this;
        this.zone.run(function () {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
            _this.change.emit(value);
        });
    };
    /**
     * CKEditor init
     */
    CKEditorComponent.prototype.ckeditorInit = function (config) {
        var _this = this;
        if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
        }
        else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
                return;
            }
            if (this.readonly) {
                config.readOnly = this.readonly;
            }
            // CKEditor replace textarea
            this.instance = CKEDITOR.replace(this.host.nativeElement, config);
            // Set initial value
            this.instance.setData(this.value);
            // listen for instanceReady event
            this.instance.on('instanceReady', function (evt) {
                // if value has changed while instance loading
                // update instance with current component value
                if (_this.instance.getData() !== _this.value) {
                    _this.instance.setData(_this.value);
                }
                // send the evt to the EventEmitter
                _this.ready.emit(evt);
            });
            // CKEditor change event
            this.instance.on('change', function (evt) {
                _this.onTouched();
                var value = _this.instance.getData();
                if (_this.value !== value) {
                    // Debounce update
                    if (_this.debounce) {
                        if (_this.debounceTimeout)
                            clearTimeout(_this.debounceTimeout);
                        _this.debounceTimeout = setTimeout(function () {
                            _this.updateValue(value);
                            _this.debounceTimeout = null;
                        }, parseInt(_this.debounce));
                        // Live update
                    }
                    else {
                        _this.updateValue(value);
                    }
                }
                // Original ckeditor event dispatch
                _this.editorChange.emit(evt);
            });
            // CKEditor blur event
            this.instance.on('blur', function (evt) {
                _this.blur.emit(evt);
            });
            // CKEditor focus event
            this.instance.on('focus', function (evt) {
                _this.focus.emit(evt);
            });
            // CKEditor contentDom event
            this.instance.on('contentDom', function (evt) {
                _this.contentDom.emit(evt);
            });
            // CKEditor fileUploadRequest event
            this.instance.on('fileUploadRequest', function (evt) {
                _this.fileUploadRequest.emit(evt);
            });
            // CKEditor fileUploadResponse event
            this.instance.on('fileUploadResponse', function (evt) {
                _this.fileUploadResponse.emit(evt);
            });
            // CKEditor paste event
            this.instance.on('paste', function (evt) {
                _this.paste.emit(evt);
            });
            // CKEditor drop event
            this.instance.on('drop', function (evt) {
                _this.drop.emit(evt);
            });
            // Add Toolbar Groups to Editor. This will also add Buttons within groups.
            this.toolbarGroups.forEach(function (group) {
                group.initialize(_this);
            });
            // Add Toolbar Buttons to Editor.
            this.toolbarButtons.forEach(function (button) {
                button.initialize(_this);
            });
        }
    };
    /**
     * Implements ControlValueAccessor
     */
    CKEditorComponent.prototype.writeValue = function (value) {
        this._value = value;
        if (this.instance)
            this.instance.setData(value);
    };
    CKEditorComponent.prototype.onChange = function (_) { };
    CKEditorComponent.prototype.onTouched = function () { };
    CKEditorComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CKEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CKEditorComponent.prototype.documentContains = function (node) {
        return document.contains ? document.contains(node) : document.body.contains(node);
    };
    var CKEditorComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CKEditorComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKEditorComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "editorChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "ready", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "contentDom", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "paste", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "drop", void 0);
    __decorate([
        core_1.ViewChild('host'),
        __metadata("design:type", Object)
    ], CKEditorComponent.prototype, "host", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarButtons", void 0);
    __decorate([
        core_1.ContentChildren(ckgroup_directive_1.CKGroupDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKEditorComponent.prototype, "toolbarGroups", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = __decorate([
        core_1.Component({
            selector: 'ckeditor',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CKEditorComponent_1; }),
                    multi: true,
                },
            ],
            template: "<textarea #host></textarea>",
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], CKEditorComponent);
    return CKEditorComponent;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckeditor.module.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var ckeditor_component_1 = __webpack_require__(/*! ./ckeditor.component */ "./node_modules/ng2-ckeditor/lib/src/ckeditor.component.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
var ckgroup_directive_1 = __webpack_require__(/*! ./ckgroup.directive */ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js");
/**
 * CKEditorModule
 */
var CKEditorModule = /** @class */ (function () {
    function CKEditorModule() {
    }
    CKEditorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
            exports: [ckeditor_component_1.CKEditorComponent, ckbutton_directive_1.CKButtonDirective, ckgroup_directive_1.CKGroupDirective],
        })
    ], CKEditorModule);
    return CKEditorModule;
}());
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map

/***/ }),

/***/ "./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js":
/*!****************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/src/ckgroup.directive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ckbutton_directive_1 = __webpack_require__(/*! ./ckbutton.directive */ "./node_modules/ng2-ckeditor/lib/src/ckbutton.directive.js");
/**
 * CKGroup component
 * Usage :
 *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
 *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
 *          .
 *          .
 *      </ckgroup>
 *   </ckeditor>
 */
var CKGroupDirective = /** @class */ (function () {
    function CKGroupDirective() {
    }
    CKGroupDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
        this.toolbarButtons.forEach(function (button) { return (button.toolbar = _this.name); });
    };
    CKGroupDirective.prototype.initialize = function (editor) {
        editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf);
        // Initialize each button within ckgroup
        this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CKGroupDirective.prototype, "previous", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CKGroupDirective.prototype, "subgroupOf", void 0);
    __decorate([
        core_1.ContentChildren(ckbutton_directive_1.CKButtonDirective),
        __metadata("design:type", core_1.QueryList)
    ], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = __decorate([
        core_1.Directive({
            selector: 'ckgroup',
        })
    ], CKGroupDirective);
    return CKGroupDirective;
}());
exports.CKGroupDirective = CKGroupDirective;
//# sourceMappingURL=ckgroup.directive.js.map

/***/ }),

/***/ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js":
/*!************************************************************!*\
  !*** ./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js ***!
  \************************************************************/
/*! exports provided: DragulaDirective, DragulaService, DragulaModule, dragula, DrakeFactory, Group, EventTypes, MockDrake, MockDrakeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaDirective", function() { return DragulaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaService", function() { return DragulaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragulaModule", function() { return DragulaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragula", function() { return dragula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrakeFactory", function() { return DrakeFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypes", function() { return EventTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrake", function() { return MockDrake; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDrakeFactory", function() { return MockDrakeFactory; });
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ "./node_modules/dragula/dragula.js");
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Group = /** @class */ (function () {
    function Group(name, drake, options) {
        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
    }
    return Group;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var EventTypes = {
    Cancel: "cancel",
    Cloned: "cloned",
    Drag: "drag",
    DragEnd: "dragend",
    Drop: "drop",
    Out: "out",
    Over: "over",
    Remove: "remove",
    Shadow: "shadow",
    DropModel: "dropModel",
    RemoveModel: "removeModel",
};
/** @type {?} */
var AllEvents = Object.keys(EventTypes).map(function (k) { return (EventTypes[/** @type {?} */ (k)]); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var dragula = dragula__WEBPACK_IMPORTED_MODULE_0___default.a || dragula__WEBPACK_IMPORTED_MODULE_0__;
var DrakeFactory = /** @class */ (function () {
    function DrakeFactory(build) {
        if (build === void 0) { build = dragula; }
        this.build = build;
    }
    return DrakeFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var filterEvent = function (eventType, filterDragType, projector) { return function (input) {
    return input.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
        var event = _a.event, name = _a.name;
        return event === eventType
            && (filterDragType === undefined || name === filterDragType);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
        var name = _a.name, args = _a.args;
        return projector(name, args);
    }));
}; };
/** @type {?} */
var elContainerSourceProjector = function (name, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 3), el = _b[0], container = _b[1], source = _b[2];
    return ({ name: name, el: el, container: container, source: source });
};
var DragulaService = /** @class */ (function () {
    function DragulaService(drakeFactory) {
        if (drakeFactory === void 0) { drakeFactory = null; }
        var _this = this;
        this.drakeFactory = drakeFactory;
        this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.drag = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), el = _b[0], source = _b[1];
            return ({ name: name, el: el, source: source });
        })); };
        this.dragend = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 1), el = _b[0];
            return ({ name: name, el: el });
        })); };
        this.drop = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 4), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3];
            return { name: name, el: el, target: target, source: source, sibling: sibling };
        })); };
        this.elContainerSource = function (eventType) {
            return function (groupName) {
                return _this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
            };
        };
        this.cancel = this.elContainerSource(EventTypes.Cancel);
        this.remove = this.elContainerSource(EventTypes.Remove);
        this.shadow = this.elContainerSource(EventTypes.Shadow);
        this.over = this.elContainerSource(EventTypes.Over);
        this.out = this.elContainerSource(EventTypes.Out);
        this.cloned = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 3), clone = _b[0], original = _b[1], cloneType = _b[2];
            return { name: name, clone: clone, original: original, cloneType: cloneType };
        })); };
        this.dropModel = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 9), el = _b[0], target = _b[1], source = _b[2], sibling = _b[3], item = _b[4], sourceModel = _b[5], targetModel = _b[6], sourceIndex = _b[7], targetIndex = _b[8];
            return { name: name, el: el, target: target, source: source, sibling: sibling, item: item, sourceModel: sourceModel, targetModel: targetModel, sourceIndex: sourceIndex, targetIndex: targetIndex };
        })); };
        this.removeModel = function (groupName) { return _this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, function (name, _a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 6), el = _b[0], container = _b[1], source = _b[2], item = _b[3], sourceModel = _b[4], sourceIndex = _b[5];
            return { name: name, el: el, container: container, source: source, item: item, sourceModel: sourceModel, sourceIndex: sourceIndex };
        })); };
        this.groups = {};
        if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
        }
    }
    /**
     * Public mainly for testing purposes. Prefer `createGroup()`.
     * @param {?} group
     * @return {?}
     */
    DragulaService.prototype.add = /**
     * Public mainly for testing purposes. Prefer `createGroup()`.
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var existingGroup = this.find(group.name);
        if (existingGroup) {
            throw new Error('Group named: "' + group.name + '" already exists.');
        }
        this.groups[group.name] = group;
        this.handleModels(group);
        this.setupEvents(group);
        return group;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DragulaService.prototype.find = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.groups[name];
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DragulaService.prototype.destroy = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var group = this.find(name);
        if (!group) {
            return;
        }
        group.drake && group.drake.destroy();
        delete this.groups[name];
    };
    /**
     * Creates a group with the specified name and options.
     *
     * Note: formerly known as `setOptions`
     * @template T
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    DragulaService.prototype.createGroup = /**
     * Creates a group with the specified name and options.
     *
     * Note: formerly known as `setOptions`
     * @template T
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    function (name, options) {
        return this.add(new Group(name, this.drakeFactory.build([], options), options));
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DragulaService.prototype.handleModels = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var name = _a.name, drake = _a.drake, options = _a.options;
        /** @type {?} */
        var dragElm;
        /** @type {?} */
        var dragIndex;
        /** @type {?} */
        var dropIndex;
        drake.on('remove', function (el, container, source) {
            if (!drake.models) {
                return;
            }
            /** @type {?} */
            var sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel = sourceModel.slice(0);
            /** @type {?} */
            var item = sourceModel.splice(dragIndex, 1)[0];
            // console.log('REMOVE');
            // console.log(sourceModel);
            // console.log('REMOVE');
            // console.log(sourceModel);
            _this.dispatch$.next({
                event: EventTypes.RemoveModel,
                name: name,
                args: [el, container, source, item, sourceModel, dragIndex]
            });
        });
        drake.on('drag', function (el, source) {
            if (!drake.models) {
                return;
            }
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        });
        drake.on('drop', function (dropElm, target, source, sibling) {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = _this.domIndexOf(dropElm, target);
            /** @type {?} */
            var sourceModel = drake.models[drake.containers.indexOf(source)];
            /** @type {?} */
            var targetModel = drake.models[drake.containers.indexOf(target)];
            /** @type {?} */
            var item;
            if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item);
                // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value
                targetModel = sourceModel;
            }
            else {
                /** @type {?} */
                var isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];
                if (isCopying) {
                    if (!options.copyItem) {
                        throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                    }
                    item = options.copyItem(item);
                }
                if (!isCopying) {
                    sourceModel = sourceModel.slice(0);
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);
                if (isCopying) {
                    try {
                        target.removeChild(dropElm);
                    }
                    catch (e) { }
                }
            }
            _this.dispatch$.next({
                event: EventTypes.DropModel,
                name: name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
            });
        });
    };
    /**
     * @param {?} group
     * @return {?}
     */
    DragulaService.prototype.setupEvents = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        var _this = this;
        if (group.initEvents) {
            return;
        }
        group.initEvents = true;
        /** @type {?} */
        var name = group.name;
        /** @type {?} */
        var emitter = function (event) {
            group.drake.on(event, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.dispatch$.next({ event: event, name: name, args: args });
            });
        };
        AllEvents.forEach(emitter);
    };
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    DragulaService.prototype.domIndexOf = /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    };
    DragulaService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] }
    ];
    /** @nocollapse */
    DragulaService.ctorParameters = function () { return [
        { type: DrakeFactory, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
    ]; };
    return DragulaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragulaDirective = /** @class */ (function () {
    function DragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    Object.defineProperty(DragulaDirective.prototype, "container", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el && this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DragulaDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.dragula) {
            var _a = changes.dragula, prev = _a.previousValue, current = _a.currentValue, firstChange = _a.firstChange;
            /** @type {?} */
            var hadPreviousValue = !!prev;
            /** @type {?} */
            var hasNewValue = !!current;
            // something -> null       =>  teardown only
            // something -> something  =>  teardown, then setup
            //      null -> something  =>  setup only
            //
            //      null -> null (precluded by fact of change being present)
            if (hadPreviousValue) {
                this.teardown(prev);
            }
            if (hasNewValue) {
                this.setup();
            }
        }
        else if (changes && changes.dragulaModel) {
            var _b = changes.dragulaModel, prev = _b.previousValue, current = _b.currentValue, firstChange = _b.firstChange;
            var drake = this.group.drake;
            if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */
                var prevIndex = drake.models.indexOf(prev);
                if (prevIndex !== -1) {
                    // delete the previous
                    drake.models.splice(prevIndex, 1);
                    // maybe insert a new one at the same spot
                    if (!!current) {
                        drake.models.splice(prevIndex, 0, current);
                    }
                }
                else if (!!current) {
                    // no previous one to remove; just push this one.
                    drake.models.push(current);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DragulaDirective.prototype.setup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var checkModel = function (group) {
            if (_this.dragulaModel) {
                if (group.drake.models) {
                    group.drake.models.push(_this.dragulaModel);
                }
                else {
                    group.drake.models = [_this.dragulaModel];
                }
            }
        };
        /** @type {?} */
        var group = this.dragulaService.find(this.dragula);
        if (!group) {
            /** @type {?} */
            var options = {};
            group = this.dragulaService.createGroup(this.dragula, options);
        }
        // ensure model and container element are pushed
        checkModel(group);
        group.drake.containers.push(this.container);
        this.subscribe(this.dragula);
        this.group = group;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DragulaDirective.prototype.subscribe = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.subs.add(this.dragulaService
            .dropModel(name)
            .subscribe(function (_a) {
            var source = _a.source, target = _a.target, sourceModel = _a.sourceModel, targetModel = _a.targetModel;
            if (source === _this.el.nativeElement) {
                _this.dragulaModelChange.emit(sourceModel);
            }
            else if (target === _this.el.nativeElement) {
                _this.dragulaModelChange.emit(targetModel);
            }
        }));
        this.subs.add(this.dragulaService
            .removeModel(name)
            .subscribe(function (_a) {
            var source = _a.source, sourceModel = _a.sourceModel;
            if (source === _this.el.nativeElement) {
                _this.dragulaModelChange.emit(sourceModel);
            }
        }));
    };
    /**
     * @param {?} groupName
     * @return {?}
     */
    DragulaDirective.prototype.teardown = /**
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        if (this.subs) {
            this.subs.unsubscribe();
        }
        /** @type {?} */
        var group = this.dragulaService.find(groupName);
        if (group) {
            /** @type {?} */
            var itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
            if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
            }
            if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                var modelIndex = group.drake.models.indexOf(this.dragulaModel);
                if (modelIndex !== -1) {
                    group.drake.models.splice(modelIndex, 1);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DragulaDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.teardown(this.dragula);
    };
    DragulaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{ selector: '[dragula]' },] }
    ];
    /** @nocollapse */
    DragulaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: DragulaService }
    ]; };
    DragulaDirective.propDecorators = {
        dragula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dragulaModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        dragulaModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return DragulaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragulaModule = /** @class */ (function () {
    function DragulaModule() {
    }
    /**
     * @return {?}
     */
    DragulaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    };
    DragulaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    exports: [DragulaDirective],
                    declarations: [DragulaDirective],
                },] }
    ];
    return DragulaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var MockDrakeFactory = new DrakeFactory(function (containers, options) {
    return new MockDrake(containers, options);
});
/**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
var  /**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
MockDrake = /** @class */ (function () {
    /**
     * @param containers A list of container elements.
     * @param options These will NOT be used. At all.
     * @param models Nonstandard, but useful for testing using `new MockDrake()` directly.
     *               Note, default value is undefined, like a real Drake. Don't change that.
     */
    function MockDrake(containers, options, models) {
        if (containers === void 0) { containers = []; }
        if (options === void 0) { options = {}; }
        this.containers = containers;
        this.options = options;
        this.models = models;
        /* Doesn't represent anything meaningful. */
        this.dragging = false;
        this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    /* Does nothing useful. */
    /**
     * @param {?} item
     * @return {?}
     */
    MockDrake.prototype.start = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.dragging = true;
    };
    /* Does nothing useful. */
    /**
     * @return {?}
     */
    MockDrake.prototype.end = /**
     * @return {?}
     */
    function () {
        this.dragging = false;
    };
    /**
     * @param {?=} revert
     * @return {?}
     */
    MockDrake.prototype.cancel = /**
     * @param {?=} revert
     * @return {?}
     */
    function (revert) {
        this.dragging = false;
    };
    /* Does nothing useful. */
    /**
     * @return {?}
     */
    MockDrake.prototype.remove = /**
     * @return {?}
     */
    function () {
        this.dragging = false;
    };
    /**
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    MockDrake.prototype.on = /**
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    function (event, callback) {
        this.subs.add(this.emitter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var eventType = _a.eventType;
            return eventType === event;
        }))
            .subscribe(function (_a) {
            var args = _a.args;
            callback.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(args));
        }));
    };
    /**
     * @return {?}
     */
    MockDrake.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.subs.unsubscribe();
    };
    /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     */
    /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     * @param {?} eventType
     * @param {...?} args
     * @return {?}
     */
    MockDrake.prototype.emit = /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     * @param {?} eventType
     * @param {...?} args
     * @return {?}
     */
    function (eventType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.emitter$.next({ eventType: eventType, args: args });
    };
    return MockDrake;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRyYWd1bGEuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nMi1kcmFndWxhL0dyb3VwLnRzIiwibmc6Ly9uZzItZHJhZ3VsYS9FdmVudFR5cGVzLnRzIiwibmc6Ly9uZzItZHJhZ3VsYS9EcmFrZUZhY3RvcnkudHMiLCJuZzovL25nMi1kcmFndWxhL2NvbXBvbmVudHMvZHJhZ3VsYS5zZXJ2aWNlLnRzIiwibmc6Ly9uZzItZHJhZ3VsYS9jb21wb25lbnRzL2RyYWd1bGEuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZzItZHJhZ3VsYS9jb21wb25lbnRzL2RyYWd1bGEubW9kdWxlLnRzIiwibmc6Ly9uZzItZHJhZ3VsYS9Nb2NrRHJha2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSBcIi4vRHJha2VXaXRoTW9kZWxzXCI7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gXCIuL0RyYWd1bGFPcHRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIHB1YmxpYyBpbml0RXZlbnRzOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRyYWtlOiBEcmFrZVdpdGhNb2RlbHMsXG4gICAgcHVibGljIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zXG4gICkge31cbn1cbiIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXMge1xuICAgIENhbmNlbCA9IFwiY2FuY2VsXCIsXG4gICAgQ2xvbmVkID0gXCJjbG9uZWRcIixcbiAgICBEcmFnID0gXCJkcmFnXCIsXG4gICAgRHJhZ0VuZCA9IFwiZHJhZ2VuZFwiLFxuICAgIERyb3AgPSBcImRyb3BcIixcbiAgICBPdXQgPSBcIm91dFwiLFxuICAgIE92ZXIgPSBcIm92ZXJcIixcbiAgICBSZW1vdmUgPSBcInJlbW92ZVwiLFxuICAgIFNoYWRvdyA9IFwic2hhZG93XCIsXG4gICAgRHJvcE1vZGVsID0gXCJkcm9wTW9kZWxcIixcbiAgICBSZW1vdmVNb2RlbCA9IFwicmVtb3ZlTW9kZWxcIixcbn1cblxuZXhwb3J0IGNvbnN0IEFsbEV2ZW50czogRXZlbnRUeXBlc1tdID0gT2JqZWN0LmtleXMoRXZlbnRUeXBlcykubWFwKGsgPT4gRXZlbnRUeXBlc1trIGFzIGFueV0gYXMgRXZlbnRUeXBlcyk7XG5cblxuIiwiaW1wb3J0IHsgRHJhZ3VsYU9wdGlvbnMgfSBmcm9tICcuL0RyYWd1bGFPcHRpb25zJztcbmltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gJy4vRHJha2VXaXRoTW9kZWxzJztcbmltcG9ydCAqIGFzIGRyYWd1bGFFeHB0IGZyb20gJ2RyYWd1bGEnO1xuZXhwb3J0IGNvbnN0IGRyYWd1bGE6IChjb250YWluZXJzPzogYW55LCBvcHRpb25zPzogYW55KSA9PiBhbnkgPSAoZHJhZ3VsYUV4cHQgYXMgYW55KS5kZWZhdWx0IHx8IGRyYWd1bGFFeHB0O1xuXG5leHBvcnQgdHlwZSBEcmFrZUJ1aWxkZXIgPSAoY29udGFpbmVyczogYW55W10sIG9wdGlvbnM6IERyYWd1bGFPcHRpb25zKSA9PiBEcmFrZVdpdGhNb2RlbHM7XG5cbmV4cG9ydCBjbGFzcyBEcmFrZUZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvciAocHVibGljIGJ1aWxkOiBEcmFrZUJ1aWxkZXIgPSBkcmFndWxhKSB7fVxufVxuXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuLi9Hcm91cCc7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gJy4uL0RyYWd1bGFPcHRpb25zJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRUeXBlcywgQWxsRXZlbnRzIH0gZnJvbSAnLi4vRXZlbnRUeXBlcyc7XG5pbXBvcnQgeyBEcmFrZUZhY3RvcnkgfSBmcm9tICcuLi9EcmFrZUZhY3RvcnknO1xuXG50eXBlIEZpbHRlclByb2plY3RvcjxUIGV4dGVuZHMgeyBuYW1lOiBzdHJpbmc7IH0+ID0gKG5hbWU6IHN0cmluZywgYXJnczogYW55W10pID0+IFQ7XG50eXBlIERpc3BhdGNoID0geyBldmVudDogRXZlbnRUeXBlczsgbmFtZTogc3RyaW5nOyBhcmdzOiBhbnlbXTsgfTtcblxuY29uc3QgZmlsdGVyRXZlbnQgPSA8VCBleHRlbmRzIHsgbmFtZTogc3RyaW5nOyB9PihcbiAgZXZlbnRUeXBlOiBFdmVudFR5cGVzLFxuICBmaWx0ZXJEcmFnVHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwcm9qZWN0b3I6IEZpbHRlclByb2plY3RvcjxUPlxuKSA9PiAoaW5wdXQ6IE9ic2VydmFibGU8RGlzcGF0Y2g+KTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gIHJldHVybiBpbnB1dC5waXBlKFxuICAgIGZpbHRlcigoeyBldmVudCwgbmFtZSB9KSA9PiB7XG4gICAgICByZXR1cm4gZXZlbnQgPT09IGV2ZW50VHlwZVxuICAgICAgICAgICYmIChmaWx0ZXJEcmFnVHlwZSA9PT0gdW5kZWZpbmVkIHx8IG5hbWUgPT09IGZpbHRlckRyYWdUeXBlKTtcbiAgICB9KSxcbiAgICBtYXAoKHsgbmFtZSwgYXJncyB9KSA9PiBwcm9qZWN0b3IobmFtZSwgYXJncykpXG4gICk7XG59XG5cbmNvbnN0IGVsQ29udGFpbmVyU291cmNlUHJvamVjdG9yID1cbiAgKG5hbWU6IHN0cmluZywgW2VsLCBjb250YWluZXIsIHNvdXJjZV06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50XSkgPT5cbiAgICAoeyBuYW1lLCBlbCwgY29udGFpbmVyLCBzb3VyY2UgfSk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEcmFndWxhU2VydmljZSB7XG5cbiAgLyogaHR0cHM6Ly9naXRodWIuY29tL2JldmFjcXVhL2RyYWd1bGEjZHJha2Vvbi1ldmVudHMgKi9cblxuICBwcml2YXRlIGRpc3BhdGNoJCA9IG5ldyBTdWJqZWN0PERpc3BhdGNoPigpO1xuXG4gIHB1YmxpYyBkcmFnID0gKGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuRHJhZyxcbiAgICAgIGdyb3VwTmFtZSxcbiAgICAgIChuYW1lLCBbZWwsIHNvdXJjZV06IFtFbGVtZW50LCBFbGVtZW50XSkgPT4gKHsgbmFtZSwgZWwsIHNvdXJjZSB9KVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgZHJhZ2VuZCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyYWdFbmQsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW2VsXTogW0VsZW1lbnRdKSA9PiAoeyBuYW1lLCBlbCB9KVxuICAgIClcbiAgKTtcblxuICBwdWJsaWMgZHJvcCA9IChncm91cE5hbWU/OiBzdHJpbmcpID0+IHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgZmlsdGVyRXZlbnQoXG4gICAgICBFdmVudFR5cGVzLkRyb3AsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmdcbiAgICAgIF06IFtFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50LCBFbGVtZW50XSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcgfTtcbiAgICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBlbENvbnRhaW5lclNvdXJjZSA9XG4gICAgKGV2ZW50VHlwZTogRXZlbnRUeXBlcykgPT5cbiAgICAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PlxuICAgIHRoaXMuZGlzcGF0Y2gkLnBpcGUoXG4gICAgICBmaWx0ZXJFdmVudChldmVudFR5cGUsIGdyb3VwTmFtZSwgZWxDb250YWluZXJTb3VyY2VQcm9qZWN0b3IpXG4gICAgKTtcblxuICBwdWJsaWMgY2FuY2VsID0gdGhpcy5lbENvbnRhaW5lclNvdXJjZShFdmVudFR5cGVzLkNhbmNlbCk7XG4gIHB1YmxpYyByZW1vdmUgPSB0aGlzLmVsQ29udGFpbmVyU291cmNlKEV2ZW50VHlwZXMuUmVtb3ZlKTtcbiAgcHVibGljIHNoYWRvdyA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5TaGFkb3cpO1xuICBwdWJsaWMgb3ZlciA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5PdmVyKTtcbiAgcHVibGljIG91dCA9IHRoaXMuZWxDb250YWluZXJTb3VyY2UoRXZlbnRUeXBlcy5PdXQpO1xuXG4gIHB1YmxpYyBjbG9uZWQgPSAoZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5DbG9uZWQsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBjbG9uZSwgb3JpZ2luYWwsIGNsb25lVHlwZVxuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsICdtaXJyb3InIHwgJ2NvcHknXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBjbG9uZSwgb3JpZ2luYWwsIGNsb25lVHlwZSB9XG4gICAgICB9KVxuICApO1xuXG4gIHB1YmxpYyBkcm9wTW9kZWwgPSA8VCA9IGFueT4oZ3JvdXBOYW1lPzogc3RyaW5nKSA9PiB0aGlzLmRpc3BhdGNoJC5waXBlKFxuICAgIGZpbHRlckV2ZW50KFxuICAgICAgRXZlbnRUeXBlcy5Ecm9wTW9kZWwsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgc291cmNlSW5kZXgsIHRhcmdldEluZGV4XG4gICAgICBdOiBbRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgRWxlbWVudCwgVCwgVFtdLCBUW10sIG51bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgc291cmNlSW5kZXgsIHRhcmdldEluZGV4IH1cbiAgICAgIH0pXG4gICk7XG5cbiAgcHVibGljIHJlbW92ZU1vZGVsID0gPFQgPSBhbnk+KGdyb3VwTmFtZT86IHN0cmluZykgPT4gdGhpcy5kaXNwYXRjaCQucGlwZShcbiAgICBmaWx0ZXJFdmVudChcbiAgICAgIEV2ZW50VHlwZXMuUmVtb3ZlTW9kZWwsXG4gICAgICBncm91cE5hbWUsXG4gICAgICAobmFtZSwgW1xuICAgICAgICBlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBzb3VyY2VJbmRleFxuICAgICAgXTogW0VsZW1lbnQsIEVsZW1lbnQsIEVsZW1lbnQsIFQsIFRbXSwgbnVtYmVyXSkgPT4ge1xuICAgICAgICByZXR1cm4geyBuYW1lLCBlbCwgY29udGFpbmVyLCBzb3VyY2UsIGl0ZW0sIHNvdXJjZU1vZGVsLCBzb3VyY2VJbmRleCB9XG4gICAgICB9XG4gICAgKVxuICApO1xuXG4gIHByaXZhdGUgZ3JvdXBzOiB7IFtrOiBzdHJpbmddOiBHcm91cCB9ID0ge307XG5cbiAgY29uc3RydWN0b3IgKEBPcHRpb25hbCgpIHByaXZhdGUgZHJha2VGYWN0b3J5OiBEcmFrZUZhY3RvcnkgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuZHJha2VGYWN0b3J5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKTtcbiAgICB9XG4gIH1cblxuICAvKiogUHVibGljIG1haW5seSBmb3IgdGVzdGluZyBwdXJwb3Nlcy4gUHJlZmVyIGBjcmVhdGVHcm91cCgpYC4gKi9cbiAgcHVibGljIGFkZChncm91cDogR3JvdXApOiBHcm91cCB7XG4gICAgbGV0IGV4aXN0aW5nR3JvdXAgPSB0aGlzLmZpbmQoZ3JvdXAubmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR3JvdXAgbmFtZWQ6IFwiJyArIGdyb3VwLm5hbWUgKyAnXCIgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuICAgIHRoaXMuZ3JvdXBzW2dyb3VwLm5hbWVdID0gZ3JvdXA7XG4gICAgdGhpcy5oYW5kbGVNb2RlbHMoZ3JvdXApO1xuICAgIHRoaXMuc2V0dXBFdmVudHMoZ3JvdXApO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kKG5hbWU6IHN0cmluZyk6IEdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cHNbbmFtZV07XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgZ3JvdXAgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgaWYgKCFncm91cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBncm91cC5kcmFrZSAmJiBncm91cC5kcmFrZS5kZXN0cm95KCk7XG4gICAgZGVsZXRlIHRoaXMuZ3JvdXBzW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBncm91cCB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZSBhbmQgb3B0aW9ucy5cbiAgICpcbiAgICogTm90ZTogZm9ybWVybHkga25vd24gYXMgYHNldE9wdGlvbnNgXG4gICAqL1xuICBwdWJsaWMgY3JlYXRlR3JvdXA8VCA9IGFueT4obmFtZTogc3RyaW5nLCBvcHRpb25zOiBEcmFndWxhT3B0aW9uczxUPik6IEdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5hZGQobmV3IEdyb3VwKFxuICAgICAgbmFtZSxcbiAgICAgIHRoaXMuZHJha2VGYWN0b3J5LmJ1aWxkKFtdLCBvcHRpb25zKSxcbiAgICAgIG9wdGlvbnNcbiAgICApKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW9kZWxzKHsgbmFtZSwgZHJha2UsIG9wdGlvbnMgfTogR3JvdXApOiB2b2lkIHtcbiAgICBsZXQgZHJhZ0VsbTogYW55O1xuICAgIGxldCBkcmFnSW5kZXg6IG51bWJlcjtcbiAgICBsZXQgZHJvcEluZGV4OiBudW1iZXI7XG4gICAgZHJha2Uub24oJ3JlbW92ZScsIChlbDogYW55LCBjb250YWluZXI6IGFueSwgc291cmNlOiBhbnkpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApOyAvLyBjbG9uZSBpdFxuICAgICAgY29uc3QgaXRlbSA9IHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdO1xuICAgICAgLy8gY29uc29sZS5sb2coJ1JFTU9WRScpO1xuICAgICAgLy8gY29uc29sZS5sb2coc291cmNlTW9kZWwpO1xuICAgICAgdGhpcy5kaXNwYXRjaCQubmV4dCh7XG4gICAgICAgIGV2ZW50OiBFdmVudFR5cGVzLlJlbW92ZU1vZGVsLFxuICAgICAgICBuYW1lLFxuICAgICAgICBhcmdzOiBbIGVsLCBjb250YWluZXIsIHNvdXJjZSwgaXRlbSwgc291cmNlTW9kZWwsIGRyYWdJbmRleCBdXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJhZycsIChlbDogYW55LCBzb3VyY2U6IGFueSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJhZ0VsbSA9IGVsO1xuICAgICAgZHJhZ0luZGV4ID0gdGhpcy5kb21JbmRleE9mKGVsLCBzb3VyY2UpO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcm9wJywgKGRyb3BFbG06IGFueSwgdGFyZ2V0OiBFbGVtZW50LCBzb3VyY2U6IEVsZW1lbnQsIHNpYmxpbmc/OiBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscyB8fCAhdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3BJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihkcm9wRWxtLCB0YXJnZXQpO1xuICAgICAgbGV0IHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIGxldCB0YXJnZXRNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAvLyBjb25zb2xlLmxvZygnRFJPUCcpO1xuICAgICAgLy8gY29uc29sZS5sb2coc291cmNlTW9kZWwpO1xuICAgICAgbGV0IGl0ZW06IGFueTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xuICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZU1vZGVsLnNsaWNlKDApXG4gICAgICAgIGl0ZW0gPSBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXTtcbiAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIC8vIHRoaXMgd2FzIHRydWUgYmVmb3JlIHdlIGNsb25lZCBhbmQgdXBkYXRlZCBzb3VyY2VNb2RlbCxcbiAgICAgICAgLy8gYnV0IHRhcmdldE1vZGVsIHN0aWxsIGhhcyB0aGUgb2xkIHZhbHVlXG4gICAgICAgIHRhcmdldE1vZGVsID0gc291cmNlTW9kZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaXNDb3B5aW5nID0gZHJhZ0VsbSAhPT0gZHJvcEVsbTtcbiAgICAgICAgaXRlbSA9IHNvdXJjZU1vZGVsW2RyYWdJbmRleF07XG4gICAgICAgIGlmIChpc0NvcHlpbmcpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuY29weUl0ZW0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklmIHlvdSBoYXZlIGVuYWJsZWQgYGNvcHlgIG9uIGEgZ3JvdXAsIHlvdSBtdXN0IHByb3ZpZGUgYSBgY29weUl0ZW1gIGZ1bmN0aW9uLlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtID0gb3B0aW9ucy5jb3B5SXRlbShpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNDb3B5aW5nKSB7XG4gICAgICAgICAgc291cmNlTW9kZWwgPSBzb3VyY2VNb2RlbC5zbGljZSgwKVxuICAgICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldE1vZGVsID0gdGFyZ2V0TW9kZWwuc2xpY2UoMClcbiAgICAgICAgdGFyZ2V0TW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIGlmIChpc0NvcHlpbmcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGRyb3BFbG0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoe1xuICAgICAgICBldmVudDogRXZlbnRUeXBlcy5Ecm9wTW9kZWwsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFyZ3M6IFsgZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UsIHNpYmxpbmcsIGl0ZW0sIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCwgZHJhZ0luZGV4LCBkcm9wSW5kZXggXVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwRXZlbnRzKGdyb3VwOiBHcm91cCk6IHZvaWQge1xuICAgIGlmIChncm91cC5pbml0RXZlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdyb3VwLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGNvbnN0IG5hbWUgPSBncm91cC5uYW1lO1xuICAgIGxldCB0aGF0OiBhbnkgPSB0aGlzO1xuICAgIGxldCBlbWl0dGVyID0gKGV2ZW50OiBFdmVudFR5cGVzKSA9PiB7XG4gICAgICBncm91cC5kcmFrZS5vbihldmVudCwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gkLm5leHQoeyBldmVudCwgbmFtZSwgYXJncyB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgQWxsRXZlbnRzLmZvckVhY2goZW1pdHRlcik7XG4gIH1cblxuICBwcml2YXRlIGRvbUluZGV4T2YoY2hpbGQ6IGFueSwgcGFyZW50OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFndWxhU2VydmljZSB9IGZyb20gJy4vZHJhZ3VsYS5zZXJ2aWNlJztcbmltcG9ydCB7IERyYWtlV2l0aE1vZGVscyB9IGZyb20gJy4uL0RyYWtlV2l0aE1vZGVscyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi4vR3JvdXAnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tkcmFndWxhXSd9KVxuZXhwb3J0IGNsYXNzIERyYWd1bGFEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkcmFndWxhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBkcmFndWxhTW9kZWw6IGFueVtdO1xuICBAT3V0cHV0KCkgcHVibGljIGRyYWd1bGFNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBnZXQgY29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbCAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbiAgcHJpdmF0ZSBncm91cDogR3JvdXA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZHJhZ3VsYVNlcnZpY2U6IERyYWd1bGFTZXJ2aWNlKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczoge2RyYWd1bGE/OiBTaW1wbGVDaGFuZ2UsIGRyYWd1bGFNb2RlbD86IFNpbXBsZUNoYW5nZX0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGEpIHtcbiAgICAgIGNvbnN0IHsgcHJldmlvdXNWYWx1ZTogcHJldiwgY3VycmVudFZhbHVlOiBjdXJyZW50LCBmaXJzdENoYW5nZSB9ID0gY2hhbmdlcy5kcmFndWxhO1xuICAgICAgbGV0IGhhZFByZXZpb3VzVmFsdWUgPSAhIXByZXY7XG4gICAgICBsZXQgaGFzTmV3VmFsdWUgPSAhIWN1cnJlbnQ7XG4gICAgICAvLyBzb21ldGhpbmcgLT4gbnVsbCAgICAgICA9PiAgdGVhcmRvd24gb25seVxuICAgICAgLy8gc29tZXRoaW5nIC0+IHNvbWV0aGluZyAgPT4gIHRlYXJkb3duLCB0aGVuIHNldHVwXG4gICAgICAvLyAgICAgIG51bGwgLT4gc29tZXRoaW5nICA9PiAgc2V0dXAgb25seVxuICAgICAgLy9cbiAgICAgIC8vICAgICAgbnVsbCAtPiBudWxsIChwcmVjbHVkZWQgYnkgZmFjdCBvZiBjaGFuZ2UgYmVpbmcgcHJlc2VudClcbiAgICAgIGlmIChoYWRQcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIHRoaXMudGVhcmRvd24ocHJldik7XG4gICAgICB9XG4gICAgICBpZiAoaGFzTmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmRyYWd1bGFNb2RlbCkge1xuICAgICAgLy8gdGhpcyBjb2RlIG9ubHkgcnVucyB3aGVuIHlvdSdyZSBub3QgY2hhbmdpbmcgdGhlIGdyb3VwIG5hbWVcbiAgICAgIC8vIGJlY2F1c2UgaWYgeW91J3JlIGNoYW5naW5nIHRoZSBncm91cCBuYW1lLCB5b3UnbGwgYmUgZG9pbmcgc2V0dXAgb3IgdGVhcmRvd25cbiAgICAgIC8vIGl0IGFsc28gb25seSBydW5zIGlmIHRoZXJlIGlzIGEgZ3JvdXAgbmFtZSB0byBhdHRhY2ggdG8uXG4gICAgICBjb25zdCB7IHByZXZpb3VzVmFsdWU6IHByZXYsIGN1cnJlbnRWYWx1ZTogY3VycmVudCwgZmlyc3RDaGFuZ2UgfSA9IGNoYW5nZXMuZHJhZ3VsYU1vZGVsO1xuICAgICAgY29uc3QgeyBkcmFrZSB9ID0gdGhpcy5ncm91cDtcbiAgICAgIGlmICh0aGlzLmRyYWd1bGEgJiYgZHJha2UpIHtcbiAgICAgICAgZHJha2UubW9kZWxzID0gZHJha2UubW9kZWxzIHx8IFtdO1xuICAgICAgICBsZXQgcHJldkluZGV4ID0gZHJha2UubW9kZWxzLmluZGV4T2YocHJldik7XG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gZGVsZXRlIHRoZSBwcmV2aW91c1xuICAgICAgICAgIGRyYWtlLm1vZGVscy5zcGxpY2UocHJldkluZGV4LCAxKTtcbiAgICAgICAgICAvLyBtYXliZSBpbnNlcnQgYSBuZXcgb25lIGF0IHRoZSBzYW1lIHNwb3RcbiAgICAgICAgICBpZiAoISFjdXJyZW50KSB7XG4gICAgICAgICAgICBkcmFrZS5tb2RlbHMuc3BsaWNlKHByZXZJbmRleCwgMCwgY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhY3VycmVudCkge1xuICAgICAgICAgIC8vIG5vIHByZXZpb3VzIG9uZSB0byByZW1vdmU7IGp1c3QgcHVzaCB0aGlzIG9uZS5cbiAgICAgICAgICBkcmFrZS5tb2RlbHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGwgbmdPbkluaXQgJ3NldHVwJyBiZWNhdXNlIHdlIHdhbnQgdG8gY2FsbCBpdCBpbiBuZ09uQ2hhbmdlc1xuICAvLyBhbmQgaXQgd291bGQgb3RoZXJ3aXNlIHJ1biB0d2ljZVxuICBwdWJsaWMgc2V0dXAoKTogdm9pZCB7XG4gICAgbGV0IGNoZWNrTW9kZWwgPSAoZ3JvdXA6IEdyb3VwKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwpIHtcbiAgICAgICAgaWYgKGdyb3VwLmRyYWtlLm1vZGVscykge1xuICAgICAgICAgIGdyb3VwLmRyYWtlLm1vZGVscy5wdXNoKHRoaXMuZHJhZ3VsYU1vZGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMgPSBbdGhpcy5kcmFndWxhTW9kZWxdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGZpbmQgb3IgY3JlYXRlIGEgZ3JvdXBcbiAgICBsZXQgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmZpbmQodGhpcy5kcmFndWxhKTtcbiAgICBpZiAoIWdyb3VwKSB7XG4gICAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgICAgZ3JvdXAgPSB0aGlzLmRyYWd1bGFTZXJ2aWNlLmNyZWF0ZUdyb3VwKHRoaXMuZHJhZ3VsYSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIG1vZGVsIGFuZCBjb250YWluZXIgZWxlbWVudCBhcmUgcHVzaGVkXG4gICAgY2hlY2tNb2RlbChncm91cCk7XG4gICAgZ3JvdXAuZHJha2UuY29udGFpbmVycy5wdXNoKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLmRyYWd1bGEpO1xuXG4gICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICB9XG5cbiAgcHVibGljIHN1YnNjcmliZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgdGhpcy5zdWJzLmFkZChcbiAgICAgIHRoaXMuZHJhZ3VsYVNlcnZpY2VcbiAgICAgIC5kcm9wTW9kZWwobmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc291cmNlLCB0YXJnZXQsIHNvdXJjZU1vZGVsLCB0YXJnZXRNb2RlbCB9KSA9PiB7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuZHJhZ3VsYU1vZGVsQ2hhbmdlLmVtaXQoc291cmNlTW9kZWwpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5kcmFndWxhTW9kZWxDaGFuZ2UuZW1pdCh0YXJnZXRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgdGhpcy5kcmFndWxhU2VydmljZVxuICAgICAgLnJlbW92ZU1vZGVsKG5hbWUpXG4gICAgICAuc3Vic2NyaWJlKCh7IHNvdXJjZSwgc291cmNlTW9kZWwgfSkgPT4ge1xuICAgICAgICBpZiAoc291cmNlID09PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmRyYWd1bGFNb2RlbENoYW5nZS5lbWl0KHNvdXJjZU1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHRlYXJkb3duKGdyb3VwTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vicykge1xuICAgICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5kcmFndWxhU2VydmljZS5maW5kKGdyb3VwTmFtZSk7XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSBncm91cC5kcmFrZS5jb250YWluZXJzLmluZGV4T2YodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGlmIChpdGVtVG9SZW1vdmUgIT09IC0xKSB7XG4gICAgICAgIGdyb3VwLmRyYWtlLmNvbnRhaW5lcnMuc3BsaWNlKGl0ZW1Ub1JlbW92ZSwgMSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kcmFndWxhTW9kZWwgJiYgZ3JvdXAuZHJha2UgJiYgZ3JvdXAuZHJha2UubW9kZWxzKSB7XG4gICAgICAgIGxldCBtb2RlbEluZGV4ID0gZ3JvdXAuZHJha2UubW9kZWxzLmluZGV4T2YodGhpcy5kcmFndWxhTW9kZWwpO1xuICAgICAgICBpZiAobW9kZWxJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBncm91cC5kcmFrZS5tb2RlbHMuc3BsaWNlKG1vZGVsSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGVhcmRvd24odGhpcy5kcmFndWxhKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ3VsYURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ3VsYS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuL2RyYWd1bGEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtEcmFndWxhRGlyZWN0aXZlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ3VsYURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIERyYWd1bGFNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERyYWd1bGFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtEcmFndWxhU2VydmljZV1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHJha2VXaXRoTW9kZWxzIH0gZnJvbSAnLi9EcmFrZVdpdGhNb2RlbHMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXZlbnRUeXBlcyB9IGZyb20gJy4vRXZlbnRUeXBlcyc7XG5pbXBvcnQgeyBEcmFndWxhT3B0aW9ucyB9IGZyb20gJy4vRHJhZ3VsYU9wdGlvbnMnO1xuaW1wb3J0IHsgRHJha2VGYWN0b3J5IH0gZnJvbSAnLi9EcmFrZUZhY3RvcnknO1xuXG5leHBvcnQgY29uc3QgTW9ja0RyYWtlRmFjdG9yeSA9IG5ldyBEcmFrZUZhY3RvcnkoKGNvbnRhaW5lcnMsIG9wdGlvbnMpID0+IHtcbiAgcmV0dXJuIG5ldyBNb2NrRHJha2UoY29udGFpbmVycywgb3B0aW9ucyk7XG59KTtcblxuLyoqIFlvdSBjYW4gdXNlIE1vY2tEcmFrZSB0byBzaW11bGF0ZSBEcmFrZSBldmVudHMuXG4gKlxuICogVGhlIHRocmVlIG1ldGhvZHMgdGhhdCBhY3R1YWxseSBkbyBhbnl0aGluZyBhcmUgYG9uKGV2ZW50LCBsaXN0ZW5lcilgLFxuICogYGRlc3Ryb3koKWAsIGFuZCBhIG5ldyBtZXRob2QsIGBlbWl0KClgLiBVc2UgYGVtaXQoKWAgdG8gbWFudWFsbHkgZW1pdCBEcmFrZVxuICogZXZlbnRzLCBhbmQgaWYgeW91IGluamVjdGVkIE1vY2tEcmFrZSBwcm9wZXJseSB3aXRoIE1vY2tEcmFrZUZhY3Rvcnkgb3JcbiAqIG1vY2tlZCB0aGUgRHJhZ3VsYVNlcnZpY2UuZmluZCgpIG1ldGhvZCwgdGhlbiB5b3UgY2FuIG1ha2UgbmcyLWRyYWd1bGEgdGhpbmtcbiAqIGRyYWdzIGFuZCBkcm9wcyBhcmUgaGFwcGVuaW5nLlxuICpcbiAqIENhdmVhdHM6XG4gKlxuICogMS4gWU9VIE1VU1QgTUFLRSBUSEUgRE9NIENIQU5HRVMgWU9VUlNFTEYuXG4gKiAyLiBSRVBFQVQ6IFlPVSBNVVNUIE1BS0UgVEhFIERPTSBDSEFOR0VTIFlPVVJTRUxGLlxuICogICAgVGhhdCBtZWFucyBgc291cmNlLnJlbW92ZUNoaWxkKGVsKWAsIGFuZCBgdGFyZ2V0Lmluc2VydEJlZm9yZShlbClgLlxuICogMy4gTm9uZSBvZiB0aGUgb3RoZXIgbWV0aG9kcyBkbyBhbnl0aGluZy5cbiAqICAgIFRoYXQncyBvaywgYmVjYXVzZSBuZzItZHJhZ3VsYSBkb2Vzbid0IHVzZSB0aGVtLlxuICovXG5leHBvcnQgY2xhc3MgTW9ja0RyYWtlIGltcGxlbWVudHMgRHJha2VXaXRoTW9kZWxzIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb250YWluZXJzIEEgbGlzdCBvZiBjb250YWluZXIgZWxlbWVudHMuXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZXNlIHdpbGwgTk9UIGJlIHVzZWQuIEF0IGFsbC5cbiAgICogQHBhcmFtIG1vZGVscyBOb25zdGFuZGFyZCwgYnV0IHVzZWZ1bCBmb3IgdGVzdGluZyB1c2luZyBgbmV3IE1vY2tEcmFrZSgpYCBkaXJlY3RseS5cbiAgICogICAgICAgICAgICAgICBOb3RlLCBkZWZhdWx0IHZhbHVlIGlzIHVuZGVmaW5lZCwgbGlrZSBhIHJlYWwgRHJha2UuIERvbid0IGNoYW5nZSB0aGF0LlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbnRhaW5lcnM6IEVsZW1lbnRbXSA9IFtdLFxuICAgIHB1YmxpYyBvcHRpb25zOiBEcmFndWxhT3B0aW9ucyA9IHt9LFxuICAgIHB1YmxpYyBtb2RlbHM/OiBhbnlbXVtdXG4gICkge31cblxuICAvKiBEb2Vzbid0IHJlcHJlc2VudCBhbnl0aGluZyBtZWFuaW5nZnVsLiAqL1xuICBkcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIHN0YXJ0KGl0ZW06IEVsZW1lbnQpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIGVuZCgpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuICAvKiBEb2VzIG5vdGhpbmcgdXNlZnVsLiAqL1xuICBjYW5jZWwocmV2ZXJ0OiBib29sZWFuKTogYW55O1xuICBjYW5jZWwoKTogYW55O1xuICBjYW5jZWwocmV2ZXJ0PzogYW55KSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG4gIC8qIERvZXMgbm90aGluZyB1c2VmdWwuICovXG4gIHJlbW92ZSgpOiBhbnkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEJhc2ljIGJ1dCBmdWxseSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgc2hpbVxuICBwcml2YXRlIGVtaXR0ZXIkID0gbmV3IFN1YmplY3Q8eyBldmVudFR5cGU6IEV2ZW50VHlwZXMsIGFyZ3M6IGFueVtdIH0+KCk7XG5cbiAgcHJpdmF0ZSBzdWJzID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIG9uKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueSB7XG4gICAgdGhpcy5zdWJzLmFkZCh0aGlzLmVtaXR0ZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IGV2ZW50VHlwZSB9KSA9PiBldmVudFR5cGUgPT09IGV2ZW50KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoeyBhcmdzIH0pID0+IHtcbiAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICB9KSk7XG4gIH1cblxuICBkZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5zdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbW9zdCB1c2VmdWwgbWV0aG9kLiBZb3UgY2FuIHVzZSBpdCB0byBtYW51YWxseSBmaXJlIGV2ZW50cyB0aGF0IHdvdWxkIG5vcm1hbGx5XG4gICAqIGJlIGZpcmVkIGJ5IGEgcmVhbCBkcmFrZS5cbiAgICpcbiAgICogWW91J3JlIGxpa2VseSBtb3N0IGludGVyZXN0ZWQgaW4gZmlyaW5nIGBkcmFnYCwgYHJlbW92ZWAgYW5kIGBkcm9wYCwgdGhlIHRocmVlIGV2ZW50c1xuICAgKiBEcmFndWxhU2VydmljZSB1c2VzIHRvIGltcGxlbWVudCBbZHJhZ3VsYU1vZGVsXS5cbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXZhY3F1YS9kcmFndWxhI2RyYWtlb24tZXZlbnRzIGZvciB3aGF0IHlvdSBzaG91bGQgZW1pdCAoYW5kIGluIHdoYXQgb3JkZXIpLlxuICAgKlxuICAgKiAoTm90ZSBhbHNvLCBmaXJpbmcgZHJvcE1vZGVsIGFuZCByZW1vdmVNb2RlbCB3b24ndCB3b3JrLiBZb3Ugd291bGQgaGF2ZSB0byBtb2NrIERyYWd1bGFTZXJ2aWNlIGZvciB0aGF0LilcbiAgICovXG4gIGVtaXQoZXZlbnRUeXBlOiBFdmVudFR5cGVzLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIHRoaXMuZW1pdHRlciQubmV4dCh7IGV2ZW50VHlwZSwgYXJncyB9KVxuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyIoLyoqIEB0eXBlIHs/fSAqLyAoZHJhZ3VsYUV4cHQpKS5kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLElBQUE7SUFFRSxlQUNTLE1BQ0EsT0FDQTtRQUZBLFNBQUksR0FBSixJQUFJO1FBQ0osVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTzswQkFKYSxLQUFLO0tBSzlCO2dCQVROO0lBVUM7Ozs7Ozs7O0lDVEcsUUFBUyxRQUFRO0lBQ2pCLFFBQVMsUUFBUTtJQUNqQixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7SUFDbkIsTUFBTyxNQUFNO0lBQ2IsS0FBTSxLQUFLO0lBQ1gsTUFBTyxNQUFNO0lBQ2IsUUFBUyxRQUFRO0lBQ2pCLFFBQVMsUUFBUTtJQUNqQixXQUFZLFdBQVc7SUFDdkIsYUFBYyxhQUFhOzs7QUFHL0IsSUFBYSxTQUFTLEdBQWlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxZQUFJLFVBQVUsbUJBQUMsQ0FBUSxFQUFlLElBQUEsQ0FBQyxDQUFDOzs7Ozs7QUNaNUc7QUFDQSxJQUFhLE9BQU8sR0FBNkNBLG9CQUE0QixJQUFJLFdBQVcsQ0FBQztBQUk3RyxJQUFBO0lBQ0Usc0JBQW9CLEtBQTZCOytDQUFBO1FBQTdCLFVBQUssR0FBTCxLQUFLLENBQXdCO0tBQUk7dUJBUnZEO0lBU0M7Ozs7Ozs7QUNFRCxJQUFNLFdBQVcsR0FBRyxVQUNsQixTQUFxQixFQUNyQixjQUFrQyxFQUNsQyxTQUE2QixJQUMxQixPQUFBLFVBQUMsS0FBMkI7SUFDL0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLE1BQU0sQ0FBQyxVQUFDLEVBQWU7WUFBYixnQkFBSyxFQUFFLGNBQUk7UUFDbkIsT0FBTyxLQUFLLEtBQUssU0FBUztnQkFDbEIsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssY0FBYyxDQUFDLENBQUM7S0FDbEUsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEVBQWM7WUFBWixjQUFJLEVBQUUsY0FBSTtRQUFPLE9BQUEsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7S0FBQSxDQUFDLENBQy9DLENBQUM7Q0FDSCxHQUFBLENBQUE7O0FBRUQsSUFBTSwwQkFBMEIsR0FDOUIsVUFBQyxJQUFZLEVBQUUsRUFBb0Q7UUFBcEQsa0JBQW9ELEVBQW5ELFVBQUUsRUFBRSxpQkFBUyxFQUFFLGNBQU07SUFDbkMsUUFBQyxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFO0NBQUMsQ0FBQzs7SUFxRnBDLHdCQUFpQyxZQUFpQzswREFBQTtRQUFsRSxpQkFJQztRQUpnQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7eUJBOUU5QyxJQUFJLE9BQU8sRUFBWTtvQkFFN0IsVUFBQyxTQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3ZELFdBQVcsQ0FDVCxVQUFVLENBQUMsSUFBSSxFQUNmLFNBQVMsRUFDVCxVQUFDLElBQUksRUFBRSxFQUFnQztnQkFBaEMsa0JBQWdDLEVBQS9CLFVBQUUsRUFBRSxjQUFNO1lBQTBCLFFBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRTtTQUFDLENBQ25FLENBQ0YsR0FBQTt1QkFFZ0IsVUFBQyxTQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQzFELFdBQVcsQ0FDVCxVQUFVLENBQUMsT0FBTyxFQUNsQixTQUFTLEVBQ1QsVUFBQyxJQUFJLEVBQUUsRUFBZTtnQkFBZixrQkFBZSxFQUFkLFVBQUU7WUFBaUIsUUFBQyxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFO1NBQUMsQ0FDMUMsQ0FDRixHQUFBO29CQUVhLFVBQUMsU0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RCxXQUFXLENBQ1QsVUFBVSxDQUFDLElBQUksRUFDZixTQUFTLEVBQ1QsVUFBQyxJQUFJLEVBQUUsRUFFZ0M7Z0JBRmhDLGtCQUVnQyxFQURyQyxVQUFFLEVBQUUsY0FBTSxFQUFFLGNBQU0sRUFBRSxlQUFPO1lBRTNCLE9BQU8sRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO1NBQzlDLENBQUMsQ0FDTCxHQUFBO2lDQUdDLFVBQUMsU0FBcUI7WUFDdEIsT0FBQSxVQUFDLFNBQWtCO2dCQUNuQixPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUNqQixXQUFXLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUM5RDthQUFBO1NBQUE7c0JBRWEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7c0JBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3NCQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7bUJBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO3NCQUVuQyxVQUFDLFNBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDekQsV0FBVyxDQUNULFVBQVUsQ0FBQyxNQUFNLEVBQ2pCLFNBQVMsRUFDVCxVQUFDLElBQUksRUFBRSxFQUVpQztnQkFGakMsa0JBRWlDLEVBRHRDLGFBQUssRUFBRSxnQkFBUSxFQUFFLGlCQUFTO1lBRTFCLE9BQU8sRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFBO1NBQzVDLENBQUMsQ0FDTCxHQUFBO3lCQUVrQixVQUFVLFNBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDckUsV0FBVyxDQUNULFVBQVUsQ0FBQyxTQUFTLEVBQ3BCLFNBQVMsRUFDVCxVQUFDLElBQUksRUFBRSxFQUU2RDtnQkFGN0Qsa0JBRTZELEVBRGxFLFVBQUUsRUFBRSxjQUFNLEVBQUUsY0FBTSxFQUFFLGVBQU8sRUFBRSxZQUFJLEVBQUUsbUJBQVcsRUFBRSxtQkFBVyxFQUFFLG1CQUFXLEVBQUUsbUJBQVc7WUFFckYsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUE7U0FDdkcsQ0FBQyxDQUNMLEdBQUE7MkJBRW9CLFVBQVUsU0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUN2RSxXQUFXLENBQ1QsVUFBVSxDQUFDLFdBQVcsRUFDdEIsU0FBUyxFQUNULFVBQUMsSUFBSSxFQUFFLEVBRXVDO2dCQUZ2QyxrQkFFdUMsRUFENUMsVUFBRSxFQUFFLGlCQUFTLEVBQUUsY0FBTSxFQUFFLFlBQUksRUFBRSxtQkFBVyxFQUFFLG1CQUFXO1lBRXJELE9BQU8sRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFBO1NBQ3ZFLENBQ0YsQ0FDRixHQUFBO3NCQUV3QyxFQUFFO1FBR3pDLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7OztJQUdNLDRCQUFHOzs7OztjQUFDLEtBQVk7O1FBQ3JCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksYUFBYSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQzs7Ozs7O0lBR1IsNkJBQUk7Ozs7Y0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBR3BCLGdDQUFPOzs7O2NBQUMsSUFBWTs7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBQ0QsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFRcEIsb0NBQVc7Ozs7Ozs7OztjQUFVLElBQVksRUFBRSxPQUEwQjtRQUNsRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQ3ZCLElBQUksRUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQ3BDLE9BQU8sQ0FDUixDQUFDLENBQUM7Ozs7OztJQUdHLHFDQUFZOzs7O2NBQUMsRUFBK0I7O1lBQTdCLGNBQUksRUFBRSxnQkFBSyxFQUFFLG9CQUFPOztRQUN6QyxJQUFJLE9BQU8sQ0FBTTs7UUFDakIsSUFBSSxTQUFTLENBQVM7O1FBQ3RCLElBQUksU0FBUyxDQUFTO1FBQ3RCLEtBQUssQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsRUFBTyxFQUFFLFNBQWMsRUFBRSxNQUFXO1lBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNqQixPQUFPO2FBQ1I7O1lBQ0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUNuQyxJQUFNLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7WUFHakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVztnQkFDN0IsSUFBSSxNQUFBO2dCQUNKLElBQUksRUFBRSxDQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFFO2FBQzlELENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBTyxFQUFFLE1BQVc7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pCLE9BQU87YUFDUjtZQUNELE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxPQUFZLEVBQUUsTUFBZSxFQUFFLE1BQWUsRUFBRSxPQUFpQjtZQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDNUIsT0FBTzthQUNSO1lBQ0QsU0FBUyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUM3QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1lBQ2pFLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFHakUsSUFBSSxJQUFJLENBQU07WUFDZCxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQ3JCLFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQyxJQUFJLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O2dCQUd2QyxXQUFXLEdBQUcsV0FBVyxDQUFDO2FBQzNCO2lCQUFNOztnQkFDTCxJQUFJLFNBQVMsR0FBRyxPQUFPLEtBQUssT0FBTyxDQUFDO2dCQUNwQyxJQUFJLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLFNBQVMsRUFBRTtvQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTt3QkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFBO3FCQUNsRztvQkFDRCxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDZCxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDbEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELFdBQVcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNsQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksU0FBUyxFQUFFO29CQUNiLElBQUk7d0JBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDN0I7b0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtpQkFDZjthQUNGO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxVQUFVLENBQUMsU0FBUztnQkFDM0IsSUFBSSxNQUFBO2dCQUNKLElBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFFO2FBQ2pHLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQzs7Ozs7O0lBR0csb0NBQVc7Ozs7Y0FBQyxLQUFZOztRQUM5QixJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1FBQ3hCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O1FBRXhCLElBQUksT0FBTyxHQUFHLFVBQUMsS0FBaUI7WUFDOUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUFDLGNBQWM7cUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztvQkFBZCx5QkFBYzs7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO2FBQzVDLENBQUMsQ0FBQztTQUNKLENBQUM7UUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7O0lBR3JCLG1DQUFVOzs7OztjQUFDLEtBQVUsRUFBRSxNQUFXO1FBQ3hDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7OztnQkF4Ti9ELFVBQVU7Ozs7Z0JBdkJGLFlBQVksdUJBMEdMLFFBQVE7O3lCQWhIeEI7Ozs7Ozs7QUNBQTs4QkFtQjZCLEVBQWMsRUFBVSxjQUE4QjtRQUF0RCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO2tDQVQzQyxJQUFJLFlBQVksRUFBUzs7MEJBSW5ELHVDQUFTOzs7OztZQUNuQixPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7Ozs7Ozs7OztJQU9uQyxzQ0FBVzs7OztjQUFDLE9BQThEO1FBQy9FLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDOUIsMEJBQVEsdUJBQW1CLEVBQUUseUJBQXFCLEVBQUUsNEJBQVcsQ0FBcUI7O1lBQ3BGLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDOUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7Ozs7O1lBTTVCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckI7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtTQUNGO2FBQU0sSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUkxQywrQkFBUSx1QkFBbUIsRUFBRSx5QkFBcUIsRUFBRSw0QkFBVyxDQUEwQjtZQUNqRixJQUFBLHdCQUFLLENBQWdCO1lBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUU7Z0JBQ3pCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7O2dCQUNsQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUVwQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7O29CQUVsQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7d0JBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDNUM7aUJBQ0Y7cUJBQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFOztvQkFFcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRjs7Ozs7SUFLSSxnQ0FBSzs7Ozs7O1FBQ1YsSUFBSSxVQUFVLEdBQUcsVUFBQyxLQUFZO1lBQzVCLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUM7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzFDO2FBQ0Y7U0FDRixDQUFDOztRQUdGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxFQUFFOztZQUNWLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRTs7UUFHRCxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7Ozs7O0lBR2Qsb0NBQVM7Ozs7Y0FBQyxJQUFZOztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ1gsSUFBSSxDQUFDLGNBQWM7YUFDbEIsU0FBUyxDQUFDLElBQUksQ0FBQzthQUNmLFNBQVMsQ0FBQyxVQUFDLEVBQTRDO2dCQUExQyxrQkFBTSxFQUFFLGtCQUFNLEVBQUUsNEJBQVcsRUFBRSw0QkFBVztZQUNwRCxJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQztpQkFBTSxJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDM0MsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQztTQUNGLENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ1gsSUFBSSxDQUFDLGNBQWM7YUFDbEIsV0FBVyxDQUFDLElBQUksQ0FBQzthQUNqQixTQUFTLENBQUMsVUFBQyxFQUF1QjtnQkFBckIsa0JBQU0sRUFBRSw0QkFBVztZQUMvQixJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQztTQUNGLENBQUMsQ0FDSCxDQUFDOzs7Ozs7SUFHRyxtQ0FBUTs7OztjQUFDLFNBQWlCO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekI7O1FBQ0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLEVBQUU7O1lBQ1QsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0UsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7Z0JBQzFELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9ELElBQUksVUFBVSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1NBQ0Y7Ozs7O0lBR0ksc0NBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztnQkFoSS9CLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUM7Ozs7Z0JBTkMsVUFBVTtnQkFDcEMsY0FBYzs7OzBCQU9wQixLQUFLOytCQUNMLEtBQUs7cUNBQ0wsTUFBTTs7MkJBVlQ7Ozs7Ozs7QUNBQTs7Ozs7O0lBU1MscUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM1QixDQUFBO0tBQ0Y7O2dCQVZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pDOzt3QkFQRDs7Ozs7Ozs7QUNPQSxJQUFhLGdCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDLFVBQUMsVUFBVSxFQUFFLE9BQU87SUFDbkUsT0FBTyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDM0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7SUFPRSxtQkFDUyxZQUNBLFNBQ0E7OztRQUZBLGVBQVUsR0FBVixVQUFVO1FBQ1YsWUFBTyxHQUFQLE9BQU87UUFDUCxXQUFNLEdBQU4sTUFBTTs7d0JBSUssS0FBSzt3QkFzQk4sSUFBSSxPQUFPLEVBQTBDO29CQUV6RCxJQUFJLFlBQVksRUFBRTtLQTNCN0I7Ozs7OztJQU1KLHlCQUFLOzs7O0lBQUwsVUFBTSxJQUFhO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ3RCOzs7OztJQUVELHVCQUFHOzs7SUFBSDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQUlELDBCQUFNOzs7O0lBQU4sVUFBTyxNQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQUVELDBCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7Ozs7SUFPRCxzQkFBRTs7Ozs7SUFBRixVQUFHLEtBQWEsRUFBRSxRQUFrQjtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTthQUN4QixJQUFJLENBQ0gsTUFBTSxDQUFDLFVBQUMsRUFBYTtnQkFBWCx3QkFBUztZQUFPLE9BQUEsU0FBUyxLQUFLLEtBQUs7U0FBQSxDQUFDLENBQy9DO2FBQ0EsU0FBUyxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ2hCLFFBQVEsd0JBQUksSUFBSSxHQUFFO1NBQ25CLENBQUMsQ0FBQyxDQUFDO0tBQ1A7Ozs7SUFFRCwyQkFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWFELHdCQUFJOzs7Ozs7Ozs7Ozs7OztJQUFKLFVBQUssU0FBcUI7UUFBRSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLDZCQUFjOztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQTtLQUN4QztvQkE5Rkg7SUFnR0M7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

/***/ "./node_modules/ticky/ticky-browser.js":
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ }),

/***/ "./src/app/changelog/changelog-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/changelog/changelog-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChangeLogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogRoutingModule", function() { return ChangeLogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog.component */ "./src/app/changelog/changelog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _changelog_component__WEBPACK_IMPORTED_MODULE_2__["ChangeLogComponent"],
        data: {
            title: 'ChangeLog'
        },
    }
];
var ChangeLogRoutingModule = /** @class */ (function () {
    function ChangeLogRoutingModule() {
    }
    ChangeLogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChangeLogRoutingModule);
    return ChangeLogRoutingModule;
}());



/***/ }),

/***/ "./src/app/changelog/changelog.component.html":
/*!****************************************************!*\
  !*** ./src/app/changelog/changelog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"email-builder\">\r\n\t<div class=\"email-builder-preview-actions\" >\r\n\t\t<!--<div class=\"md-btn-group\">-->\r\n\t\t\t<!--<button class=\"md-btn md-btn-danger\" (click)=\"preview = false\">{{'Close Preview'  }}</button>-->\r\n\t\t\t<!--<button class=\"md-btn md-btn-success\" *ngIf=\"hasChanges()\"  (click)=\"saveEmailTemplate()\">{{'Email Save'  }}</button>-->\r\n\t\t<!--</div>-->\r\n\r\n\t</div>\r\n\t<div class=\"email-builder-header\" cdkDrag>\r\n\t\t<div class=\"email-builder-header-actions\">\r\n\t\t\t<h2>XWT Email Designer</h2>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"email-builder-header-actions\">\r\n\t\t\t<div class=\"md-btn-group\" >\r\n\r\n\t\t\t\t<i *ngIf=\"!!currentElement\" class=\"actions md-icon component-material-icons close md-color-red-600\" title=\"{{'close_element_settings'}}\" (click)=\"editElement(null)\">close</i>\r\n\t\t\t\t<i class=\"actions md-icon component-material-icons save md-color-green-600\" title=\"{{'email_save' }}\" [ngClass]=\"{disabled: !hasChanges()}\"   (click)=\"saveEmailTemplate()\">save</i>\r\n\t\t\t\t<i class=\"actions md-icon component-material-icons\" title=\"{{'email_settings'  }}\"  (click)=\"m_settings('emailSettings')\">settings</i>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"md-btn-group\" style=\"margin-left: 30px;\">\r\n\t\t\t\t<button class=\"md-btn md-btn-success\"  (click)=\"desktoppreview()\"><i class=\"component-material-icons\">desktop_windows</i></button>\r\n\t\t\t\t<button class=\"md-btn md-btn-default\" (click)=\"mobilepreview()\"><i class=\"component-material-icons\">phone_iphone</i></button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"md-btn-group\">\r\n\t\t\t\t<button class=\"md-btn md-btn-primary\"  (click)=\"openmodel()\">\r\n\t\t\t\t\tSave As Template\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"md-btn md-btn-primary\"  (click)=\"openExportContainer()\">\r\n\t\t\t\t\t<i class=\"component-material-icons\">redo</i>\r\n\t\t\t\t\t{{'export'}}\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"email-builder-content\">\r\n\t\t<div class=\"md-card\">\r\n\t\t\t<div class=\"md-card-content elements-list\">\r\n\t\t\t\t<ul class=\"md-list md-list-addon\"\r\n\t\t\t\t\tdragula=\"element\"\r\n\t\t\t\t\t[dragulaModel]=\"ELEMENT\"\r\n\t\t\t\t\t(dragulaModelChange)=\"element = $event\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<li *ngFor=\"let element of side_elements\" data-type=\"{{element.type}}\" (click)=\"elements_click()\" >\r\n\r\n\t\t\t\t\t\t<ng-template #tipcontent><strong>{{element.primary_head}}</strong> <img src='{{element.second_head  }}' width='150' /></ng-template>\r\n\t\t\t\t\t\t<div class=\"md-list-addon-element\"\r\n\t\t\t\t\t\t\t id=\"{{element.type}}\"\r\n\t\t\t\t\t\t\t placement = \"right\"\r\n\t\t\t\t\t\t\t [ngbTooltip]=\"tipcontent\"\r\n\t\t\t\t\t\t\t (click)=\"drag_on(element.type)\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<i class=\"component-material-icons\" [innerHtml]=\"element.icon\" ></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--<div position-relative [ngClass]=\"{configured: !!currentElement, preview: preview}\">-->\r\n\t\t<div position-relative>\r\n\r\n\t\t\t<div id=\"myemailcontainer\" class=\"builder\">\r\n\r\n\t\t\t\t<div class=\"email-container\" dragula=\"element-html\" [(dragulaModel)]=\"Email.elements\" [ngClass]=\"{'empty':true}\">\r\n\t\t\t\t\t<div class=\"builder-element\"  *ngFor=\"let element of Email.elements\"  style=\"width: 100%\" id= \"{{element.id}}\">\r\n\t\t\t\t\t\t<!--<app-device src=\"{{getTemplate(Email_element.type)}}\" (click)=\"onloadfunction(Email_element.type)\"></app-device>-->\r\n\t\t\t\t\t\t<div class=\"actions\" id=\"{{element.id}}\" [innerHtml] =\"getTemplate( element )\"></div>\r\n\t\t\t\t\t\t<div class=\"div-click-event\" (click)=\"editElement(element.id)\"></div>\r\n\t\t\t\t\t\t<i class=\"actions delete md-icon component-material-icons\"  style =\"z-index:11\" title=\"{{'delete_element'}}\"  (click)=\"removeElement(element.id)\">delete</i>\r\n\t\t\t\t\t\t<i class=\"actions clone md-icon component-material-icons\"  style =\"z-index:11\" title=\"{{'clone_element'}}\"  (click)=\"cloneElement(element.id)\">content_copy</i>\r\n\t\t\t\t\t\t<i title=\"{{'move_element'}} \" style =\"z-index:11\" class=\"actions move md-icon  component-material-icons\">drag_handle</i>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"md-card\" *ngIf=\"currentElement\" (click) = \"side_bar_function(currentElement)\" style=\"z-index:1000;\">\r\n\t\t\t<div class=\"md-card-content\">\r\n\t\t\t\t<i *ngIf=\"!!currentElement\" class=\"actions md-icon component-material-icons close md-color-red-600\" title=\"{{'close_element_settings'}}\" (click)=\"editElement(null)\">close</i>\r\n\t\t\t\t<i class=\"actions md-icon component-material-icons save md-color-green-600\" title=\"{{'email_save' }}\" [ngClass]=\"{disabled: !hasChanges()}\"   (click)=\"sideSave()\">save</i>\r\n\r\n\t\t\t\t<form action=\"#\" onsubmit=\"return true\">\r\n\t\t\t\t\t<div *ngFor=\"let item of currentElement.options | keyvalue; trackBy:trackByFn\" class=\"email-builder-element-edit-field\">\r\n\r\n\t\t\t\t\t\t<!--<div *ngIf=\"true\">-->\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key.indexOf('image') > -1\" class=\"form-row\">\r\n\t\t\t\t\t\t\t\t<!--{{item.key}} : {{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<label for=\"{{item.key}}\" class=\"md-label\" >Image Url</label>\r\n\t\t\t\t\t\t\t\t\t<div style=\"display: flex;\">\r\n\t\t\t\t\t\t\t\t\t<input name=\"{{item.key}}\" id=\"{{item.key}}\" class=\"md-input\" matInput  (change)=\"onFileSelectec($event)\" [(ngModel)]=\"currentElement.options[item.key]\" />\r\n\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"md-icon upload-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"fileUp\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">file_upload</i>\r\n\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<input #file hidden id=\"fileUp\" name=\"file\" type=\"file\" style=\"width:280px; margin-top:-35px; position: absolute;\" (change) = \"InputFileChange(file.files, item.key)\" >\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--{{ item.key.substring(0, 4)}}-->\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key.substring(0, 4) == 'text'\" class=\"form-row textarea\">\r\n\t\t\t\t\t\t\t\t<!--&lt;!&ndash;{{ item.key}}:{{item.value}} =>&ndash;&gt; {{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t\t<label for=\"builder_el_text\" class=\"md-label\" translate=\"Text\">Text</label>\r\n\t\t\t\t\t\t\t\t<ckeditor\r\n\t\t\t\t\t\t\t\t\t\tname = \"{{item.key+item.value}}\"\r\n\t\t\t\t\t\t\t\t\t\tid=\"builder_el_text\"\r\n\t\t\t\t\t\t\t\t\t\tui-tinymce=\"tinymceOptions\"\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"currentElement.options[item.key]\"\r\n\t\t\t\t\t\t\t\t\t\ttitle=\"{{'builder_el_text'  }}\"\r\n\t\t\t\t\t\t\t\t\t\t[config]=\"editorConfig\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t</ckeditor>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key == 'buttonText'\" class=\"form-row\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<label for=\"builder_el_o_btn_text\" class=\"md-label\">builder_el_o_btn_text</label>\r\n\t\t\t\t\t\t\t\t\t<input name=\"builder_el_o_btn_text\" id=\"builder_el_o_btn_text\" type=\"text\" class=\"md-input\" matInput [(ngModel)]=\"currentElement.options[item.key]\" />\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key == 'url'\" class=\"form-row\">\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<label for=\"builder_el_o_url\" class=\"md-label\" >builder_el_o_url</label>\r\n\t\t\t\t\t\t\t\t\t<input name=\"builder_el_o_url\" id=\"builder_el_o_url\" type=\"url\" class=\"md-input\" matInput [(ngModel)]=\"currentElement.options[item.key]\" />\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--{{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t<div class=\"form-row\" *ngIf=\"item.key == 'align'\">\r\n\t\t\t\t\t\t\t\t<div class=\"md-btn-group\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"md-btn md-btn-flat\" [ngClass]=\"{'md-btn-primary': item.value == 'left', 'md-btn-flat-primary': item.value != 'left'}\"  (click)=\" currentElement.options[item.key] = 'left'\" >left</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"md-btn md-btn-flat\" [ngClass]=\"{'md-btn-primary': item.value == 'center', 'md-btn-flat-primary': item.value != 'center'}\"  (click)=\"currentElement.options[item.key] = 'center'\" translate=\"center\">center</button>\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"md-btn md-btn-flat\" [ngClass]=\"{'md-btn-primary': item.value == 'right', 'md-btn-flat-primary': item.value != 'right'}\"  (click)=\"currentElement.options[item.key] = 'right'\" translate=\"right\">right</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"['title', 'subTitle'].indexOf(item.key) > -1\" class=\"form-row md-form\">\r\n\t\t\t\t\t\t\t\t<!--{{item.key}}:{{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<label for=\"{{item.key}}\" class=\"md-label\">{{ item.key}}</label>\r\n\t\t\t\t\t\t\t\t\t<input name=\"{{item.key+item.value}}\" id=\"{{item.key}}\" type=\"text\" matInput class=\"md-input\" [(ngModel)]=\"currentElement.options[item.key]\"/>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key == 'padding'\" class=\"form-row padding-inputs\">\r\n\t\t\t\t\t\t\t\t<!--{{item.key}}:{{item.value}}-->\r\n\t\t\t\t\t\t\t\t<!--<mat-form-field>-->\r\n\t\t\t\t\t\t\t\t\t<label for=\"builder_el_o_top\" class=\"md-label\" translate=\"Top\">[Top, Right, Bottom, Left]</label>\r\n\t\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"currentElement.options[item.key]\">-->\r\n\t\t\t\t\t\t\t\t\t<div style=\"display:flex;\">\r\n\t\t\t\t\t\t\t\t\t\t<!--{{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let padding_val of  currentElement.options[item.key].split(','); let i = index\" style=\"width:20%\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"{{item.key+i}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"padding_val\" (change) = \"paddingChange(padding_val, item.key, i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"currentElement.options[item.key]\">-->\r\n\t\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"currentElement.options[item.key]\">-->\r\n\t\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"currentElement.options[item.key]\">-->\r\n\t\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key}}\" id=\"builder_el_o_top\" type=\"text\" class=\"md-input\" matInput [(ngModel)] =\"currentElement.options[item.key]\">-->\r\n\r\n\t\t\t\t\t\t\t\t<!--</mat-form-field>-->\r\n\t\t\t\t\t\t\t\t<!--<label for=\"builder_el_o_right\" class=\"md-label\" translate=\"Right\">Right</label>-->\r\n\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key+'02'}}\" id=\"builder_el_o_right\" type=\"text\" class=\"md-input\" [(ngModel)]=\"currentElement.options[item.key][1]\">-->\r\n\r\n\t\t\t\t\t\t\t\t<!--<label for=\"builder_el_o_bottom\" class=\"md-label\"  translate=\"Bottom\">Bottom</label>-->\r\n\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key+'03'}}\" id=\"builder_el_o_bottom\" type=\"text\" class=\"md-input\" [(ngModel)]=\"currentElement.options[item.key][2]\">-->\r\n\r\n\t\t\t\t\t\t\t\t<!--<label for=\"builder_el_o_left\" class=\"md-label\"  translate=\"Left\">Left</label>-->\r\n\t\t\t\t\t\t\t\t<!--<input name=\"{{item.key+'04'}}\" id=\"builder_el_o_left\" type=\"text\" class=\"md-input\" [(ngModel)]=\"currentElement.options[item.key][3]\">-->\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div *ngIf=\"item.key == 'backgroundColor' || item.key == 'color' || item.key == 'buttonBackgroundColor'\" class=\"form-row color-inputs\" id=\"real\">\r\n\t\t\t\t\t\t\t\t<!--{{item.key}}:{{item.value}} {{currentElement.options[item.key]}}-->\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"elementBackgroundColor\" *ngIf=\"item.key == 'backgroundColor'\">{{ 'Background Color'}}</label>\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"elementBackgroundColor\" *ngIf=\"item.key == 'color'\">{{ 'Text Color' }}</label>\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"elementBackgroundColor\" *ngIf=\"item.key == 'buttonBackgroundColor'\">{{ 'Button Bg Color' }}</label>\r\n\t\t\t\t\t\t\t\t<input id=\"elementBackgroundColor\" type=\"color\" name=\"currentElement.options[item.key]\" [(ngModel)]=\"currentElement.options[item.key]\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--</div>-->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"currentElement == 'emailSettings'\">\r\n\t\t\t\t\t\t<div class=\"email-builder-element-edit-field\">\r\n\t\t\t\t\t\t\t<div class=\"form-row padding-inputs\">\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"emailSettingsPaddingTop\" translate=\"builder_el_o_top\"></label>\r\n\t\t\t\t\t\t\t\t<!--[ngModel]=\"currentElement.options.paddingTop\"-->\r\n\t\t\t\t\t\t\t\t<input id=\"emailSettingsPaddingTop\" class=\"md-input\" type=\"text\" md-input >\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"emailSettingsPaddingBottom\"></label>\r\n\t\t\t\t\t\t\t\t<input id=\"emailSettingsPaddingBottom\" type=\"text\" class=\"md-input\" md-input [(ngModel)]=\"currentElement.options.paddingBottom\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"email-builder-element-edit-field\">\r\n\t\t\t\t\t\t\t<div class=\"form-row color-inputs\" id=\"email-builder-element-edit\">\r\n\t\t\t\t\t\t\t\t<label class=\"md-label\" for=\"emailSettingsBackground\">{{ 'background_color'   }}</label>\r\n\t\t\t\t\t\t\t\t<input id=\"emailSettingsBackground\" type=\"color\" [(ngModel)]=\"currentElement.options.backgroundColor\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"currentElement == 'export'\">\r\n\r\n\t\t\t\t\t\t<h2 [innerHtml]=\"'Choose Export Type'   \"></h2>\r\n\t\t\t\t\t\t<p [innerHtml]=\"'Export Description'  \"></p>\r\n\r\n\t\t\t\t\t\t<div class=\"email-builder-element-edit-field\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<label for=\"emailName\">{{'Email Name'  }}</label>\r\n\t\t\t\t\t\t\t\t<input name=\"emailName\" type=\"text\" id=\"emailName\" (change)=\"changeHtml()\" class=\"md-input\" matInput md-input [(ngModel)]=\"Email.name\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"md-btn-group\">\r\n\t\t\t\t\t\t\t<button  (click)=\"exportAsHtml = true\" [ngClass]=\"{disabled: !!exportAsHtml}\" class=\"md-btn md-btn-primary\">{{'export as html'  }}</button>\r\n\t\t\t\t\t\t\t<button  (click)=\"exportEmailAsJson()\" class=\"md-btn md-btn-danger\">{{'export as json'  }}</button>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div *ngIf=\"!!exportAsHtml\">\r\n\t\t\t\t\t\t\t<div class=\"email-builder-element-edit-field\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<label for=\"emailHtml\">{{'Copy Etml'  }}</label>\r\n\t\t\t\t\t\t\t<textarea readonly id=\"emailHtml\"  (click)=\"$(this).select()\" cols=\"30\" rows=\"10\">{{emailHtml}}</textarea>\r\n\t\t\t\t\t\t\t<button class=\"md-btn md-btn-success\"  (click)=\"downloadHtml()\">{{'Download HTML'  }}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"email-builder-element-edit-field\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t<label for=\"emailName\">{{'Enter Email'  }}</label>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"tags\" id=\"youremail\" class=\"md-input\" matInput [(ngModel)]=\"user.email\">\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"ng7-modal\" role=\"dialog\">\r\n\t<div class=\"ng7-modal-container\">\r\n\t\t<h3 style=\"text-align:center\">Save Template</h3>\r\n\t\t<hr>\r\n\t\t<div class=\"ng7-modal-body\">\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input type=\"text\" class=\"md-input\" matInput [(ngModel)]=\"templatetitle\" placeholder=\"Enter Template Title\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<mat-form-field>\r\n\t\t\t\t<input type=\"text\" class=\"md-input\" [(ngModel)]=\"templatedescription\" matInput placeholder=\"Enter Short Description\">\r\n\t\t\t</mat-form-field>\r\n\t\t\t<div>\r\n\t\t\t\t<p style=\"color:gray; font-size:15px;margin-top:15px\">Attach ScreenShot</p>\r\n\t\t\t\t<input type=\"file\" id=\"templatescreenshot\" class=\"mce-i-upload\" [(ngModel)]=\"templateimage\">\r\n\t\t\t</div>\r\n\t\t\t<h5 class=\"ng7-addtemplatemsg\">Template saved successfully</h5>\r\n\t\t</div>\r\n\r\n\t\t<hr>\r\n\t\t<button  type=\"button\" class=\"md-btn md-btn-icon-default closemodal\"  (click)=\"closemodel()\">Close</button><input type=\"button\"  (click)=\"saveAsTemplate()\" class=\"md-btn md-btn-primary\" value=\"Save\">\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/changelog/changelog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/changelog/changelog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700);\n.hierarchical_show_inView > *,\n.hierarchical_slide_inView > * {\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-animation-duration: .7s;\n          animation-duration: .7s; }\nmat-form-field {\n  width: 100%; }\n.div-click-event {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  /* background-color: yellow; */\n  z-index: 10; }\n.alertify-logs > *,\n.md-card .md-card-toolbar:after,\n.md-card-list-wrapper .md-card-list > ul > li:after,\n.md-card.md-card-overlay .md-card-overlay-header:after {\n  clear: both; }\n.md-bg-cyan {\n  background-color: #00acc1 !important;\n  color: #fff; }\n.md-bg-light-green {\n  background-color: #7cb342 !important;\n  color: #fff; }\n.md-bg-grey {\n  background-color: #616161 !important;\n  color: #fff; }\n.md-bg-red {\n  background-color: #d32f2f !important;\n  color: #fff; }\n.md-bg-light-blue {\n  background-color: #0288d1 !important;\n  color: #fff; }\n.md-bg-teal {\n  background-color: #00897b !important;\n  color: #fff; }\n.md-bg-purple {\n  background-color: #8e24aa !important;\n  color: #fff; }\n.md-btn {\n  background: #fff;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  min-height: 31px;\n  min-width: 70px;\n  padding: 2px 16px;\n  text-align: center;\n  text-shadow: none;\n  text-transform: uppercase;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: #212121;\n  box-sizing: border-box;\n  cursor: pointer;\n  -webkit-appearance: none;\n  display: inline-block;\n  vertical-align: middle;\n  font: 500 14px/31px Roboto, sans-serif !important; }\n.md-btn:active,\n.md-btn:focus,\n.md-btn:hover,\n.uk-button-dropdown.uk-open > .md-btn {\n  background: #fff;\n  outline: 0;\n  text-decoration: none;\n  color: #212121;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n.md-btn:active,\n.uk-button-dropdown.uk-open > .md-btn {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n.md-btn-flat {\n  box-shadow: none !important;\n  background: 0 0; }\n.md-btn-flat:focus,\n.md-btn-flat:hover {\n  background: rgba(153, 153, 153, 0.2); }\n.md-btn-flat:active {\n  background: rgba(153, 153, 153, 0.4); }\n.md-btn-flat-danger,\n.md-btn-flat-danger:active,\n.md-btn-flat-danger:focus,\n.md-btn-flat-danger:hover {\n  color: #e53935; }\n.md-btn-flat-danger:active,\n.md-btn-flat-danger:focus,\n.md-btn-flat-danger:hover {\n  background: #fceaea; }\n.md-btn-flat-primary,\n.md-btn-flat-primary:active,\n.md-btn-flat-primary:focus,\n.md-btn-flat-primary:hover {\n  color: #1976d2; }\n.md-btn-flat-primary:active,\n.md-btn-flat-primary:focus,\n.md-btn-flat-primary:hover {\n  background: #e3f2fd; }\n.md-btn-flat-success,\n.md-btn-flat-success:active,\n.md-btn-flat-success:focus,\n.md-btn-flat-success:hover {\n  color: #7cb342; }\n.md-btn-flat-success:active,\n.md-btn-flat-success:focus,\n.md-btn-flat-success:hover {\n  background: #e1efd2; }\n.md-btn-flat-warning,\n.md-btn-flat-warning:active,\n.md-btn-flat-warning:focus,\n.md-btn-flat-warning:hover {\n  color: #ffa000; }\n.md-btn-flat-warning:active,\n.md-btn-flat-warning:focus,\n.md-btn-flat-warning:hover {\n  background: #ffeccc; }\n.md-btn-flat.disabled {\n  background: 0 0 !important; }\n.md-btn-danger,\n.md-btn-danger:active,\n.md-btn-danger:focus,\n.md-btn-danger:hover {\n  background: #e53935; }\n.md-btn-primary,\n.md-btn-primary:active,\n.md-btn-primary:focus,\n.md-btn-primary:hover {\n  background: #2196f3; }\n.md-btn-success,\n.md-btn-success:active,\n.md-btn-success:focus,\n.md-btn-success:hover {\n  background: #7cb342; }\n.md-btn-warning,\n.md-btn-warning:active,\n.md-btn-warning:focus,\n.md-btn-warning:hover {\n  background: #ffa000; }\n.md-btn-danger,\n.md-btn-danger:active,\n.md-btn-danger:focus,\n.md-btn-danger:hover,\n.md-btn-danger > i,\n.md-btn-primary,\n.md-btn-primary:active,\n.md-btn-primary:focus,\n.md-btn-primary:hover,\n.md-btn-primary > i,\n.md-btn-success,\n.md-btn-success:active,\n.md-btn-success:focus,\n.md-btn-success:hover,\n.md-btn-success > i,\n.md-btn-warning,\n.md-btn-warning:active,\n.md-btn-warning:focus,\n.md-btn-warning:hover,\n.md-btn-warning > i {\n  color: #fff; }\n.md-btn.disabled,\n.md-btn.disabled:active,\n.md-btn.disabled:focus,\n.md-btn.disabled:hover {\n  color: #a8a8a8;\n  background: #eaeaea;\n  box-shadow: none !important;\n  cursor: default;\n  pointer-events: none; }\n.md-btn > i.material-icons {\n  margin-top: 5px;\n  font-size: 18px; }\n.md-btn-mini {\n  line-height: 21px !important;\n  min-width: 12px;\n  font-size: 10px !important;\n  min-height: 24px; }\n.md-btn-small {\n  line-height: 27px !important;\n  min-width: 14px;\n  font-size: 11px !important; }\n.md-btn-large {\n  line-height: 42px !important;\n  font-size: 16px !important; }\n.md-btn::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n.md-btn + .md-btn {\n  margin-left: 8px; }\n.md-btn-block {\n  width: 100%; }\n.md-btn-block + .md-btn-block {\n  margin-left: 0;\n  margin-top: 12px; }\n.md-btn + .md-btn-group {\n  margin-left: 16px; }\n.md-btn-facebook {\n  background: #3b5998 !important; }\n.md-btn-twitter {\n  background: #00aced !important; }\n.md-btn-gplus {\n  background: #dd4b39 !important; }\n.md-btn-facebook,\n.md-btn-facebook > i,\n.md-btn-gplus,\n.md-btn-gplus > i,\n.md-btn-twitter,\n.md-btn-twitter > i {\n  color: #fff !important; }\n.md-btn-icon > i.no_margin {\n  margin-right: 0 !important;\n  margin-left: 0 !important; }\n.md-btn-icon-large,\n.md-btn-icon.md-btn-large {\n  min-width: 72px; }\n.md-btn-icon-large > i,\n.md-btn-icon.md-btn-large > i {\n  font-size: 24px;\n  margin-right: 12px;\n  vertical-align: -3px; }\n.md-btn-icon,\n.md-btn-icon-default {\n  min-width: 64px; }\n.md-btn-icon-default > i,\n.md-btn-icon > i {\n  font-size: 18px;\n  margin-right: 8px;\n  vertical-align: -2px; }\n.md-btn-icon-small,\n.md-btn-icon.md-btn-small {\n  min-width: 48px; }\n.md-btn-icon-small > i,\n.md-btn-icon.md-btn-small > i {\n  font-size: 16px;\n  margin-right: 6px;\n  vertical-align: -2px; }\n.md-btn-icon-mini,\n.md-btn-icon.md-btn-mini {\n  min-width: 36px; }\n.md-btn-icon-mini > i,\n.md-btn-icon.md-btn-mini > i {\n  font-size: 16px;\n  margin-right: 4px;\n  vertical-align: -2px; }\n.md-fab {\n  box-sizing: border-box;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #fff;\n  color: #727272;\n  display: block;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  position: relative;\n  text-align: center;\n  cursor: pointer; }\n.md-fab:active,\n.md-fab:focus,\n.md-fab:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n.md-fab > i {\n  font-size: 36px;\n  line-height: 64px;\n  height: inherit;\n  width: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #727272; }\n.md-fab.md-fab-accent > i,\n.md-fab.md-fab-danger > i,\n.md-fab.md-fab-primary > i,\n.md-fab.md-fab-success > i,\n.md-fab.md-fab-warning > i {\n  color: #fff; }\n.md-fab.md-fab-accent {\n  background: #1565c0; }\n.md-fab.md-fab-success {\n  background: #7cb342; }\n.md-fab.md-fab-danger {\n  background: #e53935; }\n.md-fab.md-fab-primary {\n  background: #2196f3; }\n.md-fab.md-fab-warning {\n  background: #ffa000; }\n.md-fab.md-fab-small {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%; }\n.md-fab.md-fab-small > i {\n  line-height: 48px;\n  height: inherit;\n  width: inherit;\n  font-size: 24px; }\n.md-fab-speed-dial .md-fab-action-close {\n  display: none; }\n.md-fab-wrapper {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  z-index: 1004;\n  transition: margin 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n@media only screen and (max-width: 767px) {\n  .md-fab-wrapper {\n    bottom: 20px;\n    right: 20px; } }\n.md-fab-wrapper > .md-fab + .md-fab {\n  margin-top: 16px; }\n.md-fab-wrapper.md-fab-in-card {\n  position: absolute; }\n.md-fab-speed-dial .md-fab-wrapper-small {\n  position: absolute;\n  bottom: 80px;\n  right: 8px;\n  min-height: 48px;\n  width: 48px;\n  z-index: -1; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0;\n  position: absolute;\n  right: 0; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(1) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(2) {\n  bottom: 64px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(2) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(3) {\n  bottom: 128px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(3) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(4) {\n  bottom: 192px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(4) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(5) {\n  bottom: 256px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(5) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(6) {\n  bottom: 320px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(6) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(7) {\n  bottom: 384px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(7) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-last-child(8) {\n  bottom: 448px; }\n.md-fab-speed-dial .md-fab-wrapper-small .md-fab-small:nth-child(8) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s; }\n.md-fab-speed-dial.md-fab-active .md-fab-small {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n  z-index: 10; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(1) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 50ms; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(2) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.1s; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(3) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 150ms; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(4) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(5) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 250ms; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(6) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(7) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 350ms; }\n.md-fab-speed-dial.md-fab-active .md-fab-small:nth-last-child(8) {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, opacity 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s, -webkit-transform 0.1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s; }\n.md-fab-toolbar {\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: default; }\n.md-fab-toolbar > i {\n  cursor: pointer; }\n.md-fab-toolbar-actions {\n  visibility: hidden;\n  white-space: nowrap;\n  padding: 0 16px;\n  overflow: hidden;\n  box-sizing: border-box; }\n.md-fab-toolbar-actions > a,\n.md-fab-toolbar-actions > button {\n  display: block;\n  float: left;\n  opacity: 0;\n  margin: 0 0 0 16px;\n  height: 64px;\n  width: 48px;\n  box-sizing: border-box;\n  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  background: 0 0;\n  border: none;\n  outline: 0;\n  cursor: pointer; }\n.md-card.md-card-hover,\n.md-fab-sheet {\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n.md-fab-sheet.md-fab-animated,\n.md-fab-toolbar.md-fab-animated {\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n.md-fab-toolbar-actions > a:first-child,\n.md-fab-toolbar-actions > button:first-child {\n  margin-left: 0; }\n.md-fab-toolbar-actions .material-icons {\n  font-size: 36px;\n  line-height: 64px; }\n.md-fab-toolbar.md-fab-animated > i {\n  display: none; }\n.md-fab-toolbar.md-fab-active .md-fab-toolbar-actions {\n  visibility: visible; }\n.md-fab-toolbar.md-fab-active .md-fab-toolbar-actions > a,\n.md-fab-toolbar.md-fab-active .md-fab-toolbar-actions > button {\n  opacity: 1; }\n.md-fab-toolbar.md-fab-small .md-fab-toolbar-actions > a,\n.md-fab-toolbar.md-fab-small .md-fab-toolbar-actions > button {\n  height: 48px;\n  width: 36px;\n  padding: 0;\n  margin: 0 0 0 8px; }\n.md-fab-toolbar.md-fab-small .md-fab-toolbar-actions > a:first-child,\n.md-fab-toolbar.md-fab-small .md-fab-toolbar-actions > button:first-child {\n  margin-left: 0; }\n.md-fab-toolbar.md-fab-small .md-fab-toolbar-actions .material-icons {\n  font-size: 24px;\n  line-height: 48px;\n  height: inherit; }\n.md-fab-sheet {\n  cursor: default; }\n.md-fab-sheet > i,\n.md-icon,\n.md-list-interactive li {\n  cursor: pointer; }\n.md-fab-sheet-actions {\n  visibility: hidden;\n  white-space: nowrap;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 4px 0; }\n.md-fab-sheet-actions > a {\n  display: block;\n  opacity: 0;\n  padding: 4px 16px;\n  box-sizing: border-box;\n  font: 400 16px/32px Roboto, sans-serif;\n  text-align: left; }\n.md-fab-sheet-actions > a,\n.md-fab-sheet-actions > a:hover {\n  color: #212121; }\n.md-fab-sheet-actions .material-icons {\n  font-size: 24px;\n  margin-right: 8px;\n  vertical-align: -6px; }\n.md-fab-sheet.md-fab-animated > i {\n  display: none; }\n.md-fab-sheet.md-fab-active .md-fab-sheet-actions {\n  visibility: visible; }\n.md-fab-sheet.md-fab-active .md-fab-sheet-actions > a {\n  opacity: 1; }\n.sidebar_secondary_active .md-fab-wrapper {\n  margin-right: 264px; }\n@media only screen and (max-width: 767px) {\n  .sidebar_secondary_active .md-fab-wrapper {\n    margin-right: 280px; } }\n.md-toggle-group .md-toggle-button {\n  border-width: 0 0 2px;\n  border-style: solid;\n  border-color: transparent;\n  background: 0 0;\n  line-height: 30px;\n  min-width: 42px;\n  text-align: center;\n  padding: 0 8px;\n  vertical-align: middle;\n  cursor: pointer; }\n.md-toggle-group .md-toggle-button.md-toggle-active {\n  border-bottom-color: #212121; }\n.md-toggle-group.md-toggle-group-small .md-toggle-button {\n  font-size: 11px;\n  line-height: 24px;\n  min-width: 16px;\n  padding: 0 6px; }\n.md-btn-group {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n.md-btn-group .md-btn {\n  vertical-align: top;\n  margin-left: 0 !important; }\n.md-btn-group .md-btn:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.md-btn-group .md-btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n.md-btn-group .md-btn:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.md-color-red-50 {\n  color: #ffebee !important; }\n.md-bg-red-50 {\n  background-color: #ffebee !important; }\n.md-color-red-100 {\n  color: #ffcdd2 !important; }\n.md-bg-red-100 {\n  background-color: #ffcdd2 !important; }\n.md-color-red-200 {\n  color: #ef9a9a !important; }\n.md-bg-red-200 {\n  background-color: #ef9a9a !important; }\n.md-color-red-300 {\n  color: #e57373 !important; }\n.md-bg-red-300 {\n  background-color: #e57373 !important; }\n.md-color-red-400 {\n  color: #ef5350 !important; }\n.md-bg-red-400 {\n  background-color: #ef5350 !important; }\n.md-color-red-500 {\n  color: #f44336 !important; }\n.md-bg-red-500 {\n  background-color: #f44336 !important; }\n.md-color-red-600 {\n  color: #e53935 !important; }\n.md-bg-red-600 {\n  background-color: #e53935 !important; }\n.md-color-red-700 {\n  color: #d32f2f !important; }\n.md-bg-red-700 {\n  background-color: #d32f2f !important; }\n.md-color-red-800 {\n  color: #c62828 !important; }\n.md-bg-red-800 {\n  background-color: #c62828 !important; }\n.md-color-red-900 {\n  color: #b71c1c !important; }\n.md-bg-red-900 {\n  background-color: #b71c1c !important; }\n.md-color-red-A100 {\n  color: #ff8a80 !important; }\n.md-bg-red-A100 {\n  background-color: #ff8a80 !important; }\n.md-color-red-A200 {\n  color: #ff5252 !important; }\n.md-bg-red-A200 {\n  background-color: #ff5252 !important; }\n.md-color-red-A400 {\n  color: #ff1744 !important; }\n.md-bg-red-A400 {\n  background-color: #ff1744 !important; }\n.md-color-red-A700 {\n  color: #d50000 !important; }\n.md-bg-red-A700 {\n  background-color: #d50000 !important; }\n.md-color-pink-50 {\n  color: #fce4ec !important; }\n.md-bg-pink-50 {\n  background-color: #fce4ec !important; }\n.md-color-pink-100 {\n  color: #f8bbd0 !important; }\n.md-bg-pink-100 {\n  background-color: #f8bbd0 !important; }\n.md-color-pink-200 {\n  color: #f48fb1 !important; }\n.md-bg-pink-200 {\n  background-color: #f48fb1 !important; }\n.md-color-pink-300 {\n  color: #f06292 !important; }\n.md-bg-pink-300 {\n  background-color: #f06292 !important; }\n.md-color-pink-400 {\n  color: #ec407a !important; }\n.md-bg-pink-400 {\n  background-color: #ec407a !important; }\n.md-color-pink-500 {\n  color: #e91e63 !important; }\n.md-bg-pink-500 {\n  background-color: #e91e63 !important; }\n.md-color-pink-600 {\n  color: #d81b60 !important; }\n.md-bg-pink-600 {\n  background-color: #d81b60 !important; }\n.md-color-pink-700 {\n  color: #c2185b !important; }\n.md-bg-pink-700 {\n  background-color: #c2185b !important; }\n.md-color-pink-800 {\n  color: #ad1457 !important; }\n.md-bg-pink-800 {\n  background-color: #ad1457 !important; }\n.md-color-pink-900 {\n  color: #880e4f !important; }\n.md-bg-pink-900 {\n  background-color: #880e4f !important; }\n.md-color-pink-A100 {\n  color: #ff80ab !important; }\n.md-bg-pink-A100 {\n  background-color: #ff80ab !important; }\n.md-color-pink-A200 {\n  color: #ff4081 !important; }\n.md-bg-pink-A200 {\n  background-color: #ff4081 !important; }\n.md-color-pink-A400 {\n  color: #f50057 !important; }\n.md-bg-pink-A400 {\n  background-color: #f50057 !important; }\n.md-color-pink-A700 {\n  color: #c51162 !important; }\n.md-bg-pink-A700 {\n  background-color: #c51162 !important; }\n.md-color-purple-50 {\n  color: #f3e5f5 !important; }\n.md-bg-purple-50 {\n  background-color: #f3e5f5 !important; }\n.md-color-purple-100 {\n  color: #e1bee7 !important; }\n.md-bg-purple-100 {\n  background-color: #e1bee7 !important; }\n.md-color-purple-200 {\n  color: #ce93d8 !important; }\n.md-bg-purple-200 {\n  background-color: #ce93d8 !important; }\n.md-color-purple-300 {\n  color: #ba68c8 !important; }\n.md-bg-purple-300 {\n  background-color: #ba68c8 !important; }\n.md-color-purple-400 {\n  color: #ab47bc !important; }\n.md-bg-purple-400 {\n  background-color: #ab47bc !important; }\n.md-color-purple-500 {\n  color: #9c27b0 !important; }\n.md-bg-purple-500 {\n  background-color: #9c27b0 !important; }\n.md-color-purple-600 {\n  color: #8e24aa !important; }\n.md-bg-purple-600 {\n  background-color: #8e24aa !important; }\n.md-color-purple-700 {\n  color: #7b1fa2 !important; }\n.md-bg-purple-700 {\n  background-color: #7b1fa2 !important; }\n.md-color-purple-800 {\n  color: #6a1b9a !important; }\n.md-bg-purple-800 {\n  background-color: #6a1b9a !important; }\n.md-color-purple-900 {\n  color: #4a148c !important; }\n.md-bg-purple-900 {\n  background-color: #4a148c !important; }\n.md-color-purple-A100 {\n  color: #ea80fc !important; }\n.md-bg-purple-A100 {\n  background-color: #ea80fc !important; }\n.md-color-purple-A200 {\n  color: #e040fb !important; }\n.md-bg-purple-A200 {\n  background-color: #e040fb !important; }\n.md-color-purple-A400 {\n  color: #d500f9 !important; }\n.md-bg-purple-A400 {\n  background-color: #d500f9 !important; }\n.md-color-purple-A700 {\n  color: #a0f !important; }\n.md-bg-purple-A700 {\n  background-color: #a0f !important; }\n.md-color-deep-purple-50 {\n  color: #ede7f6 !important; }\n.md-bg-deep-purple-50 {\n  background-color: #ede7f6 !important; }\n.md-color-deep-purple-100 {\n  color: #d1c4e9 !important; }\n.md-bg-deep-purple-100 {\n  background-color: #d1c4e9 !important; }\n.md-color-deep-purple-200 {\n  color: #b39ddb !important; }\n.md-bg-deep-purple-200 {\n  background-color: #b39ddb !important; }\n.md-color-deep-purple-300 {\n  color: #9575cd !important; }\n.md-bg-deep-purple-300 {\n  background-color: #9575cd !important; }\n.md-color-deep-purple-400 {\n  color: #7e57c2 !important; }\n.md-bg-deep-purple-400 {\n  background-color: #7e57c2 !important; }\n.md-color-deep-purple-500 {\n  color: #673ab7 !important; }\n.md-bg-deep-purple-500 {\n  background-color: #673ab7 !important; }\n.md-color-deep-purple-600 {\n  color: #5e35b1 !important; }\n.md-bg-deep-purple-600 {\n  background-color: #5e35b1 !important; }\n.md-color-deep-purple-700 {\n  color: #512da8 !important; }\n.md-bg-deep-purple-700 {\n  background-color: #512da8 !important; }\n.md-color-deep-purple-800 {\n  color: #4527a0 !important; }\n.md-bg-deep-purple-800 {\n  background-color: #4527a0 !important; }\n.md-color-deep-purple-900 {\n  color: #311b92 !important; }\n.md-bg-deep-purple-900 {\n  background-color: #311b92 !important; }\n.md-color-deep-purple-A100 {\n  color: #b388ff !important; }\n.md-bg-deep-purple-A100 {\n  background-color: #b388ff !important; }\n.md-color-deep-purple-A200 {\n  color: #7c4dff !important; }\n.md-bg-deep-purple-A200 {\n  background-color: #7c4dff !important; }\n.md-color-deep-purple-A400 {\n  color: #651fff !important; }\n.md-bg-deep-purple-A400 {\n  background-color: #651fff !important; }\n.md-color-deep-purple-A700 {\n  color: #6200ea !important; }\n.md-bg-deep-purple-A700 {\n  background-color: #6200ea !important; }\n.md-color-indigo-50 {\n  color: #e8eaf6 !important; }\n.md-bg-indigo-50 {\n  background-color: #e8eaf6 !important; }\n.md-color-indigo-100 {\n  color: #c5cae9 !important; }\n.md-bg-indigo-100 {\n  background-color: #c5cae9 !important; }\n.md-color-indigo-200 {\n  color: #9fa8da !important; }\n.md-bg-indigo-200 {\n  background-color: #9fa8da !important; }\n.md-color-indigo-300 {\n  color: #7986cb !important; }\n.md-bg-indigo-300 {\n  background-color: #7986cb !important; }\n.md-color-indigo-400 {\n  color: #5c6bc0 !important; }\n.md-bg-indigo-400 {\n  background-color: #5c6bc0 !important; }\n.md-color-indigo-500 {\n  color: #3f51b5 !important; }\n.md-bg-indigo-500 {\n  background-color: #3f51b5 !important; }\n.md-color-indigo-600 {\n  color: #3949ab !important; }\n.md-bg-indigo-600 {\n  background-color: #3949ab !important; }\n.md-color-indigo-700 {\n  color: #303f9f !important; }\n.md-bg-indigo-700 {\n  background-color: #303f9f !important; }\n.md-color-indigo-800 {\n  color: #283593 !important; }\n.md-bg-indigo-800 {\n  background-color: #283593 !important; }\n.md-color-indigo-900 {\n  color: #1a237e !important; }\n.md-bg-indigo-900 {\n  background-color: #1a237e !important; }\n.md-color-indigo-A100 {\n  color: #8c9eff !important; }\n.md-bg-indigo-A100 {\n  background-color: #8c9eff !important; }\n.md-color-indigo-A200 {\n  color: #536dfe !important; }\n.md-bg-indigo-A200 {\n  background-color: #536dfe !important; }\n.md-color-indigo-A400 {\n  color: #3d5afe !important; }\n.md-bg-indigo-A400 {\n  background-color: #3d5afe !important; }\n.md-color-indigo-A700 {\n  color: #304ffe !important; }\n.md-bg-indigo-A700 {\n  background-color: #304ffe !important; }\n.md-color-blue-50 {\n  color: #e3f2fd !important; }\n.md-bg-blue-50 {\n  background-color: #e3f2fd !important; }\n.md-color-blue-100 {\n  color: #bbdefb !important; }\n.md-bg-blue-100 {\n  background-color: #bbdefb !important; }\n.md-color-blue-200 {\n  color: #90caf9 !important; }\n.md-bg-blue-200 {\n  background-color: #90caf9 !important; }\n.md-color-blue-300 {\n  color: #64b5f6 !important; }\n.md-bg-blue-300 {\n  background-color: #64b5f6 !important; }\n.md-color-blue-400 {\n  color: #42a5f5 !important; }\n.md-bg-blue-400 {\n  background-color: #42a5f5 !important; }\n.md-color-blue-500 {\n  color: #2196f3 !important; }\n.md-bg-blue-500 {\n  background-color: #2196f3 !important; }\n.md-color-blue-600 {\n  color: #1e88e5 !important; }\n.md-bg-blue-600 {\n  background-color: #1e88e5 !important; }\n.md-color-blue-700 {\n  color: #1976d2 !important; }\n.md-bg-blue-700 {\n  background-color: #1976d2 !important; }\n.md-color-blue-800 {\n  color: #1565c0 !important; }\n.md-bg-blue-800 {\n  background-color: #1565c0 !important; }\n.md-color-blue-900 {\n  color: #0d47a1 !important; }\n.md-bg-blue-900 {\n  background-color: #0d47a1 !important; }\n.md-color-blue-A100 {\n  color: #82b1ff !important; }\n.md-bg-blue-A100 {\n  background-color: #82b1ff !important; }\n.md-color-blue-A200 {\n  color: #448aff !important; }\n.md-bg-blue-A200 {\n  background-color: #448aff !important; }\n.md-color-blue-A400 {\n  color: #2979ff !important; }\n.md-bg-blue-A400 {\n  background-color: #2979ff !important; }\n.md-color-blue-A700 {\n  color: #2962ff !important; }\n.md-bg-blue-A700 {\n  background-color: #2962ff !important; }\n.md-color-light-blue-50 {\n  color: #e1f5fe !important; }\n.md-bg-light-blue-50 {\n  background-color: #e1f5fe !important; }\n.md-color-light-blue-100 {\n  color: #b3e5fc !important; }\n.md-bg-light-blue-100 {\n  background-color: #b3e5fc !important; }\n.md-color-light-blue-200 {\n  color: #81d4fa !important; }\n.md-bg-light-blue-200 {\n  background-color: #81d4fa !important; }\n.md-color-light-blue-300 {\n  color: #4fc3f7 !important; }\n.md-bg-light-blue-300 {\n  background-color: #4fc3f7 !important; }\n.md-color-light-blue-400 {\n  color: #29b6f6 !important; }\n.md-bg-light-blue-400 {\n  background-color: #29b6f6 !important; }\n.md-color-light-blue-500 {\n  color: #03a9f4 !important; }\n.md-bg-light-blue-500 {\n  background-color: #03a9f4 !important; }\n.md-color-light-blue-600 {\n  color: #039be5 !important; }\n.md-bg-light-blue-600 {\n  background-color: #039be5 !important; }\n.md-color-light-blue-700 {\n  color: #0288d1 !important; }\n.md-bg-light-blue-700 {\n  background-color: #0288d1 !important; }\n.md-color-light-blue-800 {\n  color: #0277bd !important; }\n.md-bg-light-blue-800 {\n  background-color: #0277bd !important; }\n.md-color-light-blue-900 {\n  color: #01579b !important; }\n.md-bg-light-blue-900 {\n  background-color: #01579b !important; }\n.md-color-light-blue-A100 {\n  color: #80d8ff !important; }\n.md-bg-light-blue-A100 {\n  background-color: #80d8ff !important; }\n.md-color-light-blue-A200 {\n  color: #40c4ff !important; }\n.md-bg-light-blue-A200 {\n  background-color: #40c4ff !important; }\n.md-color-light-blue-A400 {\n  color: #00b0ff !important; }\n.md-bg-light-blue-A400 {\n  background-color: #00b0ff !important; }\n.md-color-light-blue-A700 {\n  color: #0091ea !important; }\n.md-bg-light-blue-A700 {\n  background-color: #0091ea !important; }\n.md-color-cyan-50 {\n  color: #e0f7fa !important; }\n.md-bg-cyan-50 {\n  background-color: #e0f7fa !important; }\n.md-color-cyan-100 {\n  color: #b2ebf2 !important; }\n.md-bg-cyan-100 {\n  background-color: #b2ebf2 !important; }\n.md-color-cyan-200 {\n  color: #80deea !important; }\n.md-bg-cyan-200 {\n  background-color: #80deea !important; }\n.md-color-cyan-300 {\n  color: #4dd0e1 !important; }\n.md-bg-cyan-300 {\n  background-color: #4dd0e1 !important; }\n.md-color-cyan-400 {\n  color: #26c6da !important; }\n.md-bg-cyan-400 {\n  background-color: #26c6da !important; }\n.md-color-cyan-500 {\n  color: #00bcd4 !important; }\n.md-bg-cyan-500 {\n  background-color: #00bcd4 !important; }\n.md-color-cyan-600 {\n  color: #00acc1 !important; }\n.md-bg-cyan-600 {\n  background-color: #00acc1 !important; }\n.md-color-cyan-700 {\n  color: #0097a7 !important; }\n.md-bg-cyan-700 {\n  background-color: #0097a7 !important; }\n.md-color-cyan-800 {\n  color: #00838f !important; }\n.md-bg-cyan-800 {\n  background-color: #00838f !important; }\n.md-color-cyan-900 {\n  color: #006064 !important; }\n.md-bg-cyan-900 {\n  background-color: #006064 !important; }\n.md-color-cyan-A100 {\n  color: #84ffff !important; }\n.md-bg-cyan-A100 {\n  background-color: #84ffff !important; }\n.md-color-cyan-A200 {\n  color: #18ffff !important; }\n.md-bg-cyan-A200 {\n  background-color: #18ffff !important; }\n.md-color-cyan-A400 {\n  color: #00e5ff !important; }\n.md-bg-cyan-A400 {\n  background-color: #00e5ff !important; }\n.md-color-cyan-A700 {\n  color: #00b8d4 !important; }\n.md-bg-cyan-A700 {\n  background-color: #00b8d4 !important; }\n.md-color-teal-50 {\n  color: #e0f2f1 !important; }\n.md-bg-teal-50 {\n  background-color: #e0f2f1 !important; }\n.md-color-teal-100 {\n  color: #b2dfdb !important; }\n.md-bg-teal-100 {\n  background-color: #b2dfdb !important; }\n.md-color-teal-200 {\n  color: #80cbc4 !important; }\n.md-bg-teal-200 {\n  background-color: #80cbc4 !important; }\n.md-color-teal-300 {\n  color: #4db6ac !important; }\n.md-bg-teal-300 {\n  background-color: #4db6ac !important; }\n.md-color-teal-400 {\n  color: #26a69a !important; }\n.md-bg-teal-400 {\n  background-color: #26a69a !important; }\n.md-color-teal-500 {\n  color: #009688 !important; }\n.md-bg-teal-500 {\n  background-color: #009688 !important; }\n.md-color-teal-600 {\n  color: #00897b !important; }\n.md-bg-teal-600 {\n  background-color: #00897b !important; }\n.md-color-teal-700 {\n  color: #00796b !important; }\n.md-bg-teal-700 {\n  background-color: #00796b !important; }\n.md-color-teal-800 {\n  color: #00695c !important; }\n.md-bg-teal-800 {\n  background-color: #00695c !important; }\n.md-color-teal-900 {\n  color: #004d40 !important; }\n.md-bg-teal-900 {\n  background-color: #004d40 !important; }\n.md-color-teal-A100 {\n  color: #a7ffeb !important; }\n.md-bg-teal-A100 {\n  background-color: #a7ffeb !important; }\n.md-color-teal-A200 {\n  color: #64ffda !important; }\n.md-bg-teal-A200 {\n  background-color: #64ffda !important; }\n.md-color-teal-A400 {\n  color: #1de9b6 !important; }\n.md-bg-teal-A400 {\n  background-color: #1de9b6 !important; }\n.md-color-teal-A700 {\n  color: #00bfa5 !important; }\n.md-bg-teal-A700 {\n  background-color: #00bfa5 !important; }\n.md-color-green-50 {\n  color: #e8f5e9 !important; }\n.md-bg-green-50 {\n  background-color: #e8f5e9 !important; }\n.md-color-green-100 {\n  color: #c8e6c9 !important; }\n.md-bg-green-100 {\n  background-color: #c8e6c9 !important; }\n.md-color-green-200 {\n  color: #a5d6a7 !important; }\n.md-bg-green-200 {\n  background-color: #a5d6a7 !important; }\n.md-color-green-300 {\n  color: #81c784 !important; }\n.md-bg-green-300 {\n  background-color: #81c784 !important; }\n.md-color-green-400 {\n  color: #66bb6a !important; }\n.md-bg-green-400 {\n  background-color: #66bb6a !important; }\n.md-color-green-500 {\n  color: #4caf50 !important; }\n.md-bg-green-500 {\n  background-color: #4caf50 !important; }\n.md-color-green-600 {\n  color: #43a047 !important; }\n.md-bg-green-600 {\n  background-color: #43a047 !important; }\n.md-color-green-700 {\n  color: #388e3c !important; }\n.md-bg-green-700 {\n  background-color: #388e3c !important; }\n.md-color-green-800 {\n  color: #2e7d32 !important; }\n.md-bg-green-800 {\n  background-color: #2e7d32 !important; }\n.md-color-green-900 {\n  color: #1b5e20 !important; }\n.md-bg-green-900 {\n  background-color: #1b5e20 !important; }\n.md-color-green-A100 {\n  color: #b9f6ca !important; }\n.md-bg-green-A100 {\n  background-color: #b9f6ca !important; }\n.md-color-green-A200 {\n  color: #69f0ae !important; }\n.md-bg-green-A200 {\n  background-color: #69f0ae !important; }\n.md-color-green-A400 {\n  color: #00e676 !important; }\n.md-bg-green-A400 {\n  background-color: #00e676 !important; }\n.md-color-green-A700 {\n  color: #00c853 !important; }\n.md-bg-green-A700 {\n  background-color: #00c853 !important; }\n.md-color-light-green-50 {\n  color: #f1f8e9 !important; }\n.md-bg-light-green-50 {\n  background-color: #f1f8e9 !important; }\n.md-color-light-green-100 {\n  color: #dcedc8 !important; }\n.md-bg-light-green-100 {\n  background-color: #dcedc8 !important; }\n.md-color-light-green-200 {\n  color: #c5e1a5 !important; }\n.md-bg-light-green-200 {\n  background-color: #c5e1a5 !important; }\n.md-color-light-green-300 {\n  color: #aed581 !important; }\n.md-bg-light-green-300 {\n  background-color: #aed581 !important; }\n.md-color-light-green-400 {\n  color: #9ccc65 !important; }\n.md-bg-light-green-400 {\n  background-color: #9ccc65 !important; }\n.md-color-light-green-500 {\n  color: #8bc34a !important; }\n.md-bg-light-green-500 {\n  background-color: #8bc34a !important; }\n.md-color-light-green-600 {\n  color: #7cb342 !important; }\n.md-bg-light-green-600 {\n  background-color: #7cb342 !important; }\n.md-color-light-green-700 {\n  color: #689f38 !important; }\n.md-bg-light-green-700 {\n  background-color: #689f38 !important; }\n.md-color-light-green-800 {\n  color: #558b2f !important; }\n.md-bg-light-green-800 {\n  background-color: #558b2f !important; }\n.md-color-light-green-900 {\n  color: #33691e !important; }\n.md-bg-light-green-900 {\n  background-color: #33691e !important; }\n.md-color-light-green-A100 {\n  color: #ccff90 !important; }\n.md-bg-light-green-A100 {\n  background-color: #ccff90 !important; }\n.md-color-light-green-A200 {\n  color: #b2ff59 !important; }\n.md-bg-light-green-A200 {\n  background-color: #b2ff59 !important; }\n.md-color-light-green-A400 {\n  color: #76ff03 !important; }\n.md-bg-light-green-A400 {\n  background-color: #76ff03 !important; }\n.md-color-light-green-A700 {\n  color: #64dd17 !important; }\n.md-bg-light-green-A700 {\n  background-color: #64dd17 !important; }\n.md-color-lime-50 {\n  color: #f9fbe7 !important; }\n.md-bg-lime-50 {\n  background-color: #f9fbe7 !important; }\n.md-color-lime-100 {\n  color: #f0f4c3 !important; }\n.md-bg-lime-100 {\n  background-color: #f0f4c3 !important; }\n.md-color-lime-200 {\n  color: #e6ee9c !important; }\n.md-bg-lime-200 {\n  background-color: #e6ee9c !important; }\n.md-color-lime-300 {\n  color: #dce775 !important; }\n.md-bg-lime-300 {\n  background-color: #dce775 !important; }\n.md-color-lime-400 {\n  color: #d4e157 !important; }\n.md-bg-lime-400 {\n  background-color: #d4e157 !important; }\n.md-color-lime-500 {\n  color: #cddc39 !important; }\n.md-bg-lime-500 {\n  background-color: #cddc39 !important; }\n.md-color-lime-600 {\n  color: #c0ca33 !important; }\n.md-bg-lime-600 {\n  background-color: #c0ca33 !important; }\n.md-color-lime-700 {\n  color: #afb42b !important; }\n.md-bg-lime-700 {\n  background-color: #afb42b !important; }\n.md-color-lime-800 {\n  color: #9e9d24 !important; }\n.md-bg-lime-800 {\n  background-color: #9e9d24 !important; }\n.md-color-lime-900 {\n  color: #827717 !important; }\n.md-bg-lime-900 {\n  background-color: #827717 !important; }\n.md-color-lime-A100 {\n  color: #f4ff81 !important; }\n.md-bg-lime-A100 {\n  background-color: #f4ff81 !important; }\n.md-color-lime-A200 {\n  color: #eeff41 !important; }\n.md-bg-lime-A200 {\n  background-color: #eeff41 !important; }\n.md-color-lime-A400 {\n  color: #c6ff00 !important; }\n.md-bg-lime-A400 {\n  background-color: #c6ff00 !important; }\n.md-color-lime-A700 {\n  color: #aeea00 !important; }\n.md-bg-lime-A700 {\n  background-color: #aeea00 !important; }\n.md-color-yellow-50 {\n  color: #fffde7 !important; }\n.md-bg-yellow-50 {\n  background-color: #fffde7 !important; }\n.md-color-yellow-100 {\n  color: #fff9c4 !important; }\n.md-bg-yellow-100 {\n  background-color: #fff9c4 !important; }\n.md-color-yellow-200 {\n  color: #fff59d !important; }\n.md-bg-yellow-200 {\n  background-color: #fff59d !important; }\n.md-color-yellow-300 {\n  color: #fff176 !important; }\n.md-bg-yellow-300 {\n  background-color: #fff176 !important; }\n.md-color-yellow-400 {\n  color: #ffee58 !important; }\n.md-bg-yellow-400 {\n  background-color: #ffee58 !important; }\n.md-color-yellow-500 {\n  color: #ffeb3b !important; }\n.md-bg-yellow-500 {\n  background-color: #ffeb3b !important; }\n.md-color-yellow-600 {\n  color: #fdd835 !important; }\n.md-bg-yellow-600 {\n  background-color: #fdd835 !important; }\n.md-color-yellow-700 {\n  color: #fbc02d !important; }\n.md-bg-yellow-700 {\n  background-color: #fbc02d !important; }\n.md-color-yellow-800 {\n  color: #f9a825 !important; }\n.md-bg-yellow-800 {\n  background-color: #f9a825 !important; }\n.md-color-yellow-900 {\n  color: #f57f17 !important; }\n.md-bg-yellow-900 {\n  background-color: #f57f17 !important; }\n.md-color-yellow-A100 {\n  color: #ffff8d !important; }\n.md-bg-yellow-A100 {\n  background-color: #ffff8d !important; }\n.md-color-yellow-A200 {\n  color: #ff0 !important; }\n.md-bg-yellow-A200 {\n  background-color: #ff0 !important; }\n.md-color-yellow-A400 {\n  color: #ffea00 !important; }\n.md-bg-yellow-A400 {\n  background-color: #ffea00 !important; }\n.md-color-yellow-A700 {\n  color: #ffd600 !important; }\n.md-bg-yellow-A700 {\n  background-color: #ffd600 !important; }\n.md-color-amber-50 {\n  color: #fff8e1 !important; }\n.md-bg-amber-50 {\n  background-color: #fff8e1 !important; }\n.md-color-amber-100 {\n  color: #ffecb3 !important; }\n.md-bg-amber-100 {\n  background-color: #ffecb3 !important; }\n.md-color-amber-200 {\n  color: #ffe082 !important; }\n.md-bg-amber-200 {\n  background-color: #ffe082 !important; }\n.md-color-amber-300 {\n  color: #ffd54f !important; }\n.md-bg-amber-300 {\n  background-color: #ffd54f !important; }\n.md-color-amber-400 {\n  color: #ffca28 !important; }\n.md-bg-amber-400 {\n  background-color: #ffca28 !important; }\n.md-color-amber-500 {\n  color: #ffc107 !important; }\n.md-bg-amber-500 {\n  background-color: #ffc107 !important; }\n.md-color-amber-600 {\n  color: #ffb300 !important; }\n.md-bg-amber-600 {\n  background-color: #ffb300 !important; }\n.md-color-amber-700 {\n  color: #ffa000 !important; }\n.md-bg-amber-700 {\n  background-color: #ffa000 !important; }\n.md-color-amber-800 {\n  color: #ff8f00 !important; }\n.md-bg-amber-800 {\n  background-color: #ff8f00 !important; }\n.md-color-amber-900 {\n  color: #ff6f00 !important; }\n.md-bg-amber-900 {\n  background-color: #ff6f00 !important; }\n.md-color-amber-A100 {\n  color: #ffe57f !important; }\n.md-bg-amber-A100 {\n  background-color: #ffe57f !important; }\n.md-color-amber-A200 {\n  color: #ffd740 !important; }\n.md-bg-amber-A200 {\n  background-color: #ffd740 !important; }\n.md-color-amber-A400 {\n  color: #ffc400 !important; }\n.md-bg-amber-A400 {\n  background-color: #ffc400 !important; }\n.md-color-amber-A700 {\n  color: #ffab00 !important; }\n.md-bg-amber-A700 {\n  background-color: #ffab00 !important; }\n.md-color-orange-50 {\n  color: #fff3e0 !important; }\n.md-bg-orange-50 {\n  background-color: #fff3e0 !important; }\n.md-color-orange-100 {\n  color: #ffe0b2 !important; }\n.md-bg-orange-100 {\n  background-color: #ffe0b2 !important; }\n.md-color-orange-200 {\n  color: #ffcc80 !important; }\n.md-bg-orange-200 {\n  background-color: #ffcc80 !important; }\n.md-color-orange-300 {\n  color: #ffb74d !important; }\n.md-bg-orange-300 {\n  background-color: #ffb74d !important; }\n.md-color-orange-400 {\n  color: #ffa726 !important; }\n.md-bg-orange-400 {\n  background-color: #ffa726 !important; }\n.md-color-orange-500 {\n  color: #ff9800 !important; }\n.md-bg-orange-500 {\n  background-color: #ff9800 !important; }\n.md-color-orange-600 {\n  color: #fb8c00 !important; }\n.md-bg-orange-600 {\n  background-color: #fb8c00 !important; }\n.md-color-orange-700 {\n  color: #f57c00 !important; }\n.md-bg-orange-700 {\n  background-color: #f57c00 !important; }\n.md-color-orange-800 {\n  color: #ef6c00 !important; }\n.md-bg-orange-800 {\n  background-color: #ef6c00 !important; }\n.md-color-orange-900 {\n  color: #e65100 !important; }\n.md-bg-orange-900 {\n  background-color: #e65100 !important; }\n.md-color-orange-A100 {\n  color: #ffd180 !important; }\n.md-bg-orange-A100 {\n  background-color: #ffd180 !important; }\n.md-color-orange-A200 {\n  color: #ffab40 !important; }\n.md-bg-orange-A200 {\n  background-color: #ffab40 !important; }\n.md-color-orange-A400 {\n  color: #ff9100 !important; }\n.md-bg-orange-A400 {\n  background-color: #ff9100 !important; }\n.md-color-orange-A700 {\n  color: #ff6d00 !important; }\n.md-bg-orange-A700 {\n  background-color: #ff6d00 !important; }\n.md-color-deep-orange-50 {\n  color: #fbe9e7 !important; }\n.md-bg-deep-orange-50 {\n  background-color: #fbe9e7 !important; }\n.md-color-deep-orange-100 {\n  color: #ffccbc !important; }\n.md-bg-deep-orange-100 {\n  background-color: #ffccbc !important; }\n.md-color-deep-orange-200 {\n  color: #ffab91 !important; }\n.md-bg-deep-orange-200 {\n  background-color: #ffab91 !important; }\n.md-color-deep-orange-300 {\n  color: #ff8a65 !important; }\n.md-bg-deep-orange-300 {\n  background-color: #ff8a65 !important; }\n.md-color-deep-orange-400 {\n  color: #ff7043 !important; }\n.md-bg-deep-orange-400 {\n  background-color: #ff7043 !important; }\n.md-color-deep-orange-500 {\n  color: #ff5722 !important; }\n.md-bg-deep-orange-500 {\n  background-color: #ff5722 !important; }\n.md-color-deep-orange-600 {\n  color: #f4511e !important; }\n.md-bg-deep-orange-600 {\n  background-color: #f4511e !important; }\n.md-color-deep-orange-700 {\n  color: #e64a19 !important; }\n.md-bg-deep-orange-700 {\n  background-color: #e64a19 !important; }\n.md-color-deep-orange-800 {\n  color: #d84315 !important; }\n.md-bg-deep-orange-800 {\n  background-color: #d84315 !important; }\n.md-color-deep-orange-900 {\n  color: #bf360c !important; }\n.md-bg-deep-orange-900 {\n  background-color: #bf360c !important; }\n.md-color-deep-orange-A100 {\n  color: #ff9e80 !important; }\n.md-bg-deep-orange-A100 {\n  background-color: #ff9e80 !important; }\n.md-color-deep-orange-A200 {\n  color: #ff6e40 !important; }\n.md-bg-deep-orange-A200 {\n  background-color: #ff6e40 !important; }\n.md-color-deep-orange-A400 {\n  color: #ff3d00 !important; }\n.md-bg-deep-orange-A400 {\n  background-color: #ff3d00 !important; }\n.md-color-deep-orange-A700 {\n  color: #dd2c00 !important; }\n.md-bg-deep-orange-A700 {\n  background-color: #dd2c00 !important; }\n.md-color-brown-50 {\n  color: #efebe9 !important; }\n.md-bg-brown-50 {\n  background-color: #efebe9 !important; }\n.md-color-brown-100 {\n  color: #d7ccc8 !important; }\n.md-bg-brown-100 {\n  background-color: #d7ccc8 !important; }\n.md-color-brown-200 {\n  color: #bcaaa4 !important; }\n.md-bg-brown-200 {\n  background-color: #bcaaa4 !important; }\n.md-color-brown-300 {\n  color: #a1887f !important; }\n.md-bg-brown-300 {\n  background-color: #a1887f !important; }\n.md-color-brown-400 {\n  color: #8d6e63 !important; }\n.md-bg-brown-400 {\n  background-color: #8d6e63 !important; }\n.md-color-brown-500 {\n  color: #795548 !important; }\n.md-bg-brown-500 {\n  background-color: #795548 !important; }\n.md-color-brown-600 {\n  color: #6d4c41 !important; }\n.md-bg-brown-600 {\n  background-color: #6d4c41 !important; }\n.md-color-brown-700 {\n  color: #5d4037 !important; }\n.md-bg-brown-700 {\n  background-color: #5d4037 !important; }\n.md-color-brown-800 {\n  color: #4e342e !important; }\n.md-bg-brown-800 {\n  background-color: #4e342e !important; }\n.md-color-brown-900 {\n  color: #3e2723 !important; }\n.md-bg-brown-900 {\n  background-color: #3e2723 !important; }\n.md-color-grey-50 {\n  color: #fafafa !important; }\n.md-bg-grey-50 {\n  background-color: #fafafa !important; }\n.md-color-grey-100 {\n  color: #f5f5f5 !important; }\n.md-bg-grey-100 {\n  background-color: #f5f5f5 !important; }\n.md-color-grey-200 {\n  color: #eee !important; }\n.md-bg-grey-200 {\n  background-color: #eee !important; }\n.md-color-grey-300 {\n  color: #e0e0e0 !important; }\n.md-bg-grey-300 {\n  background-color: #e0e0e0 !important; }\n.md-color-grey-400 {\n  color: #bdbdbd !important; }\n.md-bg-grey-400 {\n  background-color: #bdbdbd !important; }\n.md-color-grey-500 {\n  color: #9e9e9e !important; }\n.md-bg-grey-500 {\n  background-color: #9e9e9e !important; }\n.md-color-grey-600 {\n  color: #757575 !important; }\n.md-bg-grey-600 {\n  background-color: #757575 !important; }\n.md-color-grey-700 {\n  color: #616161 !important; }\n.md-bg-grey-700 {\n  background-color: #616161 !important; }\n.md-color-grey-800 {\n  color: #424242 !important; }\n.md-bg-grey-800 {\n  background-color: #424242 !important; }\n.md-color-grey-900 {\n  color: #212121 !important; }\n.md-bg-grey-900 {\n  background-color: #212121 !important; }\n.md-color-blue-grey-50 {\n  color: #eceff1 !important; }\n.md-bg-blue-grey-50 {\n  background-color: #eceff1 !important; }\n.md-color-blue-grey-100 {\n  color: #cfd8dc !important; }\n.md-bg-blue-grey-100 {\n  background-color: #cfd8dc !important; }\n.md-color-blue-grey-200 {\n  color: #b0bec5 !important; }\n.md-bg-blue-grey-200 {\n  background-color: #b0bec5 !important; }\n.md-color-blue-grey-300 {\n  color: #90a4ae !important; }\n.md-bg-blue-grey-300 {\n  background-color: #90a4ae !important; }\n.md-color-blue-grey-400 {\n  color: #78909c !important; }\n.md-bg-blue-grey-400 {\n  background-color: #78909c !important; }\n.md-color-blue-grey-500 {\n  color: #607d8b !important; }\n.md-bg-blue-grey-500 {\n  background-color: #607d8b !important; }\n.md-color-blue-grey-600 {\n  color: #546e7a !important; }\n.md-bg-blue-grey-600 {\n  background-color: #546e7a !important; }\n.md-color-blue-grey-700 {\n  color: #455a64 !important; }\n.md-bg-blue-grey-700 {\n  background-color: #455a64 !important; }\n.md-color-blue-grey-800 {\n  color: #37474f !important; }\n.md-bg-blue-grey-800 {\n  background-color: #37474f !important; }\n.md-color-blue-grey-900 {\n  color: #263238 !important; }\n.md-bg-blue-grey-900 {\n  background-color: #263238 !important; }\n.md-color-white {\n  color: #fff !important; }\n.md-card {\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border: none !important;\n  border-style: groove !important; }\n.md-card + .md-card,\n.md-card + .uk-grid,\n.uk-grid + .md-card {\n  margin-top: 25px; }\n.md-card .full_width_in_card {\n  padding: 16px 24px;\n  background: rgba(0, 0, 0, 0.085); }\n.md-card .md-card-toolbar {\n  height: 48px;\n  padding: 0 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background: #fff; }\n.md-card .md-card-toolbar:after,\n.md-card .md-card-toolbar:before {\n  content: \" \";\n  display: table; }\n.md-card .md-card-toolbar-heading-text {\n  font: 500 14px/50px Roboto, sans-serif;\n  color: #212121;\n  margin: 0;\n  float: left;\n  overflow: hidden;\n  height: 48px; }\n.md-card .md-card-toolbar-heading-text.large {\n  font-size: 18px;\n  font-weight: 400; }\n.md-card .md-card-toolbar .md-toggle-group {\n  float: left;\n  margin: 8px 0 0 16px; }\n.md-card .md-card-toolbar .md-toggle-group.md-toggle-group-small {\n  margin-top: 10px; }\n.md-card .md-card-toolbar .md-card-toolbar-actions {\n  float: right;\n  padding-top: 10px; }\n.md-card .md-card-toolbar .md-card-toolbar-actions .uk-open .md-card-toolbar-icon {\n  background: rgba(0, 0, 0, 0.085);\n  color: #212121; }\n.md-card .md-card-toolbar .md-card-toolbar-actions .md-card-dropdown {\n  display: inline-block;\n  position: relative; }\n.md-card .md-card-toolbar .md-card-toolbar-actions .selectize-control {\n  min-width: 220px;\n  margin-top: -3px; }\n.md-card .md-card-toolbar .md-card-toolbar-actions .selectize-control .selectize-input {\n  min-height: 30px;\n  padding: 4px 8px; }\n.md-card .md-card-toolbar .md-card-toolbar-actions .selectize-control .selectize-dropdown {\n  margin-top: -34px; }\n.md-card .md-card-toolbar .md-icon + .md-card-dropdown {\n  margin-left: 4px; }\n.md-card .md-card-toolbar .md-card-fullscreen-deactivate {\n  margin: 9px 8px 0 0; }\n.md-card .md-card-toolbar-input {\n  border: none;\n  font: 400 18px/24px Roboto, sans-serif;\n  height: auto;\n  background: 0 0 !important;\n  padding: 12px 0;\n  width: 50%;\n  box-sizing: border-box; }\n.md-card .md-card-toolbar .uk-tab {\n  margin-top: -2px;\n  border-bottom: none; }\n.md-card .md-card-toolbar .uk-tab li > a {\n  padding: 10px 8px !important; }\n.md-card .md-card-head {\n  height: 160px;\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.md-card .md-card-head-menu {\n  position: absolute;\n  right: 8px;\n  top: 8px; }\n.md-card .md-card-head-avatar {\n  width: 82px;\n  height: 82px;\n  border-radius: 50%;\n  margin-top: 16px;\n  border: 2px solid #fff;\n  display: inline-block; }\n.md-card .md-card-head-text {\n  padding: 8px 16px 16px;\n  font: 500 16px/22px Roboto, sans-serif;\n  color: #212121;\n  margin: 0; }\n.md-card .md-card-head-text span {\n  display: block;\n  font: 400 12px/18px Roboto, sans-serif;\n  margin-top: -2px; }\n.md-card .md-card-head-text.text_dark {\n  color: #212121 !important; }\n.md-card .md-card-head-text-over {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0, transparent 100%); }\n.md-card .md-card-head-subtext {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  text-align: right;\n  color: #fff; }\n.md-card .md-card-head-subtext span {\n  font-size: 26px; }\n.md-card .md-card-head-icon {\n  font-size: 48px;\n  color: #fff;\n  vertical-align: middle; }\n.md-card .md-card-head.head_background {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  border-bottom-color: transparent; }\n.md-card .md-card-head.head_background .md-card-head-text {\n  color: #fff; }\n.md-card .md-card-head.head_background_top {\n  background-repeat: no-repeat;\n  background-position: center top; }\n.md-card .md-card-head.head_background_bottom {\n  background-repeat: no-repeat;\n  background-position: center bottom; }\n.md-card .md-card-head .head_chart {\n  height: 100px;\n  width: 100%;\n  position: absolute !important;\n  left: 0;\n  top: 40px; }\n.md-card .md-card-head .fitVid_player {\n  width: 100%;\n  height: 160px;\n  overflow: hidden; }\n.md-card .md-card-head-img {\n  height: 100%;\n  width: auto; }\n.md-card .md-card-head iframe {\n  height: 160px; }\n.md-card .md-card-content {\n  padding: 16px; }\n.md-card .md-card-content.padding-reset {\n  padding: 0; }\n.md-card .md-card-content.large-padding {\n  padding: 24px 35px; }\n.md-card .md-card-content.small-padding {\n  padding: 8px; }\n.md-card.md-card-fullscreen {\n  position: fixed;\n  z-index: 9998;\n  overflow-x: hidden; }\n.md-card.md-card-fullscreen .md-card-fullscreen-activate {\n  display: none; }\n.md-card .md-card-fullscreen-content {\n  display: none;\n  padding: 16px 0; }\n.md-card-fullscreen-content-hidden .md-card .md-card-fullscreen-content {\n  display: block;\n  visibility: hidden;\n  padding: 0; }\n.md-card.mdToolbar_fixed {\n  overflow-y: hidden; }\n.md-card.mdToolbar_fixed > .md-card-toolbar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9999;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n.md-card.mdToolbar_fixed > .md-card-content {\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  top: 48px;\n  bottom: 0; }\n.md-card.md-card-overlay {\n  overflow: hidden;\n  padding-bottom: 54px; }\n.md-card.md-card-overlay .md-card-content {\n  height: 142px;\n  overflow: hidden;\n  box-sizing: border-box; }\n.md-card.md-card-overlay .md-card-content.no_truncate {\n  position: relative; }\n.md-card.md-card-overlay .md-card-content.no_truncate:after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 8px;\n  background-image: linear-gradient(to top, #fff 50%, rgba(255, 255, 255, 0) 100%);\n  display: block;\n  content: '';\n  z-index: 10; }\n.md-card.md-card-overlay .md-card-content > pre {\n  margin-top: 0;\n  max-height: 110px; }\n.md-card.md-card-overlay .md-card-content > pre > code {\n  overflow: hidden; }\n.md-card.md-card-overlay .md-card-overlay-content {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  padding: 0 16px;\n  margin-top: -54px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  text-align: left;\n  bottom: 0;\n  background: #fff;\n  z-index: 10;\n  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n.md-card.md-card-overlay .md-card-overlay-content p {\n  margin: 0; }\n.md-card.md-card-overlay .md-card-overlay-content p + * {\n  margin-top: 16px; }\n.md-card.md-card-overlay .md-card-overlay-content p + p {\n  margin-top: 4px; }\n.md-card.md-card-overlay .md-card-overlay-header {\n  padding: 12px 0; }\n.md-card.md-card-overlay .md-card-overlay-header:after,\n.md-card.md-card-overlay .md-card-overlay-header:before {\n  content: \" \";\n  display: table; }\n.md-card.md-card-overlay .md-card-overlay-header h3,\n.md-card.md-card-overlay .md-card-overlay-header h4 {\n  margin: 0;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%;\n  padding-right: 32px;\n  box-sizing: border-box; }\n.md-card.md-card-overlay .md-card-overlay-header h3 {\n  font: 400 16px/30px Roboto, sans-serif; }\n.md-card.md-card-overlay .md-card-overlay-header h4 {\n  font: 500 14px/30px Roboto, sans-serif; }\n.md-card.md-card-overlay .md-card-overlay-header .md-icon {\n  position: absolute;\n  right: 12px;\n  top: 11px; }\n.md-card.md-card-overlay-active .md-card-overlay-content {\n  top: -1px;\n  margin-top: 0; }\n.md-card.md-card-hover {\n  will-change: box-shadow; }\n.hierarchical_show,\n.hierarchical_slide {\n  will-change: transform, opacity; }\n.md-card.md-card-hover:hover,\n.uk-sortable-dragged .md-card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n.uk-sortable-dragged .md-card canvas {\n  margin: 0 auto;\n  display: block; }\n.md-card .heading_list {\n  padding: 0; }\n.md-card-danger,\n.md-card-primary,\n.md-card-success,\n.md-card-warning {\n  border-left: 4px solid transparent; }\n.md-card-primary {\n  border-left-color: #2196f3; }\n.md-card-success {\n  border-left-color: #7cb342; }\n.md-card-danger {\n  border-left-color: #e53935; }\n.md-card-warning {\n  border-left-color: #ffa000; }\n.md-expand,\n.md-expand-group > * {\n  opacity: 0; }\n.md-card-placeholder {\n  min-width: 100%; }\n.md-card-list-wrapper,\n.md-card-list-wrapper *,\n.md-card-list-wrapper:after,\n.md-card-list-wrapper:before,\n.md-card-list-wrapper:after,\n.md-card-list-wrapper:before {\n  box-sizing: border-box; }\n.md-card-list-wrapper .md-card-list-header {\n  position: absolute;\n  top: -24px;\n  left: 0; }\n.md-card-list-wrapper .md-card-list {\n  margin: 48px 0 0;\n  position: relative; }\n.md-card-list-wrapper .md-card-list:first-child {\n  margin-top: 24px; }\n.md-card-list-wrapper .md-card-list > ul {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.md-card-list-wrapper .md-card-list > ul > li {\n  margin: 0;\n  list-style: none;\n  min-height: 34px;\n  padding: 8px 16px;\n  font-size: 13px;\n  transition: background 150ms, padding .2s;\n  background: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n.md-card-list-wrapper .md-card-list > ul > li:after,\n.md-card-list-wrapper .md-card-list > ul > li:before {\n  content: \" \";\n  display: table; }\n.md-card-list-wrapper .md-card-list > ul > li.item-shown {\n  background: #fff;\n  padding: 8px 36px; }\n@media only screen and (max-width: 767px) {\n  .md-card-list-wrapper .md-card-list > ul > li.item-shown .md-card-list-item-subject {\n    clear: both;\n    float: none;\n    padding-top: 16px; }\n  .md-card-list-wrapper .md-card-list > ul > li.item-shown .md-card-list-item-subject > span {\n    white-space: normal; } }\n.md-card-list-wrapper .md-card-list > ul > li.item-shown .md-card-list-item-sender {\n  width: auto;\n  overflow: hidden; }\n.md-card-list-wrapper .md-card-list > ul > li.item-shown.md-card-list-item-selected {\n  position: relative; }\n.md-card-list-wrapper .md-card-list > ul > li.item-shown.md-card-list-item-selected:before {\n  content: '';\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  background: #e3f2fd; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-avatar-wrapper,\n.md-card-list-wrapper .md-card-list .md-card-list-item-select,\n.md-card-list-wrapper .md-card-list .md-card-list-item-sender {\n  float: left; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-select {\n  padding: 6px 8px 0 0; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-avatar-wrapper,\n.md-card-list-wrapper .md-card-list .md-card-list-item-date,\n.md-card-list-wrapper .md-card-list .md-card-list-item-sender,\n.md-card-list-wrapper .md-card-list .md-card-list-item-subject {\n  padding: 0 8px; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-avatar-wrapper .md-card-list-item-avatar {\n  background: #757575;\n  color: #fff;\n  width: 34px;\n  border-radius: 50%;\n  display: block; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-avatar-wrapper .md-card-list-item-avatar-large {\n  width: 82px;\n  border-radius: 50%; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-avatar-wrapper span.md-card-list-item-avatar {\n  line-height: 34px;\n  text-transform: uppercase;\n  text-align: center; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-sender {\n  width: 220px;\n  line-height: 34px; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-sender > span {\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%; }\n@media only screen and (max-width: 1219px) {\n  .md-card-list-wrapper .md-card-list .md-card-list-item-sender {\n    display: none; } }\n.md-card-list-wrapper .md-card-list .md-card-list-item-subject {\n  overflow: hidden;\n  font-weight: 500; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-subject > span {\n  line-height: 34px;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-subject .md-card-list-item-sender-small {\n  display: none; }\n@media only screen and (max-width: 1219px) {\n  .md-card-list-wrapper .md-card-list .md-card-list-item-subject .md-card-list-item-sender-small {\n    display: block; }\n  .md-card-list-wrapper .md-card-list .md-card-list-item-subject .md-card-list-item-sender-small + span {\n    line-height: inherit; } }\n.md-card-list-wrapper .md-card-list .md-card-list-item-subject .md-card-list-item-sender-small > span {\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%;\n  font-size: 12px;\n  color: #999; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-date {\n  line-height: 34px;\n  float: right;\n  color: #999; }\n@media only screen and (max-width: 479px) {\n  .md-card-list-wrapper .md-card-list .md-card-list-item-date {\n    display: none; } }\n.md-card-list-wrapper .md-card-list .md-card-list-item-menu {\n  float: right;\n  margin: 0 0 0 8px;\n  position: relative; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-menu .uk-dropdown .material-icons {\n  margin-right: 8px; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-content-wrapper {\n  display: none;\n  clear: both;\n  opacity: 0; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-content {\n  padding: 16px 16px 0 0;\n  max-height: 360px;\n  overflow-x: hidden;\n  margin: 0 0 40px;\n  top: 20px;\n  position: relative;\n  font-size: 14px; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-content + .md-card-list-item-reply {\n  padding-top: 10px; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-reply {\n  padding: 16px 0; }\n.md-card-list-wrapper .md-card-list .md-card-list-item-selected {\n  background: #e3f2fd; }\ninput:not([type]),\ninput[type=week],\ninput[type=number],\ninput[type=email],\ninput[type=url],\ninput[type=search],\ninput[type=tel],\ninput[type=color],\ninput[type=text],\ninput[type=password],\ninput[type=datetime],\ninput[type=datetime-local],\ninput[type=date],\ninput[type=month],\ninput[type=time],\nselect,\ntextarea {\n  outline: 0; }\ninput:not([type]).md-input,\ninput[type=week].md-input,\ninput[type=number].md-input,\ninput[type=email].md-input,\ninput[type=url].md-input,\ninput[type=search].md-input,\ninput[type=tel].md-input,\ninput[type=color].md-input,\ninput[type=text].md-input,\ninput[type=password].md-input,\ninput[type=datetime].md-input,\ninput[type=datetime-local].md-input,\ninput[type=date].md-input,\ninput[type=month].md-input,\ninput[type=time].md-input,\nselect.md-input,\ntextarea.md-input {\n  border-radius: 0;\n  border: 0 solid rgba(0, 0, 0, 0.12);\n  font: 400 15px/18px Roboto, sans-serif;\n  box-shadow: inset 0 -1px 0 transparent;\n  box-sizing: border-box;\n  padding: 12px 4px;\n  background: 0 0;\n  width: 100%;\n  display: block; }\ninput:not([type]).md-input.md-input-danger,\ninput[type=week].md-input.md-input-danger,\ninput[type=number].md-input.md-input-danger,\ninput[type=email].md-input.md-input-danger,\ninput[type=url].md-input.md-input-danger,\ninput[type=search].md-input.md-input-danger,\ninput[type=tel].md-input.md-input-danger,\ninput[type=color].md-input.md-input-danger,\ninput[type=text].md-input.md-input-danger,\ninput[type=password].md-input.md-input-danger,\ninput[type=datetime].md-input.md-input-danger,\ninput[type=datetime-local].md-input.md-input-danger,\ninput[type=date].md-input.md-input-danger,\ninput[type=month].md-input.md-input-danger,\ninput[type=time].md-input.md-input-danger,\nselect.md-input.md-input-danger,\ntextarea.md-input.md-input-danger {\n  border-color: #e53935; }\ninput:not([type]).md-input.md-input-danger:focus,\ninput[type=week].md-input.md-input-danger:focus,\ninput[type=number].md-input.md-input-danger:focus,\ninput[type=email].md-input.md-input-danger:focus,\ninput[type=url].md-input.md-input-danger:focus,\ninput[type=search].md-input.md-input-danger:focus,\ninput[type=tel].md-input.md-input-danger:focus,\ninput[type=color].md-input.md-input-danger:focus,\ninput[type=text].md-input.md-input-danger:focus,\ninput[type=password].md-input.md-input-danger:focus,\ninput[type=datetime].md-input.md-input-danger:focus,\ninput[type=datetime-local].md-input.md-input-danger:focus,\ninput[type=date].md-input.md-input-danger:focus,\ninput[type=month].md-input.md-input-danger:focus,\ninput[type=time].md-input.md-input-danger:focus,\nselect.md-input.md-input-danger:focus,\ntextarea.md-input.md-input-danger:focus {\n  border-bottom-color: #e53935; }\ninput:not([type]).md-input.md-input-success,\ninput[type=week].md-input.md-input-success,\ninput[type=number].md-input.md-input-success,\ninput[type=email].md-input.md-input-success,\ninput[type=url].md-input.md-input-success,\ninput[type=search].md-input.md-input-success,\ninput[type=tel].md-input.md-input-success,\ninput[type=color].md-input.md-input-success,\ninput[type=text].md-input.md-input-success,\ninput[type=password].md-input.md-input-success,\ninput[type=datetime].md-input.md-input-success,\ninput[type=datetime-local].md-input.md-input-success,\ninput[type=date].md-input.md-input-success,\ninput[type=month].md-input.md-input-success,\ninput[type=time].md-input.md-input-success,\nselect.md-input.md-input-success,\ntextarea.md-input.md-input-success {\n  border-color: #7cb342; }\ninput:not([type]).md-input.md-input-success:focus,\ninput[type=week].md-input.md-input-success:focus,\ninput[type=number].md-input.md-input-success:focus,\ninput[type=email].md-input.md-input-success:focus,\ninput[type=url].md-input.md-input-success:focus,\ninput[type=search].md-input.md-input-success:focus,\ninput[type=tel].md-input.md-input-success:focus,\ninput[type=color].md-input.md-input-success:focus,\ninput[type=text].md-input.md-input-success:focus,\ninput[type=password].md-input.md-input-success:focus,\ninput[type=datetime].md-input.md-input-success:focus,\ninput[type=datetime-local].md-input.md-input-success:focus,\ninput[type=date].md-input.md-input-success:focus,\ninput[type=month].md-input.md-input-success:focus,\ninput[type=time].md-input.md-input-success:focus,\nselect.md-input.md-input-success:focus,\ntextarea.md-input.md-input-success:focus {\n  border-bottom-color: #7cb342; }\ninput:not([type]).md-input:focus,\ninput[type=week].md-input:focus,\ninput[type=number].md-input:focus,\ninput[type=email].md-input:focus,\ninput[type=url].md-input:focus,\ninput[type=search].md-input:focus,\ninput[type=tel].md-input:focus,\ninput[type=color].md-input:focus,\ninput[type=text].md-input:focus,\ninput[type=password].md-input:focus,\ninput[type=datetime].md-input:focus,\ninput[type=datetime-local].md-input:focus,\ninput[type=date].md-input:focus,\ninput[type=month].md-input:focus,\ninput[type=time].md-input:focus,\nselect.md-input:focus,\ntextarea.md-input:focus {\n  background: 0 0;\n  border-color: rgba(0, 0, 0, 0.12); }\ninput:not([type]).md-input-small,\ninput[type=week].md-input-small,\ninput[type=number].md-input-small,\ninput[type=email].md-input-small,\ninput[type=url].md-input-small,\ninput[type=search].md-input-small,\ninput[type=tel].md-input-small,\ninput[type=color].md-input-small,\ninput[type=text].md-input-small,\ninput[type=password].md-input-small,\ninput[type=datetime].md-input-small,\ninput[type=datetime-local].md-input-small,\ninput[type=date].md-input-small,\ninput[type=month].md-input-small,\ninput[type=time].md-input-small,\nselect.md-input-small,\ntextarea.md-input-small {\n  padding: 4px; }\ninput:not([type]).md-input.uk-form-width-mini,\ninput[type=week].md-input.uk-form-width-mini,\ninput[type=number].md-input.uk-form-width-mini,\ninput[type=email].md-input.uk-form-width-mini,\ninput[type=url].md-input.uk-form-width-mini,\ninput[type=search].md-input.uk-form-width-mini,\ninput[type=tel].md-input.uk-form-width-mini,\ninput[type=color].md-input.uk-form-width-mini,\ninput[type=text].md-input.uk-form-width-mini,\ninput[type=password].md-input.uk-form-width-mini,\ninput[type=datetime].md-input.uk-form-width-mini,\ninput[type=datetime-local].md-input.uk-form-width-mini,\ninput[type=date].md-input.uk-form-width-mini,\ninput[type=month].md-input.uk-form-width-mini,\ninput[type=time].md-input.uk-form-width-mini,\nselect.md-input.uk-form-width-mini,\ntextarea.md-input.uk-form-width-mini {\n  width: 40px; }\ninput:not([type]).md-input.uk-form-width-small,\ninput[type=week].md-input.uk-form-width-small,\ninput[type=number].md-input.uk-form-width-small,\ninput[type=email].md-input.uk-form-width-small,\ninput[type=url].md-input.uk-form-width-small,\ninput[type=search].md-input.uk-form-width-small,\ninput[type=tel].md-input.uk-form-width-small,\ninput[type=color].md-input.uk-form-width-small,\ninput[type=text].md-input.uk-form-width-small,\ninput[type=password].md-input.uk-form-width-small,\ninput[type=datetime].md-input.uk-form-width-small,\ninput[type=datetime-local].md-input.uk-form-width-small,\ninput[type=date].md-input.uk-form-width-small,\ninput[type=month].md-input.uk-form-width-small,\ninput[type=time].md-input.uk-form-width-small,\nselect.md-input.uk-form-width-small,\ntextarea.md-input.uk-form-width-small {\n  width: 130px; }\ninput:not([type]).md-input.uk-form-width-medium,\ninput[type=week].md-input.uk-form-width-medium,\ninput[type=number].md-input.uk-form-width-medium,\ninput[type=email].md-input.uk-form-width-medium,\ninput[type=url].md-input.uk-form-width-medium,\ninput[type=search].md-input.uk-form-width-medium,\ninput[type=tel].md-input.uk-form-width-medium,\ninput[type=color].md-input.uk-form-width-medium,\ninput[type=text].md-input.uk-form-width-medium,\ninput[type=password].md-input.uk-form-width-medium,\ninput[type=datetime].md-input.uk-form-width-medium,\ninput[type=datetime-local].md-input.uk-form-width-medium,\ninput[type=date].md-input.uk-form-width-medium,\ninput[type=month].md-input.uk-form-width-medium,\ninput[type=time].md-input.uk-form-width-medium,\nselect.md-input.uk-form-width-medium,\ntextarea.md-input.uk-form-width-medium {\n  width: 200px; }\ninput:not([type]).md-input.uk-form-width-large,\ninput[type=week].md-input.uk-form-width-large,\ninput[type=number].md-input.uk-form-width-large,\ninput[type=email].md-input.uk-form-width-large,\ninput[type=url].md-input.uk-form-width-large,\ninput[type=search].md-input.uk-form-width-large,\ninput[type=tel].md-input.uk-form-width-large,\ninput[type=color].md-input.uk-form-width-large,\ninput[type=text].md-input.uk-form-width-large,\ninput[type=password].md-input.uk-form-width-large,\ninput[type=datetime].md-input.uk-form-width-large,\ninput[type=datetime-local].md-input.uk-form-width-large,\ninput[type=date].md-input.uk-form-width-large,\ninput[type=month].md-input.uk-form-width-large,\ninput[type=time].md-input.uk-form-width-large,\nselect.md-input.uk-form-width-large,\ntextarea.md-input.uk-form-width-large {\n  width: 500px; }\nselect.md-input.uk-form-width-mini {\n  width: 65px; }\n.md-input-width-small {\n  min-width: 80px !important; }\n.md-input-width-medium {\n  min-width: 160px !important; }\n.md-input-width-large {\n  min-width: 320px !important; }\ntextarea.md-input {\n  min-height: 80px;\n  resize: none;\n  overflow: hidden;\n  transition: height .2s ease-out;\n  line-height: 24px; }\ntextarea.no_autosize {\n  min-height: inherit;\n  overflow: auto;\n  transition: none;\n  resize: both; }\n.md-basic-wrapper > label {\n  color: #727272;\n  font-size: 12px;\n  pointer-events: none;\n  min-width: 154px;\n  display: inline-block;\n  left: 4px;\n  position: relative; }\n.md-input-wrapper {\n  position: relative;\n  padding-top: 4px;\n  width: 100%;\n  display: block; }\n.md-input-wrapper .md-input-bar {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%; }\n.md-input-wrapper .md-input-bar:after,\n.md-input-wrapper .md-input-bar:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 0;\n  height: 2px;\n  background: #1976d2;\n  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); }\n.md-input-wrapper .md-input-bar:before {\n  left: 50%; }\n.md-input-wrapper .md-input-bar:after {\n  right: 50%; }\n.md-input-wrapper .md-input-bar.uk-form-width-mini {\n  width: 40px; }\n.md-input-wrapper .md-input-bar.uk-form-width-small {\n  width: 130px; }\n.md-input-wrapper .md-input-bar.uk-form-width-medium {\n  width: 200px; }\n.md-input-wrapper .md-input-bar.uk-form-width-large {\n  width: 500px; }\n.md-input-wrapper > label {\n  color: #727272;\n  position: absolute;\n  top: 16px;\n  left: 4px;\n  right: 0;\n  pointer-events: none;\n  transition: all 150ms ease-out; }\n.md-input-wrapper + * {\n  margin-top: 10px; }\n.md-input-wrapper.md-input-wrapper-disabled > label {\n  color: rgba(0, 0, 0, 0.26); }\n.md-input-wrapper-count {\n  padding-bottom: 24px; }\n.md-input-wrapper-count .md-input-bar {\n  bottom: 24px; }\n.md-input-wrapper-count .text-count-wrapper {\n  font-size: 12px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  transition: opacity .2s ease-in; }\n.md-input-wrapper-count > .md-input-wrapper-count .text-count-wrapper {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n.md-input-filled > label,\n.md-input-focus > label {\n  top: -6px;\n  font-size: 12px; }\n.md-input-filled.md-input-wrapper-count .text-count-wrapper,\n.md-input-focus.md-input-wrapper-count .text-count-wrapper {\n  opacity: 1; }\n.md-input-focus .md-input-bar:after,\n.md-input-focus .md-input-bar:before {\n  width: 50%; }\n.md-input-wrapper-danger .md-input-bar:after,\n.md-input-wrapper-danger .md-input-bar:before {\n  background: #e53935; }\n.md-input-wrapper-danger.md-input-wrapper-count .text-count-wrapper {\n  color: #e53935; }\n.md-input-wrapper-success .md-input-bar:after,\n.md-input-wrapper-success .md-input-bar:before {\n  background: #7cb342; }\n.md-input-wrapper-success.md-input-wrapper-count .text-count-wrapper {\n  color: #7cb342; }\n.md-form-group {\n  position: relative; }\nlabel.md-label {\n  color: #999;\n  padding: 0 6px;\n  font-size: 11px; }\n.md-list,\n.md-list > li {\n  padding: 0;\n  list-style: none;\n  margin: 0; }\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url('MaterialIcons-Regular.eot');\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format(\"woff2\"); }\n.component-material-icons {\n  font-family: 'Material Icons';\n  font-weight: 400;\n  font-style: normal;\n  font-size: 18px;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n  vertical-align: -4px;\n  color: rgba(0, 0, 0, 0.54); }\n.material-icons.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n.material-icons.md-24 {\n  font-size: 24px;\n  vertical-align: -8px; }\n.material-icons.md-36 {\n  font-size: 36px;\n  vertical-align: -16px; }\n.material-icons.md-48 {\n  font-size: 48px;\n  vertical-align: -24px; }\n.material-icons.md-light {\n  color: #fff; }\n.material-icons.md-light.md-inactive {\n  color: rgba(255, 255, 255, 0.3); }\n.md-list,\n.md-list *,\n.md-list:after,\n.md-list:before,\n.md-list:after,\n.md-list:before {\n  box-sizing: border-box; }\n.md-list .uk-nestable-list > li,\n.md-list > li {\n  min-height: 48px;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  position: relative; }\n.md-list .uk-nestable-list > li-addon-element,\n.md-list > li-addon-element {\n  padding: 8px 0; }\n.md-list .uk-nestable-list > li > .md-list-content,\n.md-list > li > .md-list-content {\n  overflow: hidden; }\n.md-list .uk-nestable-list > li > .md-list-content > span,\n.md-list > li > .md-list-content > span {\n  display: block; }\n.md-list .uk-nestable-list > li > .md-list-content .md-list-heading,\n.md-list > li > .md-list-content .md-list-heading {\n  margin: 0;\n  font-weight: 500;\n  display: block;\n  overflow: hidden;\n  padding-bottom: 1px; }\n.md-list .uk-nestable-list > li > .md-list-content .md-list-menu,\n.md-list > li > .md-list-content .md-list-menu {\n  float: right; }\n.md-list .uk-nestable-list > li > .md-list-content .md-list-menu .md-list-menu-toggle,\n.md-list > li > .md-list-content .md-list-menu .md-list-menu-toggle {\n  display: block;\n  font-size: 18px;\n  color: rgba(0, 0, 0, 0.8);\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n  border-radius: 14px;\n  text-align: center; }\n.md-list .uk-nestable-list > li > .md-list-content .uk-badge,\n.md-list > li > .md-list-content .uk-badge {\n  float: right;\n  color: #fff !important; }\n.md-list .uk-nestable-list > li > .md-list-content .md-list-action,\n.md-list > li > .md-list-content .md-list-action {\n  float: right;\n  margin-left: 8px;\n  margin-top: 2px;\n  display: none; }\n.md-list .uk-nestable-list > li > .md-list-content .md-list-action-placeholder,\n.md-list > li > .md-list-content .md-list-action-placeholder {\n  float: right;\n  margin-left: 8px;\n  display: none;\n  width: 32px;\n  height: 32px; }\n.md-list .uk-nestable-list > li .md-list-action-dropdown,\n.md-list > li .md-list-action-dropdown {\n  position: absolute;\n  right: 16px;\n  top: 10px;\n  display: none; }\n.md-list .uk-nestable-list > li > a.md-list-content,\n.md-list > li > a.md-list-content {\n  display: block;\n  color: #212121; }\n.md-list .uk-nestable-list > li:last-child,\n.md-list > li:last-child {\n  border-bottom: none; }\n.md-list .uk-nestable-list > li.md-list-item-active,\n.md-list > li.md-list-item-active {\n  color: #1565c0;\n  background: #ededed; }\n.md-list .uk-nestable-list > li.md-list-item-disabled > .md-list-content,\n.md-list > li.md-list-item-disabled > .md-list-content {\n  color: #bdbdbd; }\n.md-list .uk-nestable-list > li.md-list-item-disabled > .md-list-content span,\n.md-list > li.md-list-item-disabled > .md-list-content span {\n  color: #bdbdbd !important; }\n.md-list .uk-nestable-list > li.heading_list,\n.md-list > li.heading_list {\n  min-height: 32px;\n  padding: 32px 8px 16px;\n  border-bottom: none;\n  background: 0 0 !important;\n  text-transform: uppercase; }\n.md-list-bg-no-sep,\n.md-list-separated li {\n  padding: 8px;\n  background: #fff; }\n.md-list .uk-nestable-list > li:hover .md-list-action-dropdown,\n.md-list .uk-nestable-list > li:hover > .md-list-addon-element .uk-nestable-handle,\n.md-list .uk-nestable-list > li:hover > .md-list-content .md-list-action,\n.md-list .uk-nestable-list > li:hover > .md-list-content .md-list-action-placeholder,\n.md-list > li:hover .md-list-action-dropdown,\n.md-list > li:hover > .md-list-addon-element .uk-nestable-handle,\n.md-list > li:hover > .md-list-content .md-list-action,\n.md-list > li:hover > .md-list-content .md-list-action-placeholder,\n.uk-touch .md-list .uk-nestable-list > li .md-list-action-dropdown,\n.uk-touch .md-list .uk-nestable-list > li > .md-list-addon-element .uk-nestable-handle,\n.uk-touch .md-list .uk-nestable-list > li > .md-list-content .md-list-action,\n.uk-touch .md-list .uk-nestable-list > li > .md-list-content .md-list-action-placeholder,\n.uk-touch .md-list > li .md-list-action-dropdown,\n.uk-touch .md-list > li > .md-list-addon-element .uk-nestable-handle,\n.uk-touch .md-list > li > .md-list-content .md-list-action,\n.uk-touch .md-list > li > .md-list-content .md-list-action-placeholder {\n  display: block; }\n.md-list .uk-nestable-list > li {\n  margin-left: 64px; }\n.md-list-addon > li {\n  margin-left: 64px;\n  position: relative; }\n.md-list-addon > li:last-child .md-list-addon-element {\n  border-bottom: none;\n  bottom: 0; }\n.md-list-addon > li:first-child .md-list-addon-element {\n  top: 0; }\n.md-list-addon > li.md-list-item-active .md-list-addon-element,\n.md-list-addon > li.md-list-item-active .md-list-addon-element .material-icons {\n  color: #1565c0; }\n.md-list-addon-element {\n  position: absolute;\n  left: -64px;\n  top: -1px;\n  bottom: -1px;\n  width: 64px;\n  text-align: center;\n  display: block; }\n.md-list-addon-element .element-status {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #bdbdbd;\n  border: 1px solid #fff; }\n.md-list-addon-element .element-status-danger {\n  background: #e53935; }\n.md-list-addon-element .element-status-success {\n  background: #7cb342; }\n.md-list-addon-element .element-status-warning {\n  background: #ffa000; }\n.md-list-addon-element > .md-list-addon-avatar {\n  margin-top: 2px; }\n.md-list-addon-element > .md-list-addon-icon {\n  font-size: 28px;\n  margin-top: 4px;\n  color: #727272; }\n.md-list-addon-element .icheckbox_md,\n.md-list-addon-element .iradio_md,\n.md-list-addon-element > .material-icons {\n  margin-top: 10px; }\n.md-list-addon-element .uk-nestable-handle {\n  position: absolute;\n  left: -2px;\n  top: 12px;\n  display: none; }\n.md-list-bg {\n  background: #fff; }\n.md-list-separated li + li {\n  border-top: none;\n  margin-top: 8px; }\n.md-list-bg-no-sep li > .md-list-content {\n  padding: 0 4px; }\n.md-list-outside > li {\n  padding: 0; }\n.md-list-outside > li > .md-list-content {\n  padding: 8px 16px;\n  display: block;\n  color: #212121; }\n.md-list-outside > li.md-list-item-active,\n.md-list-outside > li:hover:not(.heading_list) {\n  background: rgba(0, 0, 0, 0.085); }\n.md-list-outside > li.heading_list {\n  padding: 32px 16px 16px; }\n.md-list-outside.md-list-addon li {\n  margin-left: 0; }\n.md-list-outside.md-list-addon li .md-list-addon-element {\n  position: relative;\n  top: auto;\n  left: auto;\n  float: left; }\n.md-list .uk-nestable-list,\n.md-list-outside.md-list-addon li .md-list-content {\n  padding-left: 0; }\n.md-list .uk-nestable-list .uk-nestable-item {\n  padding-right: 0; }\n.md-list .uk-nestable-item + .uk-nestable-item {\n  margin-top: 0; }\n.md-list-right.md-list-addon > li {\n  margin-left: 0;\n  margin-right: 64px; }\n.md-list-right.md-list-addon > li .md-list-addon-element {\n  left: auto;\n  right: -64px; }\n.uk-touch .md-list-action-dropdown,\n.uk-touch .md-list-addon-element .uk-nestable-handle,\n.uk-touch .md-list-content .md-list-action,\n.uk-touch .md-list-content .md-list-action-placeholder {\n  display: block !important; }\n.md-panel-full {\n  position: relative;\n  overflow: hidden;\n  min-height: 100%; }\n.md-panel-full,\n.md-panel-full *,\n.md-panel-full:after,\n.md-panel-full:before,\n.md-panel-full:after,\n.md-panel-full:before {\n  box-sizing: border-box; }\n.md-panel-full > .uk-grid,\n.md-panel-full > .uk-grid [class*=uk-width] {\n  height: 100%; }\n.md-panel-full .md-panel-full-aside {\n  margin: 16px 16px 32px;\n  padding: 16px; }\n.md-panel-full .md-panel-full-aside.md-panel-full-aside-bg {\n  background: #fff; }\n.md-panel-full .md-panel-full-content {\n  background: #fff;\n  padding: 25px 25px 90px;\n  width: inherit;\n  min-width: 100%;\n  min-height: 100%; }\n.md-panel-full .md-panel-full-content > .md-panel-full-content-inner {\n  position: relative;\n  z-index: 10; }\n.md-panel-full .md-panel-full-content:before {\n  width: inherit;\n  content: '';\n  position: absolute;\n  background: #fff;\n  display: block;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.26);\n  z-index: 5; }\n.md-icon-btn,\n.md-top-bar .md-top-bar-checkbox,\n.md-top-bar .md-top-bar-icons,\n.md-user-letters {\n  display: inline-block; }\n.md-panel-full .md-panel-full-content .md-panel-full-content-header {\n  margin-bottom: 24px; }\n.md-panel-full .md-panel-full-content .md-panel-full-content-header .md-panel-full-content-menu {\n  float: right; }\n.md-card-content.multiple-contents:not(:last-child) {\n  border-bottom: 1px solid #f6f6f6; }\n.md-top-bar .md-top-bar-checkbox {\n  padding-top: 10px; }\n.md-top-bar .md-top-bar-icons {\n  margin-top: 5px; }\n.md-top-bar .md-btn-group {\n  margin-top: 4px; }\n.md-top-bar .md-top-bar-actions-left {\n  float: left;\n  padding-left: 16px; }\n.md-top-bar .md-top-bar-actions-left .md-btn-group {\n  margin-left: 8px; }\n.md-top-bar .md-top-bar-actions-right {\n  float: right;\n  padding-right: 16px; }\n.md-top-bar .md-top-bar-actions-right .md-btn-group {\n  margin-right: 8px; }\n.md-top-bar .md-btn-small {\n  padding: 2px 12px; }\n.md-user-image {\n  width: 34px;\n  border-radius: 50%; }\n.md-user-image-large {\n  width: 82px;\n  border-radius: 50%; }\n.md-user-letters,\n.md-user-placeholder {\n  width: 34px;\n  height: 34px;\n  background-color: rgba(0, 0, 0, 0.085);\n  border-radius: 50%; }\n.md-user-letters {\n  line-height: 35px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 500; }\n.md-icon {\n  font-size: 24px;\n  line-height: 32px !important;\n  height: 32px !important;\n  color: #727272;\n  border-radius: 50%;\n  transition: background 280ms ease-out, color 280ms ease-out;\n  width: 32px !important;\n  text-align: center;\n  -webkit-tap-highlight-color: transparent; }\n.md-icon.active,\n.md-icon:active,\n.md-icon:focus,\n.md-icon:hover {\n  color: #212121;\n  background: rgba(0, 0, 0, 0.08); }\n.md-icon.disabled {\n  opacity: .3;\n  cursor: default;\n  background: 0 0 !important; }\n.md-icon-light {\n  color: #fff; }\n.md-icon-light:active,\n.md-icon-light:focus,\n.md-icon-light:hover {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.2); }\n.md-icon-dark {\n  color: #212121; }\n.md-icon-dark:active,\n.md-icon-dark:focus,\n.md-icon-dark:hover {\n  color: #212121;\n  background: rgba(255, 255, 255, 0.6); }\n.md-icon + .md-icon {\n  margin-left: 4px; }\n.md-list-inputs,\n.md-list-inputs > li {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n.md-icon-btn.active .md-icon {\n  color: #212121;\n  background: rgba(0, 0, 0, 0.08); }\nbutton.md-icon {\n  background: 0 0;\n  border: none;\n  outline: 0; }\n.uk-open .md-icon {\n  color: #212121;\n  background: rgba(0, 0, 0, 0.08); }\n.uk-open .md-icon-light {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.2); }\n.uk-open .md-icon-dark {\n  color: #212121;\n  background: rgba(255, 255, 255, 0.6); }\n.md-list-inputs li + li {\n  margin-top: 8px; }\n.md-list-inputs li .icheckbox_md {\n  float: left; }\n.md-list-inputs li label {\n  overflow: hidden;\n  padding-left: 8px;\n  display: block;\n  cursor: pointer; }\n.md-hr {\n  margin: 32px 0;\n  height: 0;\n  border-top: 2px solid rgba(0, 0, 0, 0.12); }\n@-webkit-keyframes hierarchical_show {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.2, 0.2, 2);\n            transform: scale3d(0.2, 0.2, 2); }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n@keyframes hierarchical_show {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.2, 0.2, 2);\n            transform: scale3d(0.2, 0.2, 2); }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n.hierarchical_show > * {\n  visibility: hidden; }\n.hierarchical_show_inView > * {\n  -webkit-animation-name: hierarchical_show;\n          animation-name: hierarchical_show;\n  visibility: visible; }\n@-webkit-keyframes hierarchical_slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 160%, 0);\n            transform: translate3d(0, 160%, 0); }\n  33% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes hierarchical_slide {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 160%, 0);\n            transform: translate3d(0, 160%, 0); }\n  33% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n.hierarchical_slide > * {\n  visibility: hidden; }\n.hierarchical_slide_inView > * {\n  -webkit-animation-name: hierarchical_slide;\n          animation-name: hierarchical_slide;\n  visibility: visible; }\n.fast_animation {\n  -webkit-animation-duration: 350ms;\n          animation-duration: 350ms; }\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: .8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80); }\ntooltip._bottom tip tip-arrow,\ntooltip._top tip tip-arrow {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  left: 50%;\n  margin-left: -6px; }\n.gu-hide {\n  display: none !important; }\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n.gu-transit {\n  opacity: .2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\n@-webkit-keyframes animate-tooltip {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: .5; }\n  60% {\n    opacity: .8; }\n  70% {\n    opacity: .9; }\n  90% {\n    opacity: 1; } }\n@keyframes animate-tooltip {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: .5; }\n  60% {\n    opacity: .8; }\n  70% {\n    opacity: .9; }\n  90% {\n    opacity: 1; } }\n._exradicated-tooltip {\n  display: block;\n  opacity: 1;\n  position: absolute;\n  z-index: 999; }\ntooltip {\n  display: inline-block;\n  position: relative; }\ntooltip._multiline {\n  display: block; }\ntooltip._slow._ready tip {\n  -webkit-animation: animate-tooltip .65s;\n          animation: animate-tooltip .65s; }\ntooltip._fast._ready tip {\n  -webkit-animation: animate-tooltip .15s;\n          animation: animate-tooltip .15s; }\ntooltip._steady._ready tip {\n  -webkit-animation: animate-tooltip .35s;\n          animation: animate-tooltip .35s; }\ntooltip tip {\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.85);\n  color: #fff;\n  display: none;\n  line-height: normal;\n  max-width: 500px;\n  min-width: 100px;\n  opacity: 0;\n  padding: 8px 16px;\n  position: absolute;\n  text-align: center;\n  width: auto;\n  will-change: top, left, bottom, right; }\ntooltip tip._hidden {\n  display: block;\n  visibility: hidden; }\ntooltip.active:not(._force-hidden) tip {\n  display: block;\n  opacity: 1;\n  z-index: 999; }\ntooltip tip-tip {\n  font-size: .95em; }\ntooltip tip-tip._large {\n  font-size: 1.1em; }\ntooltip tip-tip._small {\n  font-size: .8em; }\ntooltip._top tip {\n  left: 50%;\n  top: -9px;\n  -webkit-transform: translateX(-50%) translateY(-100%);\n  transform: translateX(-50%) translateY(-100%); }\ntooltip._top tip tip-arrow {\n  border-top: 6px solid rgba(0, 0, 0, 0.85);\n  content: '';\n  height: 0;\n  position: absolute;\n  top: 100%;\n  width: 0; }\ntooltip._bottom tip {\n  right: 50%;\n  top: 100%;\n  -webkit-transform: translateX(50%) translateY(9px);\n  transform: translateX(50%) translateY(9px); }\ntooltip._bottom tip tip-arrow {\n  border-bottom: 6px solid rgba(0, 0, 0, 0.85);\n  bottom: 100%;\n  content: '';\n  height: 0;\n  position: absolute;\n  width: 0; }\ntooltip._left tip tip-arrow,\ntooltip._right tip tip-arrow {\n  border-bottom: 6px solid transparent;\n  border-top: 6px solid transparent;\n  content: '';\n  height: 0;\n  margin-top: -6px;\n  position: absolute;\n  top: 50%;\n  width: 0; }\ntooltip._right tip {\n  left: 100%;\n  top: 50%;\n  -webkit-transform: translateX(9px) translateY(-50%);\n  transform: translateX(9px) translateY(-50%); }\ntooltip._right tip tip-arrow {\n  border-right: 6px solid rgba(0, 0, 0, 0.85);\n  right: 100%; }\ntooltip._left tip {\n  left: -9px;\n  top: 50%;\n  -webkit-transform: translateX(-100%) translateY(-50%);\n  transform: translateX(-100%) translateY(-50%); }\ntooltip._left tip tip-arrow {\n  border-left: 6px solid rgba(0, 0, 0, 0.85);\n  left: 100%; }\ntip-tip #close-button {\n  cursor: pointer;\n  float: right;\n  left: 8%;\n  margin-top: -7%;\n  padding: 3px;\n  position: relative; }\n.alertify-logs > * {\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 1px; }\n.alertify-logs > *,\n.alertify-logs > .default {\n  background: rgba(0, 0, 0, 0.8); }\n.alertify-logs > .error {\n  background: rgba(244, 67, 54, 0.8); }\n.alertify-logs > .success {\n  background: rgba(76, 175, 80, 0.9); }\n.alertify {\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.3);\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1; }\n.alertify.hide {\n  opacity: 0;\n  pointer-events: none; }\n.alertify,\n.alertify.show {\n  box-sizing: border-box;\n  transition: all 0.33s cubic-bezier(0.25, 0.8, 0.25, 1); }\n.alertify,\n.alertify * {\n  box-sizing: border-box; }\n.alertify .dialog {\n  padding: 12px; }\n.alertify .alert,\n.alertify .dialog {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n.alertify .alert > *,\n.alertify .dialog > * {\n  width: 400px;\n  max-width: 95%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 12px;\n  background: #fff;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.098), 0 1px 10px 0 rgba(0, 0, 0, 0.084); }\n.alertify .alert .msg,\n.alertify .dialog .msg {\n  padding: 12px;\n  margin: 0;\n  text-align: left; }\n.alertify .alert input:not(.form-control),\n.alertify .dialog input:not(.form-control) {\n  margin-bottom: 15px;\n  width: 100%;\n  font-size: 100%;\n  padding: 12px; }\n.alertify .alert input:not(.form-control):focus,\n.alertify .dialog input:not(.form-control):focus {\n  outline-offset: -2px; }\n.alertify .alert nav,\n.alertify .dialog nav {\n  text-align: right; }\n.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),\n.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button) {\n  background: 0 0;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.87);\n  position: relative;\n  outline: 0;\n  display: inline-block;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  padding: 0 6px;\n  margin: 6px 8px;\n  line-height: 36px;\n  min-height: 36px;\n  white-space: nowrap;\n  min-width: 88px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 2px; }\n.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,\n.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,\n.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,\n.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,\n.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus {\n  border: 1px solid rgba(0, 0, 0, 0.1); }\n.alertify .alert nav button.btn,\n.alertify .dialog nav button.btn {\n  margin: 6px 4px; }\n.alertify-logs {\n  position: fixed;\n  z-index: 1; }\n.alertify-logs.bottom,\n.alertify-logs:not(.top) {\n  bottom: 16px; }\n.alertify-logs.left,\n.alertify-logs:not(.right) {\n  left: 16px; }\n.alertify-logs.left > *,\n.alertify-logs:not(.right) > * {\n  float: left;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  height: auto; }\n.alertify-logs.left > .show,\n.alertify-logs:not(.right) > .show {\n  left: 0; }\n.alertify-logs.left > *,\n.alertify-logs.left > .hide,\n.alertify-logs:not(.right) > *,\n.alertify-logs:not(.right) > .hide {\n  left: -110%; }\n.alertify-logs.right {\n  right: 16px; }\n.alertify-logs.right > * {\n  float: right;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); }\n.alertify-logs.right > .show {\n  right: 0;\n  opacity: 1; }\n.alertify-logs.right > *,\n.alertify-logs.right > .hide {\n  right: -110%;\n  opacity: 0; }\n.alertify-logs.top {\n  top: 0; }\n.alertify-logs > * {\n  box-sizing: border-box;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000;\n          perspective: 1000;\n  max-height: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none; }\n.alertify-logs > .show {\n  margin-top: 12px;\n  opacity: 1;\n  max-height: 1000px;\n  padding: 12px;\n  pointer-events: auto; }\n.transition-all {\n  transition: all .2s ease-in-out; }\n#email-builder {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  position: relative; }\n#email-builder .email-builder-header,\n#email-builder > .email-builder-preview-actions {\n  position: absolute;\n  -webkit-transition: all .2s ease-in-out;\n  -moz-transition: all .2s ease-in-out;\n  -o-transition: all .2s ease-in-out;\n  display: flex;\n  padding: 1rem;\n  left: 225px;\n  /*right: 0*/ }\n#email-builder > .email-builder-preview-actions {\n  justify-content: center;\n  align-items: center;\n  top: -167px;\n  z-index: 3;\n  background-color: #fff;\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%);\n  transition: all .2s ease-in-out;\n  transition-delay: .2s; }\n#email-builder > .email-builder-preview-actions.preview {\n  margin-top: 115px;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n#email-builder .email-builder-header {\n  justify-content: space-between;\n  align-items: center;\n  z-index: 2;\n  top: 0;\n  transition: all .2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n#email-builder .email-builder-header.preview {\n  margin-top: -167px;\n  -webkit-transform: translateY(-100%);\n  transform: translateY(-100%);\n  box-shadow: none !important; }\n#email-builder .email-builder-header h2 {\n  margin: 0; }\n#email-builder .email-builder-header h2 + .md-btn-group,\n#email-builder .email-builder-header-actions .md-btn-group + .md-btn-group {\n  margin-left: 15px; }\n#email-builder .email-builder-header-actions {\n  display: flex;\n  justify-content: center; }\n#email-builder .email-builder-content {\n  margin-top: 67px;\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  justify-content: center; }\n#email-builder .email-builder-content > * {\n  flex: 1;\n  max-height: 100%; }\n#email-builder .email-builder-content > :first-child {\n  padding: 1rem;\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  transition: all .2s ease-in-out; }\n#email-builder .email-builder-content > :first-child.preview {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%); }\n#email-builder .email-builder-content > :first-child .elements-list .md-list-content li {\n  padding: 0; }\n#email-builder .email-builder-content > :last-child {\n  z-index: 5;\n  padding: 1rem;\n  width: 500px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  /*position: absolute;*/\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: all .2s ease-in-out; }\n#email-builder .email-builder-content > :last-child.empty {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%); }\n#email-builder .email-builder-content > :last-child p {\n  color: rgba(0, 0, 0, 0.54);\n  line-height: 20px; }\n#email-builder .email-builder-content > :last-child textarea {\n  width: 100%;\n  resize: none; }\n#email-builder .email-builder-content > :last-child .md-btn-group {\n  display: table;\n  margin: 0 auto;\n  padding: 15px; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field {\n  margin: 20px 0;\n  padding: 5px 0; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field label.md-label {\n  padding: 0;\n  font-size: 14px;\n  color: #525151; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field:first-child {\n  margin: 0 0 20px; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs) {\n  display: flex;\n  justify-content: center; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs).textarea {\n  flex-direction: column; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs).textarea > label {\n  margin-bottom: 10px; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs) input:not([type=color]):not([type=checkbox]),\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs) textarea {\n  width: 100%; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs) .md-input-wrapper button.upload-icon {\n  position: absolute;\n  right: 0;\n  top: 12px;\n  line-height: 0 !important; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .form-row:not(.padding-inputs):not(.color-inputs) .md-input-wrapper button.upload-icon input[type=file] {\n  width: 34px;\n  height: 31px;\n  opacity: 0;\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  top: 0;\n  right: 0; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .padding-inputs {\n  display: flex; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .padding-inputs > .md-input-wrapper + * {\n  margin: 0; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .color-inputs {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .checkbox-inputs {\n  justify-content: flex-start !important;\n  padding: 2px;\n  align-items: center; }\n#email-builder .email-builder-content > :last-child .email-builder-element-edit-field .checkbox-inputs input[type=checkbox] {\n  margin-right: 5px; }\n#email-builder .email-builder-content .elements-list ul li {\n  cursor: move; }\n#email-builder .email-builder-content .elements-list ul li .md-list-addon-element {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n#email-builder .email-builder-content .elements-list ul li .md-list-addon-element i {\n  font-size: 35px;\n  margin: 0; }\n#email-builder .email-builder-content [position-relative] {\n  position: relative;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 0;\n  margin-left: 96px;\n  transition: all .2s ease-in-out;\n  display: contents; }\n#email-builder .email-builder-content [position-relative].preview {\n  margin-left: 0; }\n#email-builder .email-builder-content [position-relative].preview > .builder > .email-container > .builder-element {\n  cursor: default !important; }\n#email-builder .email-builder-content [position-relative].preview > .builder > .email-container > .builder-element > i.actions {\n  display: none !important; }\n#email-builder .email-builder-content [position-relative].configured {\n  /*margin-right: 432px*/ }\n@media (max-width: 1366px) {\n  #email-builder .email-builder-content > :last-child {\n    max-width: 350px; }\n  #email-builder .email-builder-content [position-relative].configured {\n    margin-right: 382px; } }\n#email-builder .email-builder-content [position-relative] .builder a,\n#email-builder .email-builder-content [position-relative] .builder button {\n  pointer-events: none; }\n#email-builder .email-builder-content [position-relative] .builder .email-container {\n  width: 640px;\n  margin: 0 auto;\n  position: relative;\n  border: 1px dashed #cccccc; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element {\n  position: relative;\n  transition: box-shadow, -webkit-transform .1s ease-in-out;\n  transition: box-shadow, transform .1s ease-in-out;\n  transition: box-shadow, transform .1s ease-in-out, -webkit-transform .1s ease-in-out; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > i.actions {\n  position: absolute;\n  opacity: 0;\n  margin: 1px;\n  transition: all .2s ease-in-out; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > i.actions.delete {\n  top: 0;\n  right: 0; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > i.actions.clone {\n  top: 0; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element > i.actions.move {\n  top: 0;\n  left: 40px; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element:hover:not(.selected) {\n  cursor: pointer; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element.selected {\n  box-shadow: 0 0 10px #ccc;\n  z-index: 1; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element:hover > i.actions {\n  opacity: 1; }\n#email-builder .email-builder-content [position-relative] .builder .email-container .builder-element + .builder-element.selected {\n  -webkit-transform: translateY(-5px);\n  transform: translateY(-5px);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n#email-builder .email-builder-content [position-relative] .builder .empty {\n  min-height: 500px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n@media (max-width: 1366px) {\n  #email-builder .email-builder-content [position-relative] .builder .empty {\n    min-height: 400px; } }\n#email-builder .email-builder-content [position-relative] .builder .empty:after {\n  content: attr(data-empty-template); }\n#email-builder .email-builder-content .md-card .md-card-content {\n  padding: 0; }\n.gu-mirror > i.actions {\n  display: none; }\n.icon-spin {\n  -webkit-animation-name: spin;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  -moz-animation-name: spin;\n  -moz-animation-duration: 2s;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-timing-function: linear;\n  animation-name: spin;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear; }\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\nhtml {\n  width: 100%; }\nbody {\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: antialiased;\n  mso-margin-top-alt: 0px;\n  mso-margin-bottom-alt: 0px;\n  mso-padding-alt: 0px 0px 0px 0px; }\np,\nh1,\nh2,\nh3,\nh4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0; }\ntable {\n  font-size: 14px;\n  border-collapse: collapse;\n  mso-table-lspace: 0pt;\n  mso-table-rspace: 0pt;\n  border: 0px; }\nspan.preheader {\n  display: none;\n  font-size: 1px;\n  visibility: hidden;\n  opacity: 0;\n  color: transparent;\n  height: 0;\n  width: 0; }\n@media only screen and (max-width: 600px) {\n  body {\n    min-width: 100% !important; }\n  .container {\n    width: 450px !important;\n    min-width: 450px !important; }\n  .container_2 {\n    width: 450px !important;\n    min-width: 450px !important; }\n  .container_3 {\n    height: 180px !important; }\n  .center {\n    margin: 0 auto 0 auto !important;\n    padding-top: 20px; }\n  .center_menu {\n    margin: 0 auto 0 auto !important;\n    text-align: center !important; }\n  .container_wrap {\n    display: inline-block !important;\n    width: 450px !important;\n    height: auto !important; }\n  .container_wrap_2 {\n    display: block !important;\n    width: 450px !important;\n    text-align: center !important;\n    height: auto !important; }\n  .container_wrap_margin {\n    display: block !important;\n    width: 100% !important;\n    height: 10px !important; }\n  .text {\n    width: 380px !important;\n    text-align: center !important; }\n  .title {\n    width: 450px !important;\n    text-align: center !important; }\n  .title_2 {\n    width: 450px !important;\n    border: none !important;\n    text-align: center !important;\n    padding-left: none !important; }\n  .image_container_main a img {\n    width: 450px !important;\n    height: auto !important; }\n  .image_container {\n    width: 100% !important;\n    height: auto !important; }\n  .disable {\n    display: none !important; }\n  .enable {\n    display: inline !important; }\n  .bgnd {\n    background-size: cover !important; }\n  .padding_top {\n    padding-top: 20px; }\n  .padding_bottom {\n    padding-bottom: 20px; }\n  .height {\n    height: 400px !important; } }\n@media only screen and (max-width: 481px) {\n  body {\n    min-width: 100% !important; }\n  .container {\n    width: 300px !important;\n    min-width: 300px !important; }\n  .container_2 {\n    width: 300px !important;\n    min-width: 300px !important; }\n  .container_3 {\n    height: 180px !important; }\n  .center {\n    margin: 0 auto 0 auto !important; }\n  .center_menu {\n    margin: 0 auto 0 auto !important; }\n  .container_wrap {\n    display: inline-block !important;\n    width: 300px !important;\n    height: auto !important;\n    border-radius: 0 !important; }\n  .container_wrap_2 {\n    display: block !important;\n    width: 300px !important;\n    height: auto !important; }\n  .container_wrap_margin {\n    display: block !important;\n    width: 100% !important;\n    height: 10px !important; }\n  .text {\n    width: 270px !important;\n    text-align: center !important; }\n  .title {\n    text-align: center !important;\n    width: 300px !important; }\n  .title_2 {\n    width: 450px !important;\n    border: none !important;\n    text-align: center !important;\n    padding-left: none !important; }\n  .image_container_main a img {\n    width: 300px !important;\n    height: auto !important; }\n  .image_container {\n    width: 100% !important;\n    height: auto !important; }\n  .disable {\n    display: none !important; }\n  .enable {\n    display: inline !important; }\n  .bgnd {\n    background-size: cover !important; }\n  .padding_top {\n    padding-top: 20px; }\n  .padding_bottom {\n    padding-bottom: 20px; }\n  .height {\n    height: 300px !important; } }\n"

/***/ }),

/***/ "./src/app/changelog/changelog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/changelog/changelog.component.ts ***!
  \**************************************************/
/*! exports provided: ChangeLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogComponent", function() { return ChangeLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _changelog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog.service */ "./src/app/changelog/changelog.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { DragulaService } from 'ng2-dragula/ng2-dragula';

// import {MatDialog} from '@angular/material';
var ChangeLogComponent = /** @class */ (function () {
    function ChangeLogComponent(dragulaService, utils, sanitizer) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.utils = utils;
        this.sanitizer = sanitizer;
        /**
         *  declare the varriables
         * */
        // utils:ChangeLogService, private dragulaService:DragulaService
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        // public Editor = Editor;
        this.editorConfig = {
        // extraPlugins: 'font',
        // fontSize_sizes:'8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px',
        // toolbar: [
        //     { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
        //     [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
        // ]
        };
        this.user = {
            email: '',
        };
        // currentElement: string;
        this.Email = {
            name: 'New Email',
            elements: [],
            html: '',
            emailSettings: {
                options: {
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    backgroundColor: "#cccccc"
                },
                type: 'emailSettings'
            }
        };
        this.people = ['one_people', 'two_people'];
        this.items = ['one_item', 'two_item'];
        this.side_elements = [
            {
                type: 'title',
                icon: 'title',
                primary_head: 'New Title',
                second_head: 'assets/title.PNG'
            },
            {
                type: 'divider',
                icon: '&#xE8E9;',
                primary_head: 'Devider',
                second_head: 'assets/devider.PNG'
            },
            {
                type: 'text',
                icon: '&#xE8EE;',
                primary_head: 'Text',
                second_head: 'assets/text.PNG'
            },
            {
                type: 'image',
                icon: '&#xE40B;',
                primary_head: 'Image',
                second_head: 'assets/image.PNG'
            },
            {
                type: 'button',
                icon: 'radio_button_checked',
                primary_head: 'Button',
                second_head: 'assets/button.PNG'
            },
            {
                type: 'imageTextInside',
                icon: '&#xE850;',
                primary_head: 'Image Inside Text',
                second_head: 'assets/imageinsidetext.PNG'
            },
            {
                type: 'imageTextRight',
                icon: 'burst_mode',
                primary_head: 'Image placed right to text',
                second_head: 'assets/lefttext.PNG'
            },
            {
                type: 'imageTextLeft',
                icon: '&#xE060',
                primary_head: 'Image placed left to text',
                second_head: 'assets/righttext.PNG'
            },
            {
                type: 'imageText2x2',
                icon: 'pause',
                primary_head: '2 columns with 2 Images and Text',
                second_head: 'assets/2images.PNG'
            },
            {
                type: 'imageText3x2',
                icon: '&#xE8EC;',
                primary_head: '3 columns with 3 Images and Text',
                second_head: 'assets/3images.PNG'
            },
            {
                type: 'unsubscribe',
                icon: '&#xE157;',
                primary_head: 'Link with Label',
                second_head: 'assets/link.PNG'
            }
        ];
        this.display_elements = [
            {
                type: 'title',
                icon: 'title',
                primary_head: 'New Title',
                second_head: 'assets/title.PNG'
            },
            {
                type: 'divider',
                icon: '&#xE8E9;',
                primary_head: 'Devider',
                second_head: 'assets/devider.PNG'
            },
            {
                type: 'text',
                icon: '&#xE8EE;',
                primary_head: 'Text',
                second_head: 'assets/text.PNG'
            },
            {
                type: 'image',
                icon: '&#xE40B;',
                primary_head: 'Image',
                second_head: 'assets/image.PNG'
            },
            {
                type: 'button',
                icon: 'radio_button_checked',
                primary_head: 'Button',
                second_head: 'assets/button.PNG'
            },
            {
                type: 'imageTextInside',
                icon: '&#xE850;',
                primary_head: 'Image Inside Text',
                second_head: 'assets/imageinsidetext.PNG'
            },
            {
                type: 'imageTextLeft',
                icon: 'burst_mode',
                primary_head: 'Image placed right to text',
                second_head: 'assets/lefttext.PNG'
            },
            {
                type: 'imageTextRight',
                icon: '&#xE060',
                primary_head: 'Image placed left to text',
                second_head: 'assets/righttext.PNG'
            },
            {
                type: 'imageText2x2',
                icon: 'pause',
                primary_head: '2 columns with 2 Images and Text',
                second_head: 'assets/2images.PNG'
            },
            {
                type: 'imageText3x2',
                icon: '&#xE8EC;',
                primary_head: '3 columns with 3 Images and Text',
                second_head: 'assets/3images.PNG'
            },
            {
                type: 'unsubscribe',
                icon: '&#xE157;',
                primary_head: 'Link with Label',
                second_head: 'assets/link.PNG'
            }
        ];
        this.tinymceOptions = {
            inline: false,
            skin: 'lightgray',
            theme: 'modern',
            plugins: ['advlist autolink lists link image charmap', 'searchreplace visualblocks code', 'insertdatetime media table contextmenu paste', 'textcolor'],
            toolbar: 'undo redo | styleselect mailchimpMergeTags | bold italic fontsizeselect forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 24pt 36pt'
        };
        this.options = {
            type: 'ltr',
            primary_head: 'primay_head',
            second_head: 'second_head'
        };
        this.Email_elements = [
            {
                id: 'id1550170455924RAND14806',
                type: 'title',
                options: {
                    align: 'center',
                    title: 'New Title',
                    subTitle: 'New Title',
                    padding: ['5px', '20px', '5px', '20px'],
                    backgroundColor: '#fff',
                    color: '#444444'
                }
            },
            {
                id: 'id1550170455924RAND14807',
                type: 'divider',
                options: {
                    padding: ['15px', '20px', '0px', '20px'],
                    backgroundColor: '#ffffff'
                }
            },
            {
                id: 'id1550170455924RAND14808',
                type: 'text',
                options: {
                    padding: ['10px', '20px', '10px', '20px'],
                    backgroundColor: '#ffffff',
                    text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                }
            },
            {
                id: 'id1550170455924RAND14109',
                type: 'button',
                options: {
                    align: 'center',
                    padding: ['15px', '20px', '15px', '20px'],
                    buttonText: 'New Button',
                    url: '#',
                    buttonBackgroundColor: '#3498DB',
                    backgroundColor: '#ffffff'
                }
            },
            {
                id: 'id1550170455924RAND14101',
                type: 'image',
                options: {
                    align: 'center',
                    padding: ['15px', '20px', '15px', '20px'],
                    width: '285',
                    image: 'assets/350x150.jpg',
                    backgroundColor: '#ffffff',
                }
            }
        ];
        this.defaultOptions = {
            'title': {
                type: 'title',
                options: {
                    align: 'center',
                    title: 'New Title',
                    subTitle: 'New Title',
                    // padding: ['15px', '20px', '5px', '20px'],
                    padding: '15px,20px,5px,20px',
                    backgroundColor: '#fff',
                    color: '#444444'
                }
            },
            'divider': {
                type: 'divider',
                options: {
                    // padding: ['15px', '20px', '0px', '20px'],
                    padding: '15px,20px,0px,20px',
                    backgroundColor: '#ffffff'
                }
            },
            'text': {
                type: 'text',
                options: {
                    // padding: ['10px', '20px', '10px', '20px'],
                    padding: '10px,20px,10px,20px',
                    backgroundColor: '#ffffff',
                    text: '<p style="margin:0 0 10px 0;line-height:22px;font-size:13px;" data-block-id="text-area">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                }
            },
            'button': {
                type: 'button',
                options: {
                    align: 'center',
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    buttonText: 'New Button',
                    url: '#',
                    buttonBackgroundColor: '#3498DB',
                    backgroundColor: '#ffffff'
                }
            },
            'image': {
                type: 'image',
                options: {
                    align: 'center',
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    width: '285',
                    image: 'assets/350x150.jpg',
                    backgroundColor: '#ffffff',
                }
            },
            'imageTextInside': {
                type: 'imageTextInside',
                options: {
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    image: 'assets/370x160.jpg',
                    width: '285',
                    backgroundColor: '#ffffff',
                    text: '<p style="line-height: 22px;font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>'
                }
            },
            'imageTextRight': {
                type: 'imageTextRight',
                options: {
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    image: 'assets/340x145.jpg',
                    width: '285',
                    backgroundColor: '#ffffff',
                    text: '<table align="right" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                }
            },
            'imageTextLeft': {
                type: 'imageTextLeft',
                options: {
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    image: 'assets/340x145.jpg',
                    width: '320',
                    backgroundColor: '#ffffff',
                    text: '<table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <th align="right" width="280" class="container_wrap"> <table align="right" class="container" width="280" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td height="20" width="20" style="font-size: 1px; line-height: 20px; height:15px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Raleway\', sans-serif; font-weight:700; font-size:24px; line-height:20px; color:#414141; text-align:left;padding:{{element.options.padding | arrToPadding}}" data-size="s4_title_size" data-min="12" data-max="36" data-color="s4_title_color" mc:edit="s4_title_1" >What We Are </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" align="left" style="font-family: \'Open Sans\', sans-serif; font-weight:400; font-size:14px; line-height:24px; color:#696969; text-align:left;" data-size="s4_text_size" data-min="12" data-max="36" data-color="s4_text_color" mc:edit="s4_text_1">Sed ut perspiciatis unde omnis iste natt&shy;usistis error sit voluptatem accusantium doloremque laudantium, totam rem. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table>'
                }
            },
            'imageText2x2': {
                type: 'imageText2x2',
                options: {
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    image1: 'assets/255x154.jpg',
                    image2: 'assets/255x154.jpg',
                    width1: '255',
                    width2: '255',
                    backgroundColor: '#ffffff',
                    text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                    text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>'
                }
            },
            'imageText3x2': {
                type: 'imageText3x2',
                options: {
                    // padding: ['15px', '20px', '15px', '20px'],
                    padding: '15px,20px,15px,20px',
                    image1: 'assets/154x160.jpg',
                    image2: 'assets/154x160.jpg',
                    image3: 'assets/154x160.jpg',
                    width1: '154',
                    width2: '154',
                    width3: '154',
                    backgroundColor: '#ffffff',
                    text1: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt1">Creative </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t1">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                    text2: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt2">Layared Psd </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t2">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table>',
                    text3: '<table width="180" align="center" cellpadding="0" cellspacing="0" border="0" class="text" style="border-collapse:collapse; border:0;"> <tbody> <tr> <td class="title" style="color: #414141; font-family: \'Raleway\', Open Sans, sans-serif; font-weight:600; font-size: 18px; text-align:center" data-size="s3_title_size" data-min="12" data-max="36" data-color="s3_title_color" mc:edit="s3_tt3">Easy To Use </td></tr><tr> <td height="10" width="1" style="font-size: 1px; line-height: 10px; height:10px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td class="text" style="color: #696969; font-family: \'Raleway\', sans-serif; font-weight:400; font-size: 14px; line-height:21px; text-align: center;" data-size="s3_text_size" data-min="12" data-max="36" data-color="s3_text_color" mc:edit="s3_t3">Lorem ipsum dolor sit amet, consecteturis adipi&shy;scing elit sed do eius. </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> '
                }
            },
            'unsubscribe': {
                type: 'unsubscribe',
                options: {
                    // padding: ['10px', '20px', '10px', '50px'],
                    padding: '10px,20px,10px,50px',
                    backgroundColor: '#eeeeee',
                    text: '<p style="text-align: center; margin: 0px 0px 10px 0px; line-height: 22px; font-size: 13px;" data-block-id="text-area"><span style="font-size: 8pt; color: #333333;">' + '_unsub_placeholder_default_text_' + '<span style="color: #0000ff;"> <a style="color: #0000ff;" href="*|UNSUB|*">' + '_unsub_placeholder_click_text' + '</a></span>.</span></p>'
                }
            }
        };
        this.DevHtmlTemplate = {
            'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            // 'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: '+ element.options.backgroundColor+'" data-type="title">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" class="title" style="padding:' + element.options.padding + '; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: ' + element.options.color + '; line-height: 42px; font-size: 36px;" data-block-id="main-title">' + element.options.title + '</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: ' + element.options.color + '; line-height: 22px; font-size: 16px;" data-block-id="sub-title">'+ element.options.subTitle + '</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'buttonTemplate': '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'textTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'unsubscribeTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'dividerTemplate': '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'imageTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>',
            'imageTextInsideTemplate': '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>',
            //{'imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            'imageTextRightTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            'imageTextLeftTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            'imageText2x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
            // {'imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            'imageText3x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>',
        };
        this.currentElement = {};
        dragulaService.createGroup('element-html', {
            copy: false,
            copySortSource: false,
            moves: function (el, source, handle, sibling) {
                // console.log('move', this.Email.elements);
                return $(handle).hasClass('move');
            },
            invalid: function (el, handle) {
                return false; // don't prevent any drags from initiating by default
            }
        });
        dragulaService.createGroup('element', {
            isContainer: function (el) {
                // console.log('iscontainer', el.classList.contains('email-container'));
                return el.classList.contains('email-container');
            },
            copy: true,
            copySortSource: false,
            removeOnSpill: true,
            moves: function (el, source, handle, sibling) {
                // console.log('move', !$(source).hasClass('email-container'));
                return !$(source).hasClass('email-container');
            },
            invalid: function (el, handle) {
                return false; // don't prevent any drags from initiating by default
            }
        });
        // drag
        this.subs.add(this.dragulaService.drag('element')
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, source = _a.source;
            // ...
            var elementType = $(el).attr('id');
            var element = $.extend(true, {}, _this.defaultOptions[elementType]);
            var html = _this.DevHtmlTemplate[(elementType + 'Template')];
            // var reTemp = $(el).css('list-style', 'none').html(html);
            // console.log('element.cloned', $(el), elementType, element, html);
            // return reTemp;
        }));
        this.subs.add(this.dragulaService.drop("element")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, sibling = _a.sibling;
            // if($(el))var elementType = $(el)[0].type;
            var elementType = el.attributes[0].value;
            var element = $.extend(true, {}, _this.defaultOptions[elementType]);
            element.id = utils.uid();
            var index = $(sibling).index();
            // console.log('element.drop', $(el).find('li').prop('title'), el.attributes[0].value);
            $('.email-container li').remove();
            index == -1 ? _this.Email.elements.push(element) : _this.Email.elements.splice(index - 1, 0, element);
            utils.trackEvent('Elements', 'drop', element.type);
        }));
        this.subs.add(this.dragulaService.drop("element-html")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, sibling = _a.sibling;
            // ...
            var id = $(el).attr('id');
            var index = $(sibling).index();
            // console.log('element-html.drop',this.Email.elements);
            return;
            if (index == -1) {
                index = _this.Email.elements.length - 1;
            }
            else {
                index--;
            }
            var element = _this.utils.findWhere(_this.Email.elements, { id: id });
            var oldIndex = _this.Email.elements.indexOf(element);
            if (index >= _this.Email.elements.length) {
                var k = index - _this.Email.elements.length;
                while ((k--) + 1) {
                    _this.Email.elements.push(undefined);
                }
            }
            // console.log('element-html.drop',$(el), 'id',id, index);
        }));
        // some events have lots of properties, just pick the ones you need
        this.subs.add(this.dragulaService.dropModel("element")
            // WHOA
            // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
            .subscribe(function (_a) {
            var sourceModel = _a.sourceModel, targetModel = _a.targetModel, item = _a.item;
            // ...
            // console.log('element.dropModel');
        }));
    }
    ChangeLogComponent.prototype.ng_include_function = function (element) {
        switch (element.type) {
            case 'title': {
                //statements;
                return '<table class = "title-table" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: ' + element.options.backgroundColor + '" data-type="title">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" class="title" style="padding:' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + ';' + '; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: ' + element.options.color + '; line-height: 42px; font-size: 36px;" data-block-id="main-title">' + element.options.title + '</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: ' + element.options.color + '; line-height: 22px; font-size: 16px;" data-block-id="sub-title">' + element.options.subTitle + '</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'divider': {
                //statements;
                return '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color:' + element.options.backgroundColor + ';" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: ' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + ';">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'button': {
                //statements;
                return '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:'
                    + element.options.backgroundColor
                    + '"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding:'
                    + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3]
                    + '" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="'
                    + element.options.align
                    + '" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n              '
                    + ' <a style="background-color:'
                    + element.options.buttonBackgroundColor
                    + ';color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="'
                    + element.options.url + '" data-default="1"><p style="font-size:15px">'
                    + element.options.buttonText + '</p></a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'text': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  ' + element.options.backgroundColor + '" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + '; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;">\n ' + element.options.text + ' </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'image': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: ' + element.options.backgroundColor + ';" data-type="image">\n    <tbody>\n    <tr>\n        <td align="' + element.options.align + '" style="padding: ' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + ';" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="' + element.options.width + '" alt="" src="' + element.options.image + '" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'imageTextInside': {
                //statements;
                return '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: ' + element.options.backgroundColor + ';" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: ' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + '; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="' + element.options.image + '"\n                             width="' + element.options.width + '"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <div [innerHtml =" ""' + element.options.text + '</div>\n        </td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
            case 'imageTextRight': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: '
                    + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3]
                    + ';min-width:100%;margin:0 auto;   center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> ' +
                    '<th align="left" class="container_wrap" style="display:inline;" >'
                    + element.options.text
                    + ' </th> ' +
                    '<th align="right" class="container_wrap" > <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="' +
                    element.options.image + '" width="' + element.options.width + '" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> ' +
                    '</tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageTextLeft': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:'
                    + element.options.backgroundColor
                    + '" data-module="section_4" data-thumb="thumbnails/s4.png"> ' +
                    '<tbody> ' +
                    '<tr> <td align="center tbody1" style="padding: '
                    + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3]
                    + ';min-width:100%;margin:0 auto;   center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;">' +
                    '<tbody class="tbody1"> <tr class="tbody2"> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> ' +
                    '<td align="center" class="container tbody3"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> ' +
                    '<tbody> <tr> <td class="container tbody4"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center tbody6"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> ' +
                    '<tbody> <tr class="tbody7"> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap tbody8" style="display:inline;"> <table align="left" width="280" class="container tbody9" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="right" class="container_wrap tbody10" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="'
                    + element.options.image
                    + '" width="'
                    + element.options.width + '" height="156" alt="img">  </td></tr></tbody> </table> </td></tr>' +
                    '</tbody> </table> </th> <th align="right" class="container_wrap tbody11" >'
                    + element.options.text
                    + ' </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td class = "tbody13" height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageText2x2': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: ' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + ';min-width:100%;margin:0 auto; background-color:' + element.options.backgroundColor + ') center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image1
                    + '" border="0" alt="img" width="'
                    + element.options.width1 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" >'
                    + element.options.text1
                    + '  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image2 + '" border="0" alt="img" width="' + element.options.width2 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center">'
                    + element.options.text2
                    + '  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'imageText3x2': {
                //statements;
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:' + element.options.backgroundColor + '" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: ' + element.options.padding.split(',')[0] + ' ' + element.options.padding.split(',')[1] + ' ' + element.options.padding.split(',')[2] + ' ' + element.options.padding.split(',')[3] + ';min-width:100%;margin:0 auto; background-color:' + element.options.backgroundColor + ') center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="' + element.options.image1 + '" border="0" alt="img" width="'
                    + element.options.width1
                    + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text1
                    + '</td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="'
                    + element.options.image2
                    + '" border="0" alt="img" width="' + element.options.width2 + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text2
                    + '  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="'
                    + element.options.image3
                    + '" border="0" alt="img" width="'
                    + element.options.width3
                    + '" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " align="center" data-ng-bind-html="'
                    + element.options.text3
                    + ' </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>';
                break;
            }
            case 'unsubscribe': {
                return '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: ' + element.options.backgroundColor + ';" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:'
                    + element.options.padding.split(',')[0] + ' '
                    + element.options.padding.split(',')[1] + ' '
                    + element.options.padding.split(',')[2] + ' '
                    + element.options.padding.split(',')[3]
                    + ' ;text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;">' +
                    element.options.text +
                    '</td>\n    </tr>\n    </tbody>\n</table>';
                break;
            }
        }
    };
    // options: any = {
    //     align: 'center',
    //     title: 'New Title' // Enter your title here
    // }
    // options: any = {2: 'foo', 1: 'bar'};
    /**
     *  delare the functions
     * */
    ChangeLogComponent.prototype.ngOnInit = function () {
        this.currentLanguage = 'en';
        this.currentElement = false;
        this.preview = false;
        this.Email = JSON.parse(localStorage.getItem('Email')) || {
            name: 'New Email',
            elements: [],
            html: '',
            emailSettings: {
                options: {
                    paddingTop: "50px",
                    paddingBottom: "50px",
                    backgroundColor: "#cccccc"
                },
                type: 'emailSettings',
            },
        };
        // console.log('email', this.Email);
        console.log('ngOnInit', this.Email);
        /**
         * Used to get the dragged question original position.
         */
    };
    ChangeLogComponent.prototype.onFileSelectec = function (event) {
        // console.log('event', event);
    };
    ChangeLogComponent.prototype.arrToPadding = function (array_p) {
        var str = "";
        for (var i = 0; i < 4; i++) {
            str += array_p[i] + ";";
        }
        // console.log('str',array_p, str);
        return str;
    };
    ;
    ChangeLogComponent.prototype.onloadfunction = function (Email_element) {
        console.log('onload', Email_element);
    };
    /**
     *  dragdrop component
     / */
    ChangeLogComponent.prototype.drop = function (event) {
        // console.log('drop');
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    ChangeLogComponent.prototype.cdksideEnter = function (event) {
        console.log('side Enter', event);
    };
    ChangeLogComponent.prototype.cdkdashEnter = function (event) {
        console.log('clone', event.container.data);
    };
    /**
     /
     */
    ChangeLogComponent.prototype.elements_click = function () {
        console.log('elements_click');
    };
    ChangeLogComponent.prototype.drag_on = function (element_type) {
        console.log('drag_on', element_type);
    };
    // component functions
    ChangeLogComponent.prototype.closePreview = function () {
        this.preview = false;
        console.log(this.preview);
    };
    ChangeLogComponent.prototype.hasChanges = function () {
        return true;
    };
    ;
    ChangeLogComponent.prototype.saveEmailTemplate = function () {
        console.log('saveEmailTemplate');
        // localStorage.setItem('whatever', 'something');
        this.Email.html = this.utils.stripTags($('.builder .email-container').html(), this.Email);
        // console.log('this.Email', this.Email.html, "JSON"+JSON.stringify(this.Email));
        // $scope.Email = is what you need to save
        localStorage.setItem('Email', JSON.stringify(this.Email));
        this.currentLocalStorage = 'Email';
        this.currentElement = null;
        return true;
    };
    ChangeLogComponent.prototype.changeLanguage = function (lang) {
        if (lang === 'en') {
            this.currentLanguage = 'ru';
        }
        else if (lang === 'ru') {
            this.currentLanguage = 'en';
        }
        console.log(this.currentLanguage);
    };
    ChangeLogComponent.prototype.redirect = function () {
    };
    ChangeLogComponent.prototype.previewEmail = function () {
    };
    ChangeLogComponent.prototype.openExportContainer = function () {
        if (!this.Email.elements.length)
            return;
        // return this.utils.notify(utils.translate('nothing_to_export')).log();
        this.exportAsHtml = false;
        this.currentElement = 'export';
        this.changeHtml();
    };
    ChangeLogComponent.prototype.changeHtml = function () {
        console.log('changeHtml', this.emailHtml, this.utils.stripTags($('.builder .email-container').html(), this.Email));
        this.emailHtml = this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email));
    };
    ChangeLogComponent.prototype.desktoppreview = function () {
        var w = window.open("", "", "width=850, height=660");
        // console.log('desktoppreview', w, $('.builder .email-container').html(), this.Email);
        w.document.write(this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email)));
    };
    ChangeLogComponent.prototype.mobilepreview = function () {
        var w = window.open("", "", "width=360, height=640");
        // console.log('desktoppreview', w, $('.builder .email-container').html(), this.Email);
        w.document.write(this.utils.removeLineBreaks(this.utils.stripTags($('.builder .email-container').html(), this.Email)));
    };
    ChangeLogComponent.prototype.m_settings = function (setting_value) {
        return true;
    };
    ChangeLogComponent.prototype.editElement = function (id) {
        // if(this.preview) return;
        // console.log('editeElement_id', id,'preview', this.preview, 'email_elements', this.Email.elements,'currentElement', this.currentElement,'utils', this.utils, 'Email', this.Email);
        if (this.preview)
            return;
        this.currentElement = id != 'emailSettings' ? this.utils.findWhere(this.Email.elements, { id: id }) : this.Email[id];
        // console.log('id',this.preview, id, this.Email);
        this.currentElement && this.utils.trackEvent('Email', 'edit', this.currentElement.type);
        // console.log('editeElement_id', id,'preview', this.preview, 'email_elements', this.Email.elements,'currentElement', this.currentElement,'utils', this.utils, 'Email', this.Email);
    };
    ChangeLogComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    ChangeLogComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit');
    };
    ChangeLogComponent.prototype.getTemplate = function (type) {
        // return this.defaultOptions[type];
        var htmlcode = this.ng_include_function(type);
        var reVal, boFlag;
        reVal = this.sanitizer.bypassSecurityTrustHtml(htmlcode);
        // setTimeout(reVal = this.sanitizer.bypassSecurityTrustHtml(htmlcode), 1000);
        return reVal;
    };
    ChangeLogComponent.prototype.removeElement = function (id) {
        var el = this.utils.findWhere(this.Email.elements, { id: id });
        this.Email.elements.splice(this.Email.elements.indexOf(el), 1);
        // console.log('removeElement','currentitem', this.currentElement, 'preview', this.preview, id, this.Email_elements, el);
        this.utils.trackEvent('Elements', 'remove', el.type);
        this.currentElement = undefined;
        this.currentElement = false;
    };
    ChangeLogComponent.prototype.InputFileChange = function (event, id) {
        console.log('inputfilechange', event[0].name);
        // this.currentElement.options[id] = event[0].name;
    };
    ChangeLogComponent.prototype.paddingChange = function (padding_val, ikey, i) {
        var paddingArray = this.currentElement.options[ikey].split(',');
        var tmp = "";
        for (var k = 0; k < 4; k++) {
            if (k === i) {
                if (k)
                    tmp += ' ,';
                tmp += padding_val;
            }
            else {
                if (k)
                    tmp += ' ,';
                tmp += paddingArray[k];
            }
        }
        this.currentElement.options[ikey] = tmp;
        // console.log('paddingChange', tmp, paddingArray, this.currentElement.options[ikey]);
        // this.currentElement.options[item.key]
    };
    ChangeLogComponent.prototype.sideSave = function () {
        // console.log('saveEmailTemplate');
        // localStorage.setItem('whatever', 'something');
        this.Email.html = this.utils.stripTags($('.builder .email-container').html(), this.Email);
        // console.log('this.Email', this.Email.html, "JSON"+JSON.stringify(this.Email));
        // $scope.Email = is what you need to save
        localStorage.setItem('Email', JSON.stringify(this.Email));
        this.currentLocalStorage = 'Email';
        // this.currentElement = null;
        return true;
    };
    ChangeLogComponent.prototype.cloneElement = function (id) {
        var el = this.utils.findWhere(this.Email.elements, { id: id });
        var newEl = JSON.parse(JSON.stringify(el));
        newEl.id = this.utils.uid();
        this.utils.trackEvent('Elements', 'clone', newEl.type);
        this.Email.elements.splice(this.Email.elements.indexOf(el) + 1, 0, newEl);
        console.log('==>', this.Email);
        // setTimeout(function () {
        //     $( ".resizable" ).resizable();
        // },100);
        // console.log('cloneElement', el, 'newEl', newEl, 'newEl.id', newEl.id);
    };
    ChangeLogComponent.prototype.liChangeFunction = function () {
        // console.log('lichange',this.elements);
    };
    ChangeLogComponent.prototype.closemodel = function () {
        $(".ng7-modal").fadeOut("slow");
    };
    ChangeLogComponent.prototype.openmodel = function () {
        // console.log('openmodel', $(".ng7-modal"));
        $(".ng7-modal").fadeIn();
    };
    ChangeLogComponent.prototype.saveAsTemplate = function () {
        $(".ng7-addtemplatemsg").slideDown("slow");
        console.log("Successfull");
        setTimeout(function () {
            $(".ng7-modal").fadeOut("slow");
            $(".ng7-addtemplatemsg").hide();
        }, 2500);
        var templateobj = {
            "title": this.templatetitle,
            "description": this.templatedescription,
            // "createdate":xdate(),
            // "createtime":xtime(),
            "filename": this.utils.uid('export'),
            "html": JSON.stringify(this.Email)
        };
    };
    ChangeLogComponent.prototype.exportEmailAsJson = function () {
        var a = document.createElement('a');
        a.target = '_blank';
        this.utils.trackEvent('Email', 'export', 'JSON');
        a.href = 'data:attachment/json,' + encodeURI(JSON.stringify(this.Email));
        a.download = this.utils.uid('export') + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    ChangeLogComponent.prototype.downloadHtml = function () {
        var a = document.createElement('a');
        a.target = '_blank';
        this.utils.trackEvent('Email', 'export', 'HTML');
        a.href = 'data:attachment/html,' + encodeURI(this.emailHtml);
        a.download = this.utils.uid('export') + '.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    ChangeLogComponent.prototype.stripTags = function (html, email) {
        email = email || {}; // I know, is ugly, but is supported in es5
        var el = document.createElement('html');
        // $(el).html(self.utils.removeLineBreaks(html));
        //
        // $(el).find('body').css({
        //     'background': email.emailSettings.options.backgroundColor,
        //     'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
        // });
        //
        // if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
        //     $(el).find('head').append($('<meta/>', {
        //         'http-equiv': 'Content-Type',
        //         'content': 'text/html; charset=UTF-8'
        //     }));
        //     $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
        // }
        //
        // if (!$(el).find('head title').length) {
        //     $(el).prepend('<title>' + email.name + '</title>')
        // } else {
        //     $(el).find('head title').text(email.name)
        // }
        //
        // if (email.mailchimpHead && variables.includeMailchimp.enable && variables.includeMailchimp.mergeTagsInHead) {
        //     if (!$(el).find('head meta[property="og:title"]').length) {
        //         $(el).find('head').append($('<meta/>', {
        //             'property': 'og:title',
        //             'content': '*|MC:SUBJECT|*'
        //         }));
        //     }
        // } else if (!email.mailchimpHead || !variables.includeMailchimp.enable || !variables.includeMailchimp.mergeTagsInHead) {
        //     $(el).find('head meta[property="og:title"]').remove();
        // }
        //
        // if (email.mailchimpHeaderFooter && variables.includeMailchimp.enable && variables.includeMailchimp.includeStandardHeaderAndFooter) {
        //     $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>")
        //     $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>")
        // } else if (!email.mailchimpHeaderFooter || !variables.includeMailchimp.enable || !variables.includeMailchimp.includeStandardHeaderAndFooter) {
        //     $(el).find('table').find('#templateFooter, #templatePreheader').remove()
        // }
        //
        // $(el).find('i.actions').each(function() {
        //     $(this).remove();
        // });
        // $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function() {
        //     console.log('ng-include',$(this).contents() );
        //     $(this).replaceWith($(this).contents());
        // });
        // $(el).contents().contents().addBack().filter(function() {
        //     return this.nodeType == Node.COMMENT_NODE;
        // }).remove();
        // return $(el)[0].outerHTML;
    };
    ChangeLogComponent.prototype.side_bar_function = function (currentElement) {
        // console.log('side_bar_function', currentElement);
    };
    ChangeLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changelog',
            template: __webpack_require__(/*! ./changelog.component.html */ "./src/app/changelog/changelog.component.html"),
            styles: [__webpack_require__(/*! ./changelog.component.scss */ "./src/app/changelog/changelog.component.scss"), __webpack_require__(/*! ./src/modal_dialog.css */ "./src/app/changelog/src/modal_dialog.css")],
            providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"], _changelog_service__WEBPACK_IMPORTED_MODULE_3__["ChangeLogService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"], _changelog_service__WEBPACK_IMPORTED_MODULE_3__["ChangeLogService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ChangeLogComponent);
    return ChangeLogComponent;
}());

var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
    }
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: "\n        <div>dfdsfd</div>",
        })
    ], DeviceComponent);
    return DeviceComponent;
}());


/***/ }),

/***/ "./src/app/changelog/changelog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/changelog/changelog.module.ts ***!
  \***********************************************/
/*! exports provided: ChangeLogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogModule", function() { return ChangeLogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog-routing.module */ "./src/app/changelog/changelog-routing.module.ts");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _src_device_device_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/device/device.component */ "./src/app/changelog/src/device/device.component.ts");
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changelog.component */ "./src/app/changelog/changelog.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { MatDialog } from '@angular/material';


// import { CKEditorModule } from 'ngx-ckeditor';





// import { } from '@angular/material';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var ChangeLogModule = /** @class */ (function () {
    function ChangeLogModule() {
    }
    ChangeLogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _changelog_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChangeLogRoutingModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_4__["MatchHeightModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_8__["DragulaModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            ],
            exports: [],
            declarations: [
                _changelog_component__WEBPACK_IMPORTED_MODULE_6__["ChangeLogComponent"],
                _src_device_device_component__WEBPACK_IMPORTED_MODULE_5__["DeviceComponent"],
            ],
            providers: [],
        })
    ], ChangeLogModule);
    return ChangeLogModule;
}());



/***/ }),

/***/ "./src/app/changelog/changelog.service.ts":
/*!************************************************!*\
  !*** ./src/app/changelog/changelog.service.ts ***!
  \************************************************/
/*! exports provided: ChangeLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLogService", function() { return ChangeLogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import alertify from 'alertify.js';
var ChangeLogService = /** @class */ (function () {
    function ChangeLogService() {
        this.variables = {
            urlToUploadImage: '//uploads.im/api',
            trackEvents: true,
            includeMailchimp: {
                enable: true,
                mergeTagsInTinymce: true,
                mergeTagsInHead: true,
                includeStandardHeaderAndFooter: true
            }
        };
    }
    ChangeLogService.prototype.translate = function (key_to_translate, additional_data) {
        return key_to_translate;
    };
    /**
     * Convert string from snake to camel
     * @param str
     * @returns {*}
     */
    ChangeLogService.prototype.snakeToCamel = function (str) {
        if (typeof str !== 'string')
            return str;
        return str.replace(/_([a-z])/gi, function (m, w) {
            return "" + w.toUpperCase();
        });
    };
    /**
     * Convert camel to snake
     * @param str
     * @returns {*}
     */
    ChangeLogService.prototype.camelToSnake = function (str) {
        if (typeof str !== 'string')
            return str;
        return str.replace(/([A-Z])/g, function (m, w) {
            return "_" + w.toLowerCase();
        });
    };
    /**
     * Generate random id
     * @param prefix
     * @returns {string}
     */
    ChangeLogService.prototype.uid = function (prefix) {
        if (prefix === void 0) { prefix = 'id'; }
        return (prefix || 'id') + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
    };
    /**
     * https://gist.github.com/aaronmccall/9751450
     * @param list
     * @param props
     * @returns {*}
     */
    ChangeLogService.prototype.findWhere = function (list, props) {
        var idx = 0;
        var len = list.length;
        var match = false;
        var item, item_k, item_v, prop_k, prop_val;
        for (; idx < len; idx++) {
            item = list[idx];
            for (prop_k in props) {
                // If props doesn't own the property, skip it.
                if (!props.hasOwnProperty(prop_k))
                    continue;
                // If item doesn't have the property, no match;
                if (!item.hasOwnProperty(prop_k)) {
                    match = false;
                    break;
                }
                if (props[prop_k] === item[prop_k]) {
                    // We have a match…so far.
                    match = true;
                }
                else {
                    // No match.
                    match = false;
                    // Don't compare more properties.
                    break;
                }
            }
            // We've iterated all of props' properties, and we still match!
            // Return that item!
            if (match)
                return item;
        }
        // No matches
        return null;
    };
    /**
     * Strip email html for unnecessary attributes, classes ...
     * @param html
     * @param email
     * @returns {string|*|Object|string|string}
     */
    ChangeLogService.prototype.stripTags = function (html, email) {
        email = email || {}; // I know, is ugly, but is supported in es5
        var el = document.createElement("html");
        console.log('strip email', email, el);
        $(el).html(this.removeLineBreaks(html));
        $(el).find('body').css({
            'background': email.emailSettings.options.backgroundColor,
            'padding': email.emailSettings.options.paddingTop + ' 0 ' + email.emailSettings.options.paddingBottom
        });
        if (!$(el).find('head meta[http-equiv="Content-Type"]').length) {
            $(el).find('head').append($('<meta/>', {
                'http-equiv': 'Content-Type',
                'content': 'text/html; charset=UTF-8'
            }));
            $(el).find('head').append("<meta name=\"viewport\" content=\"width=device-width\"><link href='https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700' rel='stylesheet' type='text/css'><style>@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700); html{width: 100%;}body{width: 100%; background-color: white; margin:0; padding:0;-webkit-font-smoothing: antialiased; mso-margin-top-alt:0px; mso-margin-bottom-alt:0px; mso-padding-alt: 0px 0px 0px 0px;}p,h1,h2,h3,h4{margin-top:0; margin-bottom:0; padding-top:0; padding-bottom:0;}table{font-size: 14px;border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;}span.preheader{display: none;font-size: 1px; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;}@media only screen and (max-width: 600px){body{min-width:100% !important;}.container{width:450px !important; min-width:450px !important;}.container_2{width:450px !important; min-width:450px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important; padding-top: 20px;}.center_menu{margin:0 auto 0 auto !important; text-align:center !important;}.container_wrap{display:inline-block !important; width:450px !important; height:auto !important;}.container_wrap_2{display:block !important; width:450px !important; text-align:center !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:380px !important; text-align:center !important;}.title{width:450px !important;text-align:center !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:450px !important; height:auto !important}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:400px !important;}}@media only screen and (max-width: 481px){body{min-width:100% !important;}.container{width:300px !important; min-width:300px !important;}.container_2{width:300px !important; min-width:300px !important;}.container_3{height:180px !important;}.center{margin:0 auto 0 auto !important;}.center_menu{margin:0 auto 0 auto !important;}.container_wrap{display:inline-block !important; width:300px !important; height:auto !important; border-radius:0 !important;}.container_wrap_2{display:block !important; width:300px !important; height:auto !important;}.container_wrap_margin{display:block !important; width:100% !important; height:10px !important;}.text{width:270px !important; text-align:center !important;}.title{text-align:center !important;width:300px !important;}.title_2{width:450px !important;border:none !important; text-align:center !important; padding-left:none !important;}.image_container_main a img{width:300px !important; height:auto !important;}.image_container{width: 100% !important; height: auto !important;}.disable{display: none !important;}.enable{display: inline !important;}.bgnd{background-size:cover !important;}.padding_top{padding-top: 20px;}.padding_bottom{padding-bottom: 20px;}.height{height:300px !important;}}</style>");
        }
        if (!$(el).find('head title').length) {
            $(el).prepend('<title>' + email.name + '</title>');
        }
        else {
            $(el).find('head title').text(email.name);
        }
        if (email.mailchimpHead && this.variables.includeMailchimp.enable && this.variables.includeMailchimp.mergeTagsInHead) {
            if (!$(el).find('head meta[property="og:title"]').length) {
                $(el).find('head').append($('<meta/>', {
                    'property': 'og:title',
                    'content': '*|MC:SUBJECT|*'
                }));
            }
        }
        else if (!email.mailchimpHead || !this.variables.includeMailchimp.enable || !this.variables.includeMailchimp.mergeTagsInHead) {
            $(el).find('head meta[property="og:title"]').remove();
        }
        if (email.mailchimpHeaderFooter && this.variables.includeMailchimp.enable && this.variables.includeMailchimp.includeStandardHeaderAndFooter) {
            $(el).find('table[data-type]:first').prepend("<tr id=\"templatePreheader\">\n    <td valign=\"top\" class=\"preheaderContent\">\n\n        <!-- // Begin Module: Standard Preheader \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td valign=\"top\">\n                    <div mc:edit=\"std_preheader_content\">\n                        Use one or two sentences in this area to offer a teaser of your email\'s content. Text here will show in a preview area in some email clients.\n                    </div>\n                </td>\n                <td valign=\"top\" width=\"180\">\n                    <div mc:edit=\"std_preheader_links\">\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->Is this email not displaying correctly?<br><a href=\"*|ARCHIVE|*\" target=\"_blank\">View it in your browser</a>.<!-- *|END:IF|* -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Preheader \\\\ -->\n\n    </td>\n</tr>");
            $(el).find('table[data-type]:last').append("<tr id=\"templateFooter\">\n    <td valign=\"top\" class=\"footerContent\">\n\n        <!-- // Begin Module: Standard Footer \\\\ -->\n        <table border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"social\">\n                    <div mc:edit=\"std_social\">\n                        &nbsp;<a href=\"*|TWITTER:PROFILEURL|*\">follow on Twitter</a> | <a href=\"*|FACEBOOK:PROFILEURL|*\">friend on Facebook</a> | <a href=\"*|FORWARD|*\">forward to a friend</a>&nbsp;\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td valign=\"top\" width=\"370\">\n                    <br>\n                    <div mc:edit=\"std_footer\">\n                        *|IF:LIST|*\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|LIST:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        *|LIST:DESCRIPTION|*\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|HTML:LIST_ADDRESS_HTML|*\n                        <br>\n                        <!-- *|END:IF|* -->\n                        *|ELSE:|*\n                        <!-- *|IFNOT:ARCHIVE_PAGE|* -->\n                        <em>Copyright &copy; *|CURRENT_YEAR|* *|USER:COMPANY|*, All rights reserved.</em>\n                        <br>\n                        <strong>Our mailing address is:</strong>\n                        <br>\n                        *|USER:ADDRESS_HTML|*\n                        <!-- *|END:IF|* -->\n                        *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n                <td valign=\"top\" width=\"170\" id=\"monkeyRewards\">\n                    <br>\n                    <div mc:edit=\"monkeyrewards\">\n                        *|IF:REWARDS|* *|HTML:REWARDS|* *|END:IF|*\n                    </div>\n                    <br>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\" valign=\"middle\" id=\"utility\">\n                    <div mc:edit=\"std_utility\">\n                        &nbsp;<a href=\"*|UNSUB|*\">unsubscribe from this list</a> | <a href=\"*|UPDATE_PROFILE|*\">update subscription preferences</a><!-- *|IFNOT:ARCHIVE_PAGE|* --> | <a href=\"*|ARCHIVE|*\">view email in browser</a><!-- *|END:IF|* -->&nbsp;\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <!-- // End Module: Standard Footer \\\\ -->\n\n    </td>\n</tr>");
        }
        else if (!email.mailchimpHeaderFooter || !this.variables.includeMailchimp.enable || !this.variables.includeMailchimp.includeStandardHeaderAndFooter) {
            $(el).find('table').find('#templateFooter, #templatePreheader').remove();
        }
        $(el).find('i.actions').each(function () {
            $(this).remove();
        });
        $(el).find('ng-include, div.builder-element, [ng-bind-html]').each(function () {
            console.log('ng-include', $(this).contents());
            // $(this).replaceWith($(this).contents());
        });
        $(el).contents().contents().addBack().filter(function () {
            return this.nodeType == Node.COMMENT_NODE;
        }).remove();
        return $(el)[0].outerHTML;
    };
    /**
     * Notify
     * @param msg
     * @param callback
     * @returns {{log: utils.log, success: utils.success, error: utils.error}}
     */
    ChangeLogService.prototype.notify = function (msg, callback) {
        return alert(msg);
        // return {
        //     log {
        //         return alertify.log(msg, callback)
        //     },
        //     success: function() {
        //         alertify.success(msg, callback)
        //     },
        //     error: function() {
        //         alertify.error(msg, callback)
        //     }
        // }
    };
    /**
     * Confirm dialog
     * @param msg
     * @param succesFn
     * @param cancelFn
     * @param okBtn
     * @param cancelBtn
     * @returns {IAlertify}
     */
    ChangeLogService.prototype.confirm = function (msg, succesFn, cancelFn, okBtn, cancelBtn) {
        return alert(msg);
        // return alertify
        //     .okBtn(okBtn)
        //     .cancelBtn(cancelBtn)
        //     .confirm(msg, succesFn, cancelFn)
    };
    /**
     * Alert dialog
     * @param msg
     * @returns {IAlertify}
     */
    ChangeLogService.prototype.alert = function (msg) {
        return alert(msg);
        // return alertify
        //     .okBtn("Accept")
        //     .alert(msg)
    };
    /**
     * Prompt dialog
     * @param defaultvalue
     * @param promptMessage
     * @param successFn
     * @param cancelFn
     * @returns {IAlertify}
     */
    ChangeLogService.prototype.prompt = function (defaultvalue, promptMessage, successFn, cancelFn) {
        return alert(defaultvalue);
        // return alertify
        //     .defaultValue(defaultvalue)
        //     .prompt(promptMessage, successFn, cancelFn)
    };
    /**
     * Validate email before save and import
     * @param emailToValidate
     * @returns {boolean}
     */
    ChangeLogService.prototype.validateEmail = function (emailToValidate) {
        return 1;
        // return angular.isObject(emailToValidate) &&
        //     emailToValidate.hasOwnProperty('name') &&
        //     angular.isArray(emailToValidate.elements) &&
        //     angular.isString(emailToValidate.html) &&
        //     angular.isObject(emailToValidate.emailSettings) &&
        //     emailToValidate.emailSettings.type == 'emailSettings' &&
        //     angular.isObject(emailToValidate.emailSettings.options)
    };
    /**
     * Track events with Google Analytics
     * @param category
     * @param event
     * @param name
     * @returns {*}
     */
    ChangeLogService.prototype.trackEvent = function (category, event, name) {
        if (this.variables.trackEvents) {
            return 1;
            // if (!window.ga)
            //     return console.error('To track events, include Google analytics code in index.html');
            // return ga('send', 'event', category, event, name);
        }
    };
    ChangeLogService.prototype.removeLineBreaks = function (html) {
        return html.replace(/\n\s*\n/gi, '\n');
    };
    ChangeLogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChangeLogService);
    return ChangeLogService;
}());



/***/ }),

/***/ "./src/app/changelog/src/device/device.component.html":
/*!************************************************************!*\
  !*** ./src/app/changelog/src/device/device.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"DevHtmlTemplate[0].titleTemplate\">\n  <!--{{src}}-->\n  <!--{{ // DevHtmlTemplate[0].titleTemplate}}-->\n</div>\n"

/***/ }),

/***/ "./src/app/changelog/src/device/device.component.scss":
/*!************************************************************!*\
  !*** ./src/app/changelog/src/device/device.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/changelog/src/device/device.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/changelog/src/device/device.component.ts ***!
  \**********************************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceComponent = /** @class */ (function () {
    function DeviceComponent() {
        this.DevHtmlTemplate = [
            { 'titleTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style=" display: table;max-width:800px; background-color: {{element.options.backgroundColor}}" data-type="title">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" class="title" style="padding:{{ element.options.padding | arrToPadding  }}; color: #757575;" data-block-id="background">\n            <h1 style="width:auto; font-family: Arial, sans-serif; padding-top: 30px; font-weight: 500; color: {{element.options.color}}; line-height: 42px; font-size: 36px;" data-block-id="main-title">{{ element.options.title }}</h1>\n            <h4 style="font-family: Arial, sans-serif; font-weight: 500; color: {{element.options.color}}; line-height: 22px; font-size: 16px;" data-block-id="sub-title">{{ element.options.subTitle }}</h4>\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'buttonTemplate': '<table  mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}"  data-type="button">\n    <tbody>\n    <tr>\n        <td style="padding: {{ element.options.padding | arrToPadding  }};" class="buttons-full-width">\n            <table width="" cellspacing="0" cellpadding="0" border="0" align="{{ element.options.align }}" class="button">\n                <tbody>\n                <tr>\n                    <td style="margin: 10px 10px 10px 10px;" class="button">\n                        <a style="background-color: {{element.options.buttonBackgroundColor}};color: #FFFFFF;font-family: Arial;font-size: 15px;line-height:21px;display: inline-block;border-radius: 6px;text-align: center;text-decoration: none;font-weight: bold;display: block;margin: 0px 0px; padding: 12px 20px;" class="button-1" href="{{ element.options.url }}" data-default="1">{{ element.options.buttonText }}</a>                   <!--[if mso]>             </center>           </v:roundrect>         <![endif]-->\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'textTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color:  {{element.options.backgroundColor}}" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }}; text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'unsubscribeTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" align="center" data-type="text-block">\n    <tbody>\n    <tr>\n        <td class="block-text selected-item" data-block-id="background" data-clonable="true" align="left" style="padding:{{ element.options.padding | arrToPadding  }};text-decoration: none; font-family: \'Raleway\', Open Sans, sans-serif; font-size: 14px; line-height:21px; color:#696969; text-align: center; font-weight:400; line-height: 22px;"\n            data-ng-bind-html="element.options.text | rawHtml">\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'dividerTemplate': '<table class="main" mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;border: 0; display: table; background-color: {{element.options.backgroundColor}};" cellspacing="0" cellpadding="0" border="0" align="center" data-type="divider">\n    <tbody>\n    <tr>\n        <td class="divider-simple" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top: 1px solid #DADFE1;">\n                <tbody>\n                <tr>\n                    <td width="100%" height="15px"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'imageTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="image">\n    <tbody>\n    <tr>\n        <td align="{{ element.options.align }}" style="padding: {{ element.options.padding | arrToPadding  }};" class="image">\n            <img class="resizable" border="0" align="one_image" style="display:block;max-width:100%;" width="{{element.options.width}}" alt="" src="{{ element.options.image }}" tabindex="0">\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            { 'imageTextInsideTemplate': '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextInside">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="padding:5px 5px 5px 0; margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td max-width="160">\n                        <img border="0" class="resizable" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 540px;padding:0 10px 10px 0;">\n                    </td>\n                </tr>\n                <tr>\n                </tr>\n                </tbody>\n            </table>\n            <ng-bind-html ng-bind-html="element.options.text | rawHtml"></ng-bind-html>\n        </td>\n    </tr>\n    </tbody>\n</table>' },
            //{'imageTextRightTemplate', '<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageTextRight">\n    <tbody>\n    <tr>\n        <td class="image-text" align="left"\n            style="padding: {{ element.options.padding | arrToPadding  }}; font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;">\n            <table class="image-in-table" width="190" align="left" style="margin: 11px 0;">\n                <tbody>\n                <tr>\n                    <td class="gap" width="30"></td>\n                    <td width="160">\n                        <img border="0" align="left"\n                             src="{{ element.options.image }}"\n                             width="{{ element.options.width }}"\n                             style="display: block;margin: 0px;max-width: 340px;padding:5px 5px 0 0;">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n\n            <table width="190">\n                <tbody>\n                <tr>\n                    <td class="text-block" data-ng-bind-html="element.options.text | rawHtml">\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            { 'imageTextRightTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" class="container_wrap" style="display:inline;"> <table align="left" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>' },
            { 'imageTextLeftTemplate': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_4" width="100%" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee" data-bgcolor="s4_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_4" data-thumb="thumbnails/s4.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background: url(img/s4_bg.jpg) center center / cover no-repeat;" data-bg="s4_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="right" class="container_wrap" style="display:inline;"> <table align="right" width="280" class="container" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td> <table width="280" align="left" class="container_wrap" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;border: 0px;"> <tbody> <tr> <td class="image_container_main"> <img mc:edit="" class="resizable" src="{{element.options.image}}" width="{{element.options.width}}" height="156" alt="img">  </td></tr></tbody> </table> </td></tr></tbody> </table> </th> <th align="left" class="container_wrap" style="display:inline;" data-ng-bind-html="element.options.text | rawHtml"> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>' },
            { 'imageText2x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>' },
            // {'imageText3x2Template', '<table width="640" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center"\n       style="max-width:800px;display: table; background-color: {{element.options.backgroundColor}};" data-type="imageText3x2">\n    <tbody>\n    <tr>\n        <td class="image-caption" style="padding: {{ element.options.padding | arrToPadding  }};">\n            <table class="image-caption-container" align="left" border="0" cellpadding="0" cellspacing="0"\n                   width="350">\n                <tbody>\n                <tr>\n                    <td>\n                        <table class="image-caption-column" align="left" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image1 }}"\n                                         width="{{ element.options.width1 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text1 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <table class="image-caption-column" align="right" border="0" cellpadding="0"\n                               cellspacing="0" width="160">\n                            <tbody>\n                            <tr>\n                                <td class="image-caption-top-gap" height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content image"\n                                    style="font-family: Arial; font-size: 13px; color: #000000;">\n                                    <img src="{{ element.options.image2 }}"\n                                         width="{{ element.options.width2 }}"\n                                         alt="" style="display: block;" align="2" border="0">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td height="15" width="100%"></td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-content text"\n                                    style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                                    align="left"\n                                    data-ng-bind-html="element.options.text2 | rawHtml">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="image-caption-bottom-gap" height="5" width="100%"></td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <table class="image-caption-column" align="right" border="0" cellpadding="0" cellspacing="0"\n                   width="160">\n                <tbody>\n                <tr>\n                    <td class="image-caption-top-gap" height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content image"\n                        style="font-family: Arial; font-size: 13px; color: #000000;">\n                        <img src="{{ element.options.image3 }}"\n                             width="{{ element.options.width3 }}"\n                             alt="" style="display: block;" align="2" border="0">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="15" width="100%"></td>\n                </tr>\n                <tr>\n                    <td class="image-caption-content text"\n                        style="font-family: Arial; font-size: 13px; color: #000000; line-height: 22px;"\n                        align="left"\n                        data-ng-bind-html="element.options.text3 | rawHtml">\n                    </td>\n                </tr>\n                <tr>\n                    <td height="5" width="100%"></td>\n                </tr>\n                </tbody>\n            </table>\n        </td>\n    </tr>\n    </tbody>\n</table>'},
            { 'imageText3x2Template': '<table mc:repeatable="layout" mc:hideable="" mc:variant="section_3" width="100%" align="center" cellpadding="0" cellspacing="0" border="0"  data-bgcolor="s3_bg" style="max-width:800px;table-layout:fixed;margin:0 auto; border-collapse:collapse; border: 0px; max-width:800px;background-color:{{element.options.backgroundColor}}" data-module="section_3" data-thumb="thumbnails/s3.png"> <tbody> <tr> <td align="center" style="padding: {{ element.options.padding | arrToPadding  }};min-width:100%;margin:0 auto; background-color:{{element.options.backgroundColor}}) center center / cover no-repeat;" data-bg="s3_bg_img"> <table width="600" align="center" class="container" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td height="60" width="1" style="font-size: 1px; line-height: 60px; height:60px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="table-layout:fixed; margin:0 auto; border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center" class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td class="container"> <table width="600" align="center" cellpadding="0" cellspacing="0" border="0" class="container" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td> <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <th align="left" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="left" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image1}}" border="0" alt="img" width="{{element.options.width1}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text1 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="center" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="center" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit="" class="resizable" src="{{element.options.image2}}" border="0" alt="img" width="{{element.options.width2}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text2 | rawHtml" align="center">  </td></tr></tbody> </table> </th> <th align="right" width="180" class="container_wrap" valign="top" style="margin:0; padding:0;vertical-align:top;"> <table class="container" width="180" align="right" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; border: 0px;"> <tbody> <tr> <td align="center"> <img mc:edit=""     class="resizable" src="{{element.options.image3}}" border="0" alt="img" width="{{element.options.width3}}" style="display: block;"> </td></tr><tr> <td height="20" width="1" style="font-size: 1px; line-height: 20px; height:20px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr><tr> <td valign="top" class="image-caption-content text " data-ng-bind-html="element.options.text3 | rawHtml" align="center"> </td></tr></tbody> </table> </th> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td height="40" width="1" style="font-size: 1px; line-height: 40px; height:40px;">&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Blank_-_Spacer.png" alt="spacer" width="1" height="1"></td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody></table>' },
        ];
    }
    DeviceComponent.prototype.ngOnInit = function () {
        console.log('component init');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeviceComponent.prototype, "src", void 0);
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/changelog/src/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.scss */ "./src/app/changelog/src/device/device.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/changelog/src/modal_dialog.css":
/*!************************************************!*\
  !*** ./src/app/changelog/src/modal_dialog.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng7-modal{\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0px;\r\n    z-index: 1000;\r\n    padding: 5% 29%;\r\n    background-color: rgba(0, 0, 0, 0.77);\r\n    height:100%;\r\n    display:none;\r\n}\r\n.ng7-modal-container{\r\n    background-color: white;\r\n    width: 47%;\r\n    padding: 20px;\r\n    border-radius: 7px;\r\n}\r\n.ng7-modal-body{\r\n    padding:15px;\r\n}\r\n.ng7-addtemplatemsg{\r\n    padding: 13px;\r\n    background-color: lightblue;\r\n    border-radius: 3px;\r\n    display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MatchHeightDirective.prototype, "matchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[matchHeight ]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());

var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [MatchHeightDirective],
            exports: [MatchHeightDirective]
        })
    ], MatchHeightModule);
    return MatchHeightModule;
}());



/***/ })

}]);
//# sourceMappingURL=changelog-changelog-module.js.map