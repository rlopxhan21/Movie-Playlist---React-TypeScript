import { Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonView: React.FC = () => {
  return (
    <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={350}
  height={525}
/>
  )
}
