/**
 * Descriptor for Java evaluation requests
 */ 
export declare interface ExecMsg {
    daaLogic: string; // full path of the executable (path is relative to daa-logic)
    daaConfig: string; // todo: need to decide if we want a standard forlder for the configurations. For now it's subfolder DAIDALUS/Configurations of the well clear logic
    scenarioName: string; // all scenarios are in folder daa-scenarios/
}

export declare interface PvsioMsg {
    //..
}
export declare interface WebSocketMessage<T> {
    type: string;
    time?: {
        client: { sent: string; },
        server?: { sent: string; }
    };
    id: string;
    data: T;
}

export declare interface LoadScenarioRequest {
    scenarioName: string;
}

export declare interface LoadConfigRequest {
    config: string;
}

// NOTE: strings are used in place of numbers to avoid loss of accuracy due to type conversion across different languages
export declare interface DAADataXYZ {
    time: string;
    name: string;
    lat: string;
    lon: string;
    alt: string;
    vx: string;
    vy: string;
    vz: string;
}

export declare interface DAADataTrkGsVs {
    time: string;
    name: string;
    lat: string;
    lon: string;
    alt: string;
    trk: string;
    gs: string;
    vs: string;
}

export declare interface LatLonAlt {
    lat: string;
    lon: string;
    alt: string;
}

export declare interface LatLon {
    lat: string;
    lon: string;
}

export declare interface Vector3D {
    x: string;
    y: string;
    z: string;
}

export declare interface LLAPosition {
    s: LatLonAlt;
    v: Vector3D;
    id: string;
}

export declare interface LLAData {
    ownship: LLAPosition;
    traffic: LLAPosition[];
}

// export declare interface DAAScenario {
//     ownship: DAAData;
//     traffic: DAAData[];
// }

export declare interface LbUb {
    lb: number,
    ub: number,
    units: string
}

export declare interface BandRange {
    0: number;
    1: number;
}

export declare interface DaidalusBand {
    range: BandRange;
    alert: string;
    units: string;
}

export declare interface DaidalusResolution {
    val: number;
    units: string;
    color: number;
}

export declare interface BandElement {
    time: number,
    bands?: DaidalusBand[],
    resolution?: DaidalusResolution
}

export declare interface AlertElement {
    time: number;
    alerts: { ac: string; alert: string }[];
}

export declare interface DaidalusBandsDescriptor {
    Info: {
        version: string, // well clear version
        configuration: string // daidalus configuration file used to produce bands data
    },
    Scenario: string,
    Alerts: AlertElement[]; // alerts over time
    "Heading Bands": BandElement[]; // bands over time
    "Horizontal Speed Bands": BandElement[];
    "Vertical Speed Bands": BandElement[];
    "Altitude Bands": BandElement[];
}

export declare interface DAALosSector {
    los: boolean;
    level: number;
    lat: string;
    lon: string;
    alt: string;
}
export declare interface DAALosRegion {
    ac: string;
    sectors: DAALosSector[];
}
export declare interface DAALosDescriptor {
    WellClear: {
        version: string,
        configuration: string
    },
    Scenario: string,
    Detector: string,
    AlertLevel: number,
    Grid: { sectorSize: number, sectorUnits: string, xmax: number, ymax: number },
    LoS: {
        time: number,
        conflicts: DAALosRegion[]
    }[]
}

export declare interface DAAScenario {
    scenarioName: string;
    length: number;
    steps: string[];
    daa: DAADataXYZ[];
    lla: { [time: string]: LLAData };
}

export declare interface DAAAlerts {
    
}

export declare interface BandIDs {
    hs: "horizontal-speed-bands",
    vs: "vertical-speed-bands",
    alt: "altitude-bands"
}

declare interface ConfigRange<_type> {
    "horizontal-speed": _type; // horizontal speed
    "vertical-speed": _type; // vertical speed
    "altitude": _type; // altitude
}


export declare interface ConfigData extends ConfigRange<{ from: string, to: string, units: string }> {
    "horizontal-speed": {
        from: string;
        to: string;
        units: string;
    };
    "vertical-speed": {
        from: string;
        to: string;
        units: string;
    };
    "altitude": {
        from: string;
        to: string;
        units: string;
    };
}

export declare interface ConfigFile extends ConfigData {
    fileContent: string;
    "horizontal-speed": {
        from: string;
        to: string;
        units: string;
    };
    "vertical-speed": {
        from: string;
        to: string;
        units: string;
    };
    "altitude": {
        from: string;
        to: string;
        units: string;
    };
}

