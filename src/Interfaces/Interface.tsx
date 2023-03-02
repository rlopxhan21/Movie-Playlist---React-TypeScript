export interface MovieDataType {
    Title: string,
    Year: string,
    Rated: string,
    Relased: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: {
        Source: string,
        Value: string
    }[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    totalSeasons: string,
    Response: string,
}


export interface DisplayDataType extends MovieDataType {
    theme: string,
    Error: string

}

