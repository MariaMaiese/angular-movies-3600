export interface Movie {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface ApiResult {
    Search: Movie[],
    totalResults: number,
    Response: boolean
}

export interface GifInfo {
    url: string,
    dims: any,
    size: number,
    preview: string
}

//export interface webm {
//    preview: string,
//    url: string
//}

export interface mediaInfo {
    mediumgif: any,
    gif: GifInfo,
    nanowebm: any,
    mp4: any,
    tinymp4: any,
    nanomp4: any,
    tinygif: any,
    loopedmp4: any,
    nanogif: any,
    webm: any,
    tinywebm: any


}

export interface Gif {
    id: number,
    title: string,
    content_description: string,
    content_rating: string,
    h1_title: string,
    media: mediaInfo[],
    itemurl: string,
    url: string
}

export interface ApiGifResult {
    results: Gif[],
    next: number

}
