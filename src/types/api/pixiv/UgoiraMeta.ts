// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface APIPixivUgoiraMeta {
    error:   boolean;
    message: string;
    body:    Body | never[];
}

export interface Body {
    src:         string;
    originalSrc: string;
    mime_type:   string;
    frames:      Frame[];
}

export interface Frame {
    file:  string;
    delay: number;
}