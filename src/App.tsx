import React, { useCallback } from 'react';

import { theme } from './Theme/theme';
import { Form } from './components/Form/Form';
import { SearchData } from './components/Search/SearchData';

import { ThemeProvider ,Container, CssBaseline, Typography, Stack } from '@mui/material';
import { TabDisplay } from './components/Display/TabDisplay';
import { DisplayDataType } from './Interfaces/Interface';



const App: React.FC = () => {
  const [movieData, setMovieData] = React.useState<DisplayDataType>()
  const [movieError, setMovieError] = React.useState<boolean>(false)
  const [movieLoading, setMovieLoading] = React.useState<boolean>(false);

  const [displayData, setDisplayData] = React.useState<DisplayDataType[]>([])

// Reciving data & error after submission
  const onMovieDataHandler = useCallback((data: DisplayDataType) => {
    setMovieData(data)
  }, [])

  const onMovieErrorHandler = useCallback((data: boolean) => {
    setMovieError(data)
  }, [])

  const onMovieLoadingHandler = useCallback(( data: boolean)  => {
    setMovieLoading(data)
  }, [])

  const onMovieClearHandler = () => {
    setMovieData(undefined)
  }

  const onAddMovieHandler = (data: DisplayDataType[]) => {
    setDisplayData(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ my: 2 }} >
        <Stack gap={5}>
          <Typography variant='h3' textAlign={"center"}>Your Very Own Movie PlayList</Typography>
          <Form
            onMovieDataHandler={onMovieDataHandler}
            onMovieErrorHandler={onMovieErrorHandler}
            onMovieLoadingHandler={onMovieLoadingHandler}
          />  

          <SearchData
            movieData={movieData}
            movieError={movieError}
            movieLoading={movieLoading}
            onAddMovieHandler={onAddMovieHandler}
            displayData={displayData}
            onMovieClearHandler={onMovieClearHandler}
          />

          <TabDisplay displayData={displayData} />
          
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
