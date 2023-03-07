import React from "react";

import {
  Button,
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
  onDeleteDisplayData: (imdbID: string) => void

}

export const DisplayCard: React.FC<Props> = ({ item, onDeleteDisplayData }) => {
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
      <Stack px={2}>
        <Button variant="contained" color="error" onClick={() => onDeleteDisplayData(item.imdbID)}>Delete</Button>
      </Stack>
    </Card>
  );
};
