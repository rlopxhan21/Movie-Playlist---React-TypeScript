import React from "react";

import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { DisplayDataType } from "../../Interfaces/Interface";

interface Props {
  item: DisplayDataType,
  onAddMovieHandler: (data: DisplayDataType[]) => void,
  displayData: DisplayDataType[],
  onMovieClearHandler: () => void

}

export const CardView: React.FC<Props> = ({ item, onAddMovieHandler, displayData, onMovieClearHandler }) => {
  const onBtnClickedHandler = (newValue: string) => {
    item.theme = newValue
    onAddMovieHandler([...displayData, item])
    onMovieClearHandler()
  }

  return (
    <Card sx={{ width: 350, pb: 2 }}>
      <CardMedia
        component={"img"}
        alt="No Image Found"
        width={200}
        height={200}
        image={item.Poster}
      />
      <CardContent sx={{ mb: 2 }}>
        <Typography variant="button" fontSize={18}>
          {item.Title}
        </Typography>
        <Typography variant="body2" my={2}>
          {item.Plot}
        </Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography variant="button">{item.Year}</Typography>
          <Rating
            name="size-small"
            defaultValue={(+item.imdbRating * 5) / 10}
            precision={0.5}
            readOnly
          />
        </Stack>
      </CardContent>
      <Stack gap={1} mx={1}>
        <ButtonGroup
          variant="outlined"
          fullWidth
          aria-label="outlined primary button group"
        >
          <Button onClick={() => onBtnClickedHandler("funny")}>Funny</Button>
          <Button onClick={() => onBtnClickedHandler("romantic")}>Romantic</Button>
          <Button onClick={() => onBtnClickedHandler("thrilling")}>Thrilling</Button>
        </ButtonGroup>

        <ButtonGroup
          variant="outlined"
          fullWidth
          aria-label="outlined primary button group"
        >
          <Button onClick={() => onBtnClickedHandler("dark")}>Dark</Button>
          <Button onClick={() => onBtnClickedHandler("weird")}>Weird</Button>
          <Button onClick={() => onBtnClickedHandler("slow")}>Slow</Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
};
