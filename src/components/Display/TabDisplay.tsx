import React from 'react'

import { DisplayDataType } from '../../Interfaces/Interface'
import {DisplayCard} from './DisplayCard'

import { Box, Stack, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

interface Props {
    displayData: DisplayDataType[],
}

const tabHeader: {
        label: string, 
        value: string
    }[] = [
            {
            label: "Funny",
                value: '1'
            },
            {
            label: "Romantic",
                value: '2'
            },{
            label: "Thrilling",
                value: '3'
            },{
            label: "Dark",
                value: '4'
            },{
            label: "Weird",
                value: '5'
            },{
            label: "Slow",
                value: '6'
            },
    ]
        
export const TabDisplay: React.FC<Props> = ({displayData}) => {
    const [value, setValue] = React.useState('1')

    const onTabChangeHandler = (event: React.SyntheticEvent, newValue: string ) => {
        setValue(newValue)
    }
    
    const filteredData = (type: string) => {
        return displayData.filter(item => item.theme === type)
    }
    
  return (
      <Box>
          <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={onTabChangeHandler} variant="fullWidth" aria-label="Movie Tab">
                      {tabHeader.map((item) => <Tab key={item.value} label={item.label} value={item.value} />)} 
                  </TabList>
              </Box>
             
              {tabHeader.map(item => <TabPanel key={item.value} value={item.value} sx={{ minHeight: '100vh' }}>
                    <Stack direction={"row"} gap={2}>
                      {filteredData(item.label.toLowerCase()).map((filItem, i) => <DisplayCard key={i} item={filItem} />)}
                    </Stack>
              </TabPanel>)}
          </TabContext>
      </Box>
  )
}
