/*
 * Copyright 2003-2006, 2009, 2017, United States Government, as represented by the Administrator of the
 * National Aeronautics and Space Administration. All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License, Version 2.0 (the "License");
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
 * Illustrates how to add a custom annotation and enables the user to interactively modify its appearance.
 */
requirejs(['./WorldWindShim'],
    function (WorldWind) {
        "use strict";

        // Tell WorldWind to log only warnings and errors.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create a WorldWindow for the canvas.
        var wwd = new WorldWind.WorldWindow("canvasOne");

        // Use a REST elevation coverage rather than the defaults.
        var dted0 = new WorldWind.EarthRestElevationCoverage(null, "../standalonedata/Earth/DTED0");
        wwd.globe.elevationModel.removeAllCoverages();
        wwd.globe.elevationModel.addCoverage(dted0);

        // Add the REST Blue Marble layer that retrieves imagery from local standalone data.
        var blueMarble = new WorldWind.BMNGRestLayer(null, "../standalonedata/Earth/BlueMarble256/");
        wwd.addLayer(blueMarble);

        // Add the REST Landsat layer (this offline data covers only a sector of the globe in North America)
        var landSat = new WorldWind.LandsatRestLayer(null, "../standalonedata/Earth/Landsat");
        wwd.addLayer(landSat);

        // Add a compass, a coordinates display and some view controls to the WorldWindow.
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    });