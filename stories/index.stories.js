import HomeIcon from '@material-ui/icons/Home'
import RefreshIcon from '@material-ui/icons/Refresh'
import SettingsIcon from '@material-ui/icons/Settings'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import {
  BottomBar,
  Button,
  Grid,
  Overlay,
  Input,
  BackgroundImage,
} from '../src'
import './index.css'
import React from 'react'
import festen from './festen.jpg'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>
      Not enabled
    </Button>
  ))

storiesOf('BottomBar', module).add('with Home, Refresh and Settings', () => (
  <BottomBar value="home" onChange={action('menu item changed')}>
    <BottomBar.Item value="home" icon={<HomeIcon />} />
    <BottomBar.Item value="new-game" icon={<RefreshIcon />} />
    <BottomBar.Item value="settings" icon={<SettingsIcon />} />
  </BottomBar>
))

storiesOf('Grid', module).add('with 3 items ', () => (
  <Grid>
    <Grid.Item
      key="some-key"
      onMouseDown={action('pressed')}
      onTouchStart={action('touched')}
      wrong={false}
      correct={true}
      almostCorrect={false}
    >
      1
    </Grid.Item>
    <Grid.Item
      key="some-key-2"
      onMouseDown={action('pressed')}
      onTouchStart={action('touched')}
      wrong={true}
      correct={false}
      almostCorrect={false}
    >
      2
    </Grid.Item>
    <Grid.Item
      key="some-key-3"
      onMouseDown={action('pressed')}
      onTouchStart={action('touched')}
      wrong={false}
      correct={false}
      almostCorrect={true}
    >
      3
    </Grid.Item>
  </Grid>
))

storiesOf('Overlay', module).add('with button', () => (
  <Overlay>
    <p>YOU LOST</p>
    <Button onMouseDown={action('restart')}>Play again?</Button>
  </Overlay>
))

storiesOf('BackgroundImage', module).add(
  'with image and example button',
  () => (
    <BackgroundImage imageSrc={festen}>
      <Button onMouseDown={action('restart')}>Press me</Button>
    </BackgroundImage>
  ),
)

storiesOf('Input', module)
  .add('with invalid input', () => (
    <Input
      valid={false}
      type="text"
      name="solution"
      maxLength={9}
      placeholder="NORA"
      onChange={action('typing')}
      onBlur={action('leaving input')}
      required
    />
  ))
  .add('with valid input', () => (
    <Input
      valid={true}
      type="text"
      name="solution"
      maxLength={9}
      placeholder="NORA"
      onChange={action('typing')}
      onBlur={action('leaving input')}
    />
  ))
