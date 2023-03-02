import React from "react";

import { useGetMovie } from "../../hooks/useGetMovie";
import { DisplayDataType } from "../../Interfaces/Interface";

import {  Stack, TextField } from "@mui/material";
import {  Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { ErrorAlert } from "../Layout/ErrorAlert";

interface Props { 
  onMovieDataHandler: (data: DisplayDataType) => void,
  onMovieErrorHandler: (data: boolean) => void,
  onMovieLoadingHandler : (data:boolean) => void,
}

export const Form: React.FC<Props> = ({onMovieDataHandler, onMovieErrorHandler, onMovieLoadingHandler}) => {
  const [movieState, setMovieState] = React.useState<string>('')
  const [inputError, setInputError] = React.useState<boolean>(false)

  const { movieData, movieError, movieLoading, fetchMovieData } = useGetMovie();
    
  const onMovieSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (movieState.length <= 0) {
      setInputError(true)
      return
    }

    fetchMovieData(movieState)
    setMovieState('')
    setInputError(false)
  }

  React.useEffect(() => {
    movieData && onMovieDataHandler(movieData)
    movieError && onMovieErrorHandler(movieError)
    onMovieLoadingHandler(movieLoading)
  }, [movieData, movieError, movieLoading, onMovieDataHandler, onMovieErrorHandler, onMovieLoadingHandler])

  return <Stack gap={3} component={"form"} noValidate onSubmit={onMovieSubmitHandler}>
    <TextField id="outlined-basic" name="movie" onChange={(e) => setMovieState(e.target.value)} value={movieState} error={inputError} label="Search Movie..." variant="outlined" />
    {inputError &&  <ErrorAlert errorMessage="Invalid Input. Please make sure to enter more than 0 charcters." />}
    <LoadingButton loading={movieLoading} loadingPosition="start" variant="contained" startIcon={<Search />} type="submit" fullWidth>Search</LoadingButton>
  </Stack>;
};
