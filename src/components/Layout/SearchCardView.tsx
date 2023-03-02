import React from 'react'

import { CardView } from '../Search/CardView'
import { MovieDataType } from '../../Interfaces/Interface'

import { Button, ButtonGroup, Stack } from '@mui/material'

interface Props {
    item: MovieDataType
}

export const SearchCardView: React.FC<Props> = ({item}) => {
  return (
        // <CardView item={item}>
                <Stack gap={1} mx={1}>
                    <ButtonGroup variant="outlined" fullWidth aria-label="outlined primary button group">
                        <Button>Funny</Button>
                        <Button>Romantic</Button>
                        <Button>Thrilling</Button>
                    </ButtonGroup>

                    <ButtonGroup variant="outlined" fullWidth aria-label="outlined primary button group" >
                        <Button>Dark</Button>
                        <Button>Weird</Button>
                        <Button>Slow</Button>
                    </ButtonGroup>
                </Stack>
        // </CardView>
  )
}
