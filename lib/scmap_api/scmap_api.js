/**
 * @name SCMapAPI
 * 
 * @version 0.1.0
 * 
 * @author Eric Kim (syusa5537@gmail.com)
 * 
 * @license Currently Undecided (현재 미정)
 * 
 * @description A StarCraft-related API designed to create, modify, save map and to be able to simplify utilizing SC map data.
 * -> 스타크래프트 게임의 맵을 생성, 수정, 저장하고 데이터 활용을 간편하게 할 수 있도록 설계된 API입니다.
 */

// Value Constants
const DEFAULT_TILE_WIDTH = 32; // the StarCraft's actual tile drawing width
const DEFAULT_TILE_HEIGHT = 32; // the StarCraft's actual tile drawing height
const DEFAULT_LOCATION_COLOR = "#123460";
const DEFAULT_LOCATION_ALPHA = 0.3;

// Declaration Constants
const __intValue = 0;
const __strValue = "";
const __imgValue = new Image();
const __arrValue = [];
const __2dArrValue = [[]];
const __objValue = {};
const __booleanValue = false;

// Object Constants
const SCTerrainList = {
    Badlands : "Badlands",
    SpacePlatform : "Space Platform",
    Installation : "Installation",
    AshWorld : "Ash World",
    JungleWorld : "Jungle World",
    DesertWorld : "Desert World",
    IceWorld : "Ice World",
    TwilightWorld : "Twilight World"
};

const SCTileList = {
    Badlands : { Null : "Null", Creep : "Creep", Dirt : "Dirt", HighDirt : "High Dirt", Water : "Water", Grass : "Grass", HighGrass : "High Grass", RockyGround : "Rocky Ground", Asphalt : "Asphalt", Structure : "Structure", Mud : "Mud" },
    SpacePlatform : { Null : "Null", Creep : "Creep", Space : "Space", Platform : "Platform", Plating : "Plating", HighPlatform : "High Platform", HighPlating : "High Plating", SolarArray : "Solar Array", LowPlatform : "Low Platform", DarkPlatform : "Dark Platform", RustyPit : "Rusty Pit", ElevatedCatwalk : "ElevatedCatwalk" },
    Installation : { Null : "Null", Substructure : "Substructure", SubstructurePlating : "Substructure Plating", Floor : "Floor", Roof : "Roof", Plating : "Plating", BottomlessPit : "Bottomless Pit", SubstructurePanels : "Substructure Panels" },
    AshWorld : { Null : "Null", Creep : "Creep", Dirt : "Dirt", Lava : "Lava", HighDirt : "High Dirt", HighLava : "High Lava", Shale : "Shale", HighShale : "High Shale", Magma : "Magma", BrokenRock : "Broken Rock" },
    JungleWorld : { Null : "Null", Creep : "Creep", Dirt : "Dirt", HighDirt : "High Dirt", Water : "Water", Jungle : "Jungle", RockyGround : "Rocky Ground", RaisedJungle : "Raised Jungle", Ruins : "Ruins", Temple : "Temple", HighJungle : "High Jungle", HighRuins : "High Ruins", HighRaisedJungle : "High Raised Jungle", HighTemple : "High Temple", Mud : "Mud" },
    DesertWorld : { Null : "Null", Creep : "Creep", Tar : "Tar", Dirt : "Dirt", DriedMud : "Dried Mud", SandDunes : "Sand Dunes", RockyGround : "Rocky Ground", Crags : "Crags", SandySunkenPit : "Sandy Sunken Pit", Compound : "Compound", HighDirt : "High Dirt", HighSandDunes : "High Sand Dunes", HighCrags : "High Crags", HighSandySunkenPit : "High Sandy Sunken Pit", HighCompound : "High Compound" },
    IceWorld : { Null : "Null", Creep : "Creep", Ice : "Ice", Snow : "Snow", Moguls : "Moguls", Dirt : "Dirt", RockySnow : "Rocky Snow", Grass : "Grass", Water : "Water", Outpost : "Outpost", HighSnow : "High Snow", HighDirt : "High Dirt", HighGrass : "High Grass", HighWater : "High Water", HighOutpost : "High Outpost" },
    TwilightWorld : { Null : "Null", Creep : "Creep", Water : "Water", Dirt : "Dirt", Mud : "Mud", CrushedRock : "Crushed Rock", Crevices : "Crevices", Flagstones : "Flagstones", SunkenGround : "Sunken Ground", Basilica : "Basilica", HighDirt : "High Dirt", HighCrushedRock : "High Crushed Rock", HighFlagstones : "High Flagstones", HighSunkenGround : "High Sunken Ground", HighBasilica : "High Basilica" }
};

