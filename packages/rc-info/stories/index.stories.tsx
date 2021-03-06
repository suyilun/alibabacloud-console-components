import * as React from 'react'
import '@alicloud/console-components/dist/wind.css'
import { storiesOf } from '@storybook/react'
import Basic from './basic'
import RenderChildren from './renderChildren'

storiesOf('WindRcInfo', module)
  .add('Basic', () => <Basic />)
  .add('RenderChildren', () => <RenderChildren />)
