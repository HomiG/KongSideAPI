export interface KongService {
    id?: string;
    name: string;
    host: string;
    port?: number;
    path?: string;
    tags?: string;
    connect_timeout?: number;
}

