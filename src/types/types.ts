export type zone = {
    id: number,
    name: string,
    icon: {
        id: number,
        fileName: string | null
    }
    suspended: boolean,
    status: {
        running: boolean
    }
}