// API
const SCMapAPI = {
    getImgPath : function() { return getCurrentScriptPath() + "image/"; },
    getTilesetPath : function() { return this.getImgPath() + "tileset/"; },
    openFile : function(fileEvent, onSuccess, onFailure) {},
    drawTile : function(canvasContext, gridWidth, gridHeight, tile, posX, posY, lenX, lenY) {},
    drawLocation : function(canvasContext, gridWidth, gridHeight, location) {},
    drawGridLines : function(canvasContext, gridWidth, gridHeight, posX, posY, lenX, lenY) {}
};

// Classes (Modified After Declaration)
var SCTile = function(terrain, param1, param2) {
    this.baseTileset = __imgValue; // tilset which it is based on
    this.alias = __strValue; // tile name (ex : dirt, mud, water, ...)
    this.byteCode = __arrValue; // the actual byte code used in .chk file
};
SCTile.prototype.width = __intValue;
SCTile.prototype.height = __intValue;
SCTile.prototype.getDrawingInfo = function() { return new SCDrawingInfo(); }; // returns an one-dimensional array of length 2 which has x, y values

var SCLocation = function(label, posX, posY, lenX, lenY) {
    this.label = __strValue;
    this.getLeft = function(gridWidth) { return __intValue; };
    this.getTop = function(gridHeight) { return __intValue; };
    this.getRight = function(gridWidth) { return __intValue; };
    this.getBottom = function(gridHeight) { return __intValue; };
    this.selected = __booleanValue;
    this.flags = __objValue;
};

