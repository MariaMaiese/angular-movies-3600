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

//export interface urlGif {
//    preview: string,
//    url: string
//}

export interface webm {
    preview: string,
    url: string
}

export interface GifInfo {
    //gif: urlGif,
    webm: webm

}

export interface Gif {
    id: number,
    title: string,
    content_description: string,
    content_rating: string,
    h1_title: string,
    media: GifInfo[],
    itemurl: string,
    url: string
}

export interface ApiGifResult {
    results: Gif[],
    next: number

}
