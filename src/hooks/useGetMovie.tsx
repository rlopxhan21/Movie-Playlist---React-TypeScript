import React from 'react'
import axios from 'axios'

import { DisplayDataType } from '../Interfaces/Interface'

export const useGetMovie = () => {
    const [movieData, setMovieData] = React.useState<DisplayDataType>()
    const [movieError, setMovieError] = React.useState<boolean>(false)
    const [movieLoading, setMovieLoading] = React.useState<boolean>(false)

    const fetchMovieData = async (title: string) => {
        setMovieLoading(true)
        try {
            const response= await axios({
            method: 'GET',
            url: process.env.REACT_APP_BASE_URL + title,
            })

            setMovieData({ ...response.data, theme: 'undefined' })
            console.log(response.data)
            setMovieLoading(false)
        }
        catch (error) {
            setMovieLoading(false)
            setMovieError(true)

        }
    }

  return { movieData, movieError, movieLoading, fetchMovieData}
}