// Structures (Not Modified After Declaration)
const SCDrawingInfo = function(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

// Helper Functions
var getCurrentScriptPath = function () { // only works the first time this script runs
    var scripts = document.querySelectorAll("script[src]");
    var currentScript = scripts[scripts.length - 1].src;
    var chunks = currentScript.split("/");
    var filename = chunks[chunks.length - 1];

    return currentScript.replace(filename, "");
};

// Main Function
(function() {
    const Tileset = {
        Badlands : new Image(),
        SpacePlatform : new Image(),
        Installation : new Image(),
        AshWorld : new Image(),
        JungleWorld : new Image(),
        DesertWorld : new Image(),
        IceWorld : new Image(),
        TwilightWorld : new Image()
    };

    (function _init() {
        loadTilesetImages();
    })();

    SCMapAPI.openFile = function(fileEvent, onSuccess, onFailure) {
        var file = fileEvent.target.files[0];
        var reader = new FileReader();
        reader.onload = function() { handleFileContent(reader.result, onSuccess) };
        reader.onerror = function(errorEvent) { onFailure(errorEvent.message); };
        reader.readAsArrayBuffer(file);
    };

    SCMapAPI.drawTile = function(canvasContext, gridWidth, gridHeight, tile, posX, posY, lenX, lenY) {
        canvasContext.globalAlpha = 0.98;
        var tileInfo = tile.getDrawingInfo();
        if (lenX === undefined || lenY === undefined) {
            canvasContext.drawImage(tile.baseTileset, tileInfo.x, tileInfo.y, tileInfo.width, tileInfo.height, posX * gridWidth, posY * gridHeight, gridWidth, gridHeight);
        }
        else {
            for (var i = 0; i < lenY; i++) {
                for (var j = 0; j < lenX; j++) {
                    canvasContext.drawImage(tile.baseTileset, tileInfo.x, tileInfo.y, tileInfo.width, tileInfo.height, (posX + j) * gridWidth, (posY + i) * gridHeight, gridWidth, gridHeight);
                }
            }
        }
    };

    SCMapAPI.drawLocation = function(canvasContext, gridWidth, gridHeight, location, hexColorStr, alphaVal) {
        var left = location.getLeft(gridWidth);
        var top = location.getTop(gridHeight);
        var right = location.getRight(gridWidth);
        var bottom = location.getBottom(gridHeight);

        canvasContext.globalAlpha = (alphaVal === undefined) ? DEFAULT_LOCATION_ALPHA : alphaVal;
        canvasContext.fillStyle = (hexColorStr === undefined) ? DEFAULT_LOCATION_COLOR : hexColorStr;
        canvasContext.fillRect(left, top, right - left, bottom - top);
    
        canvasContext.globalAlpha = 1.0;
        canvasContext.lineWidth = 0.2;
        canvasContext.rect(left, top, right - left, bottom - top);
        canvasContext.stroke();
    
        var fontSize = 10, paddingLeft = 3, paddingTop = 3;
        canvasContext.font = fontSize + "px palatino";
        canvasContext.fillStyle = "#10fc18";
        canvasContext.fillText(location.label, left + paddingLeft, top + fontSize + paddingTop);
    };

    SCMapAPI.drawGridLines = function(canvasContext, gridWidth, gridHeight, posX, posY, lenX, lenY) {
        canvasContext.lineWidth = 0.5;
        canvasContext.beginPath();
        for (var i = 1; i < lenY; i++) {
            canvasContext.moveTo(0, i * gridHeight);
            canvasContext.lineTo(lenX * gridWidth, i * gridHeight);
        }
        for (var i = 1; i < lenX; i++) {
            canvasContext.moveTo(i * gridWidth, 0);
            canvasContext.lineTo(i * gridWidth, lenY * gridHeight);
        }
        canvasContext.closePath();
        canvasContext.stroke();
    };

    SCTile = function(terrain, param1, param2) {
        // if param2 is not defined, then param1 is the tile's alias
        // else param1 and param2 is the actual byte code for that tile based on CHK structure
        this.baseTileset = getBaseTileset(terrain);

        if (param2 === undefined) {
            this.alias = param1;
            this.byteCode = getTileByteCodeFromAlias(this.baseTileset, this.alias);
        }
        else {
            this.byteCode = [param1, param2];
            this.alias = getTileAliasFromByteCode(this.baseTileset, this.byteCode);
        }
    };
    SCTile.prototype.width = DEFAULT_TILE_WIDTH;
    SCTile.prototype.height = DEFAULT_TILE_HEIGHT;
    SCTile.prototype.getDrawingInfo = function() {
        return new SCDrawingInfo(this.byteCode[0] % 16, parseInt(this.byteCode[0] / 16) * DEFAULT_TILE_HEIGHT + this.byteCode[1] * (DEFAULT_TILE_HEIGHT * 16), this.width, this.height);
    };

    SCLocation = function(label, posX, posY, lenX, lenY) {
        this.label = label;
        this.getLeft = function(gridWidth) { return posX * gridWidth; };
        this.getTop = function(gridHeight) { return posY * gridHeight; };
        this.getRight = function(gridWidth) { return this.getLeft(gridWidth) + lenX * gridWidth; };
        this.getBottom = function(gridHeight) { return this.getTop(gridHeight) + lenY * gridHeight; };
        this.selected = false;
        this.flags = {
            lowGround : true,
            medGround : true,
            highGround : true,
            lowAir : true,
            medAir : true,
            highAir : true
        };
    };

    function loadTilesetImages() {
        Tileset.Badlands = loadImage(512, 512, SCMapAPI.getTilesetPath() + "badlands.png");
        Tileset.SpacePlatform = loadImage(512, 512, SCMapAPI.getTilesetPath() + "space_platform.png");
        Tileset.Installation = loadImage(512, 512, SCMapAPI.getTilesetPath() + "installation.png");
        Tileset.AshWorld = loadImage(512, 512, SCMapAPI.getTilesetPath() + "ash_world.png");
        Tileset.JungleWorld = loadImage(512, 512, SCMapAPI.getTilesetPath() + "jungle_world.png");
        Tileset.DesertWorld = loadImage(512, 512, SCMapAPI.getTilesetPath() + "desert_world.png");
        Tileset.IceWorld = loadImage(512, 512, SCMapAPI.getTilesetPath() + "ice_world.png");
        Tileset.TwilightWorld = loadImage(512, 512, SCMapAPI.getTilesetPath() + "twilight_world.png");
    }

    function loadImage(width, height, url) {
        var image = new Image(width, height);
        image.src = url;
        return image;
    }

    function handleFileContent(mpqArrayBuffer, callback) {
        // TODO : Contents should be defined
    }

    function getBaseTileset(terrain) {
        var value;

        switch (terrain) {
            case SCTerrainList.Badlands:
                value = Tileset.Badlands;
                break;
            case SCTerrainList.SpacePlatform:
                value = Tileset.SpacePlatform;
                break;
            case SCTerrainList.Installation:
                value = Tileset.Installation;
                break;
            case SCTerrainList.AshWorld:
                value = Tileset.AshWorld;
                break;
            case SCTerrainList.JungleWorld:
                value = Tileset.JungleWorld;
                break;
            case SCTerrainList.DesertWorld:
                value = Tileset.DesertWorld;
                break;
            case SCTerrainList.IceWorld:
                value = Tileset.IceWorld;
                break;
            case SCTerrainList.TwilightWorld:
                value = Tileset.TwilightWorld;
                break;
        }

        return value;
    }

    function getTileByteCodeFromAlias(baseTileset, alias) {
        var value;

        if (baseTileset == Tileset.Badlands) {
            switch (alias) {
                case SCTileList.Badlands.Null: value = [0x00, 0x00]; break;
                case SCTileList.Badlands.Creep: value = [0x10, 0x00]; break;
                case SCTileList.Badlands.Dirt: value = [0x20, 0x00]; break;
                case SCTileList.Badlands.HighDirt: value = [0x40, 0x00]; break;
                case SCTileList.Badlands.Water: value = [0x60, 0x00]; break;
                case SCTileList.Badlands.Grass: value = [0x80, 0x00]; break;
                case SCTileList.Badlands.HighGrass: value = [0xA0, 0x00]; break;
                case SCTileList.Badlands.RockyGround: value = [0xC0, 0x00]; break;
                case SCTileList.Badlands.Asphalt: value = [0x00, 0x01]; break;
                case SCTileList.Badlands.Structure: value = [0x20, 0x01]; break;
                case SCTileList.Badlands.Mud: value = [0x40, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.SpacePlatform) {
            switch (alias) {
                case SCTileList.SpacePlatform.Null: value = [0x00, 0x00]; break;
                case SCTileList.SpacePlatform.Creep: value = [0x10, 0x00]; break;
                case SCTileList.SpacePlatform.Space: value = [0x20, 0x00]; break;
                case SCTileList.SpacePlatform.Platform: value = [0x40, 0x00]; break;
                case SCTileList.SpacePlatform.Plating: value = [0x60, 0x00]; break;
                case SCTileList.SpacePlatform.HighPlatform: value = [0x80, 0x00]; break;
                case SCTileList.SpacePlatform.HighPlating: value = [0xA0, 0x00]; break;
                case SCTileList.SpacePlatform.SolarArray: value = [0xC0, 0x00]; break;
                case SCTileList.SpacePlatform.LowPlatform: value = [0xE0, 0x00]; break;
                case SCTileList.SpacePlatform.DarkPlatform: value = [0x00, 0x01]; break;
                case SCTileList.SpacePlatform.RustyPit: value = [0x20, 0x01]; break;
                case SCTileList.SpacePlatform.ElevatedCatwalk: value = [0x40, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.Installation) {
            switch (alias) {
                case SCTileList.Installation.Null: value = [0x00, 0x00]; break;
                case SCTileList.Installation.Substructure: value = [0x20, 0x00]; break;
                case SCTileList.Installation.SubstructurePlating: value = [0x40, 0x00]; break;
                case SCTileList.Installation.Floor: value = [0x60, 0x00]; break;
                case SCTileList.Installation.Roof: value = [0x80, 0x00]; break;
                case SCTileList.Installation.Plating: value = [0xA0, 0x00]; break;
                case SCTileList.Installation.BottomlessPit: value = [0xC0, 0x00]; break;
                case SCTileList.Installation.SubstructurePanels: value = [0xE0, 0x00]; break;
            }
        }
        else if (baseTileset == Tileset.AshWorld) {
            switch (alias) {
                case SCTileList.AshWorld.Null: value = [0x00, 0x00]; break;
                case SCTileList.AshWorld.Creep: value = [0x10, 0x00]; break;
                case SCTileList.AshWorld.Dirt: value = [0x20, 0x00]; break;
                case SCTileList.AshWorld.Lava: value = [0x40, 0x00]; break;
                case SCTileList.AshWorld.HighDirt: value = [0x60, 0x00]; break;
                case SCTileList.AshWorld.HighLava: value = [0x80, 0x00]; break;
                case SCTileList.AshWorld.Shale: value = [0xA0, 0x00]; break;
                case SCTileList.AshWorld.HighShale: value = [0xC0, 0x00]; break;
                case SCTileList.AshWorld.Magma: value = [0xE0, 0x00]; break;
                case SCTileList.AshWorld.BrokenRock: value = [0x00, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.JungleWorld) {
            switch (alias) {
                case SCTileList.JungleWorld.Null: value = [0x00, 0x00]; break;
                case SCTileList.JungleWorld.Creep: value = [0x10, 0x00]; break;
                case SCTileList.JungleWorld.Dirt: value = [0x20, 0x00]; break;
                case SCTileList.JungleWorld.HighDirt: value = [0x40, 0x00]; break;
                case SCTileList.JungleWorld.Water: value = [0x60, 0x00]; break;
                case SCTileList.JungleWorld.Jungle: value = [0x80, 0x00]; break;
                case SCTileList.JungleWorld.RockyGround: value = [0xA0, 0x00]; break;
                case SCTileList.JungleWorld.RaisedJungle: value = [0xC0, 0x00]; break;
                case SCTileList.JungleWorld.Ruins: value = [0xE0, 0x00]; break;
                case SCTileList.JungleWorld.Temple: value = [0x00, 0x01]; break;
                case SCTileList.JungleWorld.HighJungle: value = [0x20, 0x01]; break;
                case SCTileList.JungleWorld.HighRuins: value = [0x40, 0x01]; break;
                case SCTileList.JungleWorld.HighRaisedJungle: value = [0x60, 0x01]; break;
                case SCTileList.JungleWorld.HighTemple: value = [0x80, 0x01]; break;
                case SCTileList.JungleWorld.Mud: value = [0xA0, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.DesertWorld) {
            switch (alias) {
                case SCTileList.DesertWorld.Null: value = [0x00, 0x00]; break;
                case SCTileList.DesertWorld.Creep: value = [0x10, 0x00]; break;
                case SCTileList.DesertWorld.Dirt: value = [0x20, 0x00]; break;
                case SCTileList.DesertWorld.HighDirt: value = [0x40, 0x00]; break;
                case SCTileList.DesertWorld.Tar: value = [0x60, 0x00]; break;
                case SCTileList.DesertWorld.SandDunes: value = [0x80, 0x00]; break;
                case SCTileList.DesertWorld.RockyGround: value = [0xA0, 0x00]; break;
                case SCTileList.DesertWorld.SandySunkenPit: value = [0xC0, 0x00]; break;
                case SCTileList.DesertWorld.Crags: value = [0xE0, 0x00]; break;
                case SCTileList.DesertWorld.Compound: value = [0x00, 0x01]; break;
                case SCTileList.DesertWorld.HighSandDunes: value = [0x20, 0x01]; break;
                case SCTileList.DesertWorld.HighCrags: value = [0x40, 0x01]; break;
                case SCTileList.DesertWorld.HighSandySunkenPit: value = [0x60, 0x01]; break;
                case SCTileList.DesertWorld.HighCompound: value = [0x80, 0x01]; break;
                case SCTileList.DesertWorld.DriedMud: value = [0xA0, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.IceWorld) {
            switch (alias) {
                case SCTileList.IceWorld.Null: value = [0x00, 0x00]; break;
                case SCTileList.IceWorld.Creep: value = [0x10, 0x00]; break;
                case SCTileList.IceWorld.Snow: value = [0x20, 0x00]; break;
                case SCTileList.IceWorld.HighSnow: value = [0x40, 0x00]; break;
                case SCTileList.IceWorld.Ice: value = [0x60, 0x00]; break;
                case SCTileList.IceWorld.Dirt: value = [0x80, 0x00]; break;
                case SCTileList.IceWorld.RockySnow: value = [0xA0, 0x00]; break;
                case SCTileList.IceWorld.Water: value = [0xC0, 0x00]; break;
                case SCTileList.IceWorld.Grass: value = [0xE0, 0x00]; break;
                case SCTileList.IceWorld.Outpost: value = [0x00, 0x01]; break;
                case SCTileList.IceWorld.HighDirt: value = [0x20, 0x01]; break;
                case SCTileList.IceWorld.HighGrass: value = [0x40, 0x01]; break;
                case SCTileList.IceWorld.HighWater: value = [0x60, 0x01]; break;
                case SCTileList.IceWorld.HighOutpost: value = [0x80, 0x01]; break;
                case SCTileList.IceWorld.Moguls: value = [0xA0, 0x01]; break;
            }
        }
        else if (baseTileset == Tileset.TwilightWorld) {
            switch (alias) {
                case SCTileList.TwilightWorld.Null: value = [0x00, 0x00]; break;
                case SCTileList.TwilightWorld.Creep: value = [0x10, 0x00]; break;
                case SCTileList.TwilightWorld.Dirt: value = [0x20, 0x00]; break;
                case SCTileList.TwilightWorld.HighDirt: value = [0x40, 0x00]; break;
                case SCTileList.TwilightWorld.Water: value = [0x60, 0x00]; break;
                case SCTileList.TwilightWorld.CrushedRock: value = [0x80, 0x00]; break;
                case SCTileList.TwilightWorld.Crevices: value = [0xA0, 0x00]; break;
                case SCTileList.TwilightWorld.SunkenGround: value = [0xC0, 0x00]; break;
                case SCTileList.TwilightWorld.Flagstones: value = [0xE0, 0x00]; break;
                case SCTileList.TwilightWorld.Basilica: value = [0x00, 0x01]; break;
                case SCTileList.TwilightWorld.HighCrushedRock: value = [0x20, 0x01]; break;
                case SCTileList.TwilightWorld.HighFlagstones: value = [0x40, 0x01]; break;
                case SCTileList.TwilightWorld.HighSunkenGround: value = [0x60, 0x01]; break;
                case SCTileList.TwilightWorld.HighBasilica: value = [0x80, 0x01]; break;
                case SCTileList.TwilightWorld.Mud: value = [0xA0, 0x01]; break;
            }
        }

        return value;
    }

    function getTileAliasFromByteCode(baseTileset, byteCode) {
        var value;

        if (baseTileset == Tileset.Badlands) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.Badlands.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.Badlands.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x28) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x2A && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x38) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x3A && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.Dirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.HighDirt; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.Water; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x86) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x88 && byteCode[0] <= 0x8A) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x96) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x98 && byteCode[0] <= 0x9A) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.Grass; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA6) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xA8 && byteCode[0] <= 0xAA) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB6) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB8 && byteCode[0] <= 0xBA) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.HighGrass; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xCB) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xDB) && byteCode[1] == 0x00)) { value = SCTileList.Badlands.Water; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x05) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x07 && byteCode[0] <= 0x0C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x15) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x17 && byteCode[0] <= 0x1C) && byteCode[1] == 0x01)) { value = SCTileList.Badlands.Asphalt; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x25) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x27 && byteCode[0] <= 0x2C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x35) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x37 && byteCode[0] <= 0x3C) && byteCode[1] == 0x01)) { value = SCTileList.Badlands.Structure; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x01)) { value = SCTileList.Badlands.Mud; }
        }
        else if (baseTileset == Tileset.SpacePlatform) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.SpacePlatform.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.SpacePlatform.Creep; }
            else if ((byteCode[0] == 0x20 && byteCode[1] == 0x00) || (byteCode[0] == 0x30 && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.Space; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x47 && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x57 && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.Platform; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x67 && byteCode[0] <= 0x6E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x77 && byteCode[0] <= 0x7E) && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.Plating; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x85) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x87 && byteCode[0] <= 0x8E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x95) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x97 && byteCode[0] <= 0x9E) && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.HighPlatform; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xA7 && byteCode[0] <= 0xAE) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB7 && byteCode[0] <= 0xBE) && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.HighPlating; }
            else if ((byteCode[0] == 0xC0 && byteCode[1] == 0x00) || (byteCode[0] == 0xD0 && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.SolarArray; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE7 && byteCode[0] <= 0xEE) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF7 && byteCode[0] <= 0xFE) && byteCode[1] == 0x00)) { value = SCTileList.SpacePlatform.LowPlatform; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x05) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x07 && byteCode[0] <= 0x0E) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x15) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x17 && byteCode[0] <= 0x1E) && byteCode[1] == 0x01)) { value = SCTileList.SpacePlatform.DarkPlatform; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x29) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x39) && byteCode[1] == 0x01)) { value = SCTileList.SpacePlatform.RustyPit; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x43) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x45 && byteCode[0] <= 0x46) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x53) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x55 && byteCode[0] <= 0x56) && byteCode[1] == 0x01)) { value = SCTileList.SpacePlatform.DarkPlatform; }
        }
        else if (baseTileset == Tileset.Installation) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.Installation.Null; }
            else if ((byteCode[0] == 0x20 && byteCode[1] == 0x00) || (byteCode[0] == 0x28 && byteCode[1] == 0x00) || (byteCode[0] == 0x30 && byteCode[1] == 0x00)) { value = SCTileList.Installation.Substructure; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x00)) { value = SCTileList.Installation.SubstructurePlating; }
            else if ((byteCode[0] == 0x60 && byteCode[1] == 0x00) || (byteCode[0] == 0x70 && byteCode[1] == 0x00)) { value = SCTileList.Installation.Floor; }
            else if ((byteCode[0] == 0x80 && byteCode[1] == 0x00) || (byteCode[0] == 0x90 && byteCode[1] == 0x00)) { value = SCTileList.Installation.Roof; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB5) && byteCode[1] == 0x00)) { value = SCTileList.Installation.Plating; }
            else if ((byteCode[0] == 0xC0 && byteCode[1] == 0x00) || (byteCode[0] == 0xD0 && byteCode[1] == 0x00)) { value = SCTileList.Installation.BottomlessPit; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE3) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF3) && byteCode[1] == 0x00)) { value = SCTileList.Installation.SubstructurePanels; }
        }
        else if (baseTileset == Tileset.AshWorld) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.AshWorld.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.AshWorld.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x27) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x29 && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x37) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x39 && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.Dirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x49) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x59) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.Lava; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x67) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x69 && byteCode[0] <= 0x6E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x77) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x79 && byteCode[0] <= 0x7E) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.HighDirt; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x89) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x99) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.HighLava; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xA9 && byteCode[0] <= 0xAA) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB9 && byteCode[0] <= 0xBA) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.Shale; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xC7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xC9 && byteCode[0] <= 0xCA) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xD7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD9 && byteCode[0] <= 0xDA) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.HighShale; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE9 && byteCode[0] <= 0xEE) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF7) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF9 && byteCode[0] <= 0xFE) && byteCode[1] == 0x00)) { value = SCTileList.AshWorld.Magma; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x0C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x01)) { value = SCTileList.AshWorld.BrokenRock; }
        }
        else if (baseTileset == Tileset.JungleWorld) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.JungleWorld.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.JungleWorld.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x28) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x2A && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x38) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x3A && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.Dirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.HighDirt; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.Water; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x85) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x87 && byteCode[0] <= 0x8C) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x95) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x97 && byteCode[0] <= 0x9C) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.Jungle; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xAB) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xBB) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.RockyGround; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xC5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xC7 && byteCode[0] <= 0xCC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xD5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD7 && byteCode[0] <= 0xDC) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.RaisedJungle; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE7 && byteCode[0] <= 0xEC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF7 && byteCode[0] <= 0xFC) && byteCode[1] == 0x00)) { value = SCTileList.JungleWorld.Ruins; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x04) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x14) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.Temple; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x25) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x27 && byteCode[0] <= 0x2C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x35) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x37 && byteCode[0] <= 0x3C) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.HighJungle; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x47 && byteCode[0] <= 0x4C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x57 && byteCode[0] <= 0x5C) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.HighRuins; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x67 && byteCode[0] <= 0x6C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x77 && byteCode[0] <= 0x7C) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.HighRaisedJungle; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x84) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x94) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.HighTemple; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xAA && byteCode[0] <= 0xAE) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xBA && byteCode[0] <= 0xBE) && byteCode[1] == 0x01)) { value = SCTileList.JungleWorld.Mud; }
        }
        else if (baseTileset == Tileset.DesertWorld) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.DesertWorld.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.DesertWorld.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x28) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x2A && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x38) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x3A && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.Dirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.HighDirt; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x62) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x64 && byteCode[0] <= 0x66) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x72) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x74 && byteCode[0] <= 0x76) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.Tar; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x85) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x87 && byteCode[0] <= 0x8C) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x95) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x97 && byteCode[0] <= 0x9C) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.SandDunes; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xAB) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xBB) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.RockyGround; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xC5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xC7 && byteCode[0] <= 0xCC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xD5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD7 && byteCode[0] <= 0xDC) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.SandySunkenPit; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE7 && byteCode[0] <= 0xEC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF7 && byteCode[0] <= 0xFC) && byteCode[1] == 0x00)) { value = SCTileList.DesertWorld.Crags; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x04) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x14) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.Compound; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x25) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x27 && byteCode[0] <= 0x2C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x35) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x37 && byteCode[0] <= 0x3C) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.HighSandDunes; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x47 && byteCode[0] <= 0x4C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x57 && byteCode[0] <= 0x5C) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.HighCrags; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x67 && byteCode[0] <= 0x6C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x77 && byteCode[0] <= 0x7C) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.HighSandySunkenPit; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x84) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x94) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.HighCompound; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xAA && byteCode[0] <= 0xAE) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xBA && byteCode[0] <= 0xBE) && byteCode[1] == 0x01)) { value = SCTileList.DesertWorld.DriedMud; }
        }
        else if (baseTileset == Tileset.IceWorld) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.IceWorld.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.IceWorld.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x28) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x2A && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x38) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x3A && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.Snow; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.HighSnow; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x67 && byteCode[0] <= 0x6C) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x77 && byteCode[0] <= 0x7C) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.Ice; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x85) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x87 && byteCode[0] <= 0x8C) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x95) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x97 && byteCode[0] <= 0x9C) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.Dirt; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xA7 && byteCode[0] <= 0xAC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB7 && byteCode[0] <= 0xBC) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.RockySnow; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xC5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xD5) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.Water; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE7 && byteCode[0] <= 0xEC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF7 && byteCode[0] <= 0xFC) && byteCode[1] == 0x00)) { value = SCTileList.IceWorld.Grass; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x02) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x04 && byteCode[0] <= 0x05) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x12) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x14 && byteCode[0] <= 0x15) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.Outpost; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x25) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x27 && byteCode[0] <= 0x2C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x35) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x37 && byteCode[0] <= 0x3C) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.HighDirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x47 && byteCode[0] <= 0x4C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x57 && byteCode[0] <= 0x5C) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.HighGrass; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.HighWater; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x82) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x84 && byteCode[0] <= 0x85) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x92) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x94 && byteCode[0] <= 0x95) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.HighOutpost; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA5) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xA7 && byteCode[0] <= 0xAE) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB5) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xB7 && byteCode[0] <= 0xBE) && byteCode[1] == 0x01)) { value = SCTileList.IceWorld.Moguls; }
        }
        else if (baseTileset == Tileset.TwilightWorld) {
            if (byteCode[0] == 0x00 && byteCode[1] == 0x00) { value = SCTileList.TwilightWorld.Null; }
            else if ((byteCode[0] >= 0x10 && byteCode[0] <= 0x1C) && byteCode[1] == 0x00) { value = SCTileList.TwilightWorld.Creep; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x27) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x29 && byteCode[0] <= 0x2E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x37) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x39 && byteCode[0] <= 0x3E) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.Dirt; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x48) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x4A && byteCode[0] <= 0x4E) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x58) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x5A && byteCode[0] <= 0x5E) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.HighDirt; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.Water; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x85) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x87 && byteCode[0] <= 0x8C) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x95) && byteCode[1] == 0x00) || ((byteCode[0] >= 0x97 && byteCode[0] <= 0x9C) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.CrushedRock; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xAB) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xBB) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.Crevices; }
            else if (((byteCode[0] >= 0xC0 && byteCode[0] <= 0xC5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xC7 && byteCode[0] <= 0xCC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD0 && byteCode[0] <= 0xD5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xD7 && byteCode[0] <= 0xDC) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.SunkenGround; }
            else if (((byteCode[0] >= 0xE0 && byteCode[0] <= 0xE5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xE7 && byteCode[0] <= 0xEC) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF0 && byteCode[0] <= 0xF5) && byteCode[1] == 0x00) || ((byteCode[0] >= 0xF7 && byteCode[0] <= 0xFC) && byteCode[1] == 0x00)) { value = SCTileList.TwilightWorld.Flagstones; }
            else if (((byteCode[0] >= 0x00 && byteCode[0] <= 0x04) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x10 && byteCode[0] <= 0x14) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.Basilica; }
            else if (((byteCode[0] >= 0x20 && byteCode[0] <= 0x25) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x27 && byteCode[0] <= 0x2C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x30 && byteCode[0] <= 0x35) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x37 && byteCode[0] <= 0x3C) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.HighCrushedRock; }
            else if (((byteCode[0] >= 0x40 && byteCode[0] <= 0x45) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x47 && byteCode[0] <= 0x4C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x50 && byteCode[0] <= 0x55) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x57 && byteCode[0] <= 0x5C) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.HighFlagstones; }
            else if (((byteCode[0] >= 0x60 && byteCode[0] <= 0x65) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x67 && byteCode[0] <= 0x6C) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x70 && byteCode[0] <= 0x75) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x77 && byteCode[0] <= 0x7C) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.HighSunkenGround; }
            else if (((byteCode[0] >= 0x80 && byteCode[0] <= 0x84) && byteCode[1] == 0x01) || ((byteCode[0] >= 0x90 && byteCode[0] <= 0x94) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.HighBasilica; }
            else if (((byteCode[0] >= 0xA0 && byteCode[0] <= 0xA8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xAA && byteCode[0] <= 0xAE) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xB0 && byteCode[0] <= 0xB8) && byteCode[1] == 0x01) || ((byteCode[0] >= 0xBA && byteCode[0] <= 0xBE) && byteCode[1] == 0x01)) { value = SCTileList.TwilightWorld.Mud; }
        }

        return value;
    }
})();