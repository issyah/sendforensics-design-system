import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Box,
  Stack
} from '@mui/material';
import Anchor from '../Anchor';
import BorderedBox from '../BorderedBox';
import SegmentedSwitch from '../SegmentedSwitch';
import { useState } from 'react';
export default function ToggleButtonSystem(){
  const [select, setSelect] = useState('');
  const [multiselect, setMultiSelect] = useState([]);
  const [segmentedSelect, setSegmentedSelect] = useState('list');
  const [view,setView] = useState('analyses');
  const handleSelect = (event, newSelect) => {
    setSelect(newSelect);
  }

  const handleMultiSelect = (event, newMultiSelect) => {
    if(newMultiSelect !== null){
      setMultiSelect(newMultiSelect);
    }
  }

  const handleSegmentedSelect = (event, newSelect) => {
    if(newSelect !== null){
      setSegmentedSelect(newSelect);
    }
  }

  return (
    <Box>
      <Anchor id={'toggle-button-section'}>
        <Typography variant={'h4'}>
          Toggle Buttons
        </Typography>
        <Typography>
          Set a button state or buttong group selection.
        </Typography>
      </Anchor>
      <Typography gutterBottom>
        Single selection
      </Typography>
      <BorderedBox>
        <ToggleButtonGroup
          value={select}
          onChange={handleSelect}
          exclusive
          color='primary'
        >
          <ToggleButton value={'action1'}>Action 1</ToggleButton>
          <ToggleButton value={'action2'}>Action 2</ToggleButton>
          <ToggleButton value={'action3'}>Action 3</ToggleButton>
        </ToggleButtonGroup>
      </BorderedBox>
      <Typography gutterBottom>Multiple selection</Typography>
      <BorderedBox>
        <ToggleButtonGroup
          value={multiselect}
          onChange={handleMultiSelect}
          color='primary'
          size='small'
        >
          <ToggleButton value={'action1'}>Action 1</ToggleButton>
          <ToggleButton value={'action2'}>Action 2</ToggleButton>
          <ToggleButton value={'action3'}>Action 3</ToggleButton>
        </ToggleButtonGroup>
      </BorderedBox>
      <Typography gutterBottom>Segmented Switch</Typography>
      <BorderedBox>
        <Stack spacing={2} direction="row">
          <SegmentedSwitch
            value={segmentedSelect}
            onChange={handleSegmentedSelect}
            exclusive
          >
            <ToggleButton value="list">List</ToggleButton>
            <ToggleButton value="Analysis">Analysis</ToggleButton>
          </SegmentedSwitch>
          <SegmentedSwitch
            value={view}
            onChange={(e, newView) => {setView(newView)} }
            exclusive
            color='primary'
          >
            <ToggleButton value="analyses">Analyses</ToggleButton>
            <ToggleButton value="reputation">Reputation</ToggleButton>
            <ToggleButton value="dmarc">DMARC</ToggleButton>
          </SegmentedSwitch>
        </Stack>
      </BorderedBox>
    </Box>
  )
}