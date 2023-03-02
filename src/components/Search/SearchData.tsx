import React from 'react'

import { DisplayDataType } from '../../Interfaces/Interface'
import { CardView } from './CardView'
import { SkeletonView } from '../Layout/SkeletonView'
import { ErrorAlert } from '../Layout/ErrorAlert'

import { Stack } from '@mui/material'

interface Props {
  movieData: DisplayDataType | undefined,
  movieError: boolean,
  movieLoading: boolean,
  onAddMovieHandler: (data: DisplayDataType[]) => void,
  displayData: DisplayDataType[],
  onMovieClearHandler: () => void
}

export const SearchData: React.FC<Props> = ({ movieData, movieError, movieLoading, onAddMovieHandler, displayData, onMovieClearHandler }) => {

    return (
      <Stack direction={"row"} justifyContent="center" flexWrap="wrap" gap={2} height={525} overflow="scroll">
        {!movieLoading &&  movieData?.Title && <CardView item={movieData} onAddMovieHandler={onAddMovieHandler} displayData={displayData} onMovieClearHandler={onMovieClearHandler} />}
        {movieLoading && <SkeletonView />}
        {movieLoading && <SkeletonView />}
        {movieLoading && <SkeletonView />}
        {movieData?.Error && <Stack width="100%" justifyContent={"center"}>
          <ErrorAlert errorMessage='API Error! Data Fetching Unsuccesful.' /></Stack>}
      </Stack>
  )
}
