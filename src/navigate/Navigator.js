/*
 * Copyright 2015-2017 WorldWind Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @exports Navigator
 */
define(['../util/Logger',
        '../LookAt'
    ],
    function (Logger,
              LookAt) {
        "use strict";

        /**
         * Constructs a base navigator.
         * @deprecated
         * @alias Navigator
         * @constructor
         * @classdesc Provides an abstract base class for navigators. This class is not meant to be instantiated
         * directly. Deprecated, see {@Link LookAt} and {@Link Camera}.
         * @param {WorldWindow} worldWindow The WorldWindow to associate with this navigator.
         */
        var Navigator = function (worldWindow) {
            if (!worldWindow) {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "Navigator", "constructor", "missingWorldWindow"));
            }

            this.wwd = worldWindow;

            this.scratchLookAt=new LookAt(this.wwd);
        };

        Object.defineProperties(Navigator.prototype, {
            /**
             * This navigator's heading, in degrees clockwise from north.
             * @type {Number}
             * @default 0
             */
            heading: {
                get: function () {
                    return this.wwd.getView().asLookAt(this.scratchLookAt).heading;
                },
                set: function (value) {
                    var view=this.wwd.getView().asLookAt(this.scratchLookAt);
                    view.heading = value;
                    this.wwd.setView(view);
                }
            },

            /**
             * This navigator's tilt, in degrees.
             * @type {Number}
             * @default 0
             */
            tilt: {
                get: function () {
                    return this.wwd.getView().asLookAt(this.scratchLookAt).tilt;
                },
                set: function (value) {
                    var view=this.wwd.getView().asLookAt(this.scratchLookAt);
                    view.tilt = value;
                    this.wwd.setView(view);
                }
            },

            /**
             * This navigator's roll, in degrees.
             * @type {Number}
             * @default 0
             */
            roll: {
                get: function () {
                    return this.wwd.getView().asLookAt(this.scratchLookAt).roll;
                },
                set: function (value) {
                    var view=this.wwd.getView().asLookAt(this.scratchLookAt);
                    view.roll = value;
                    this.wwd.setView(view);
                }
            }
        });

        return Navigator;
    });