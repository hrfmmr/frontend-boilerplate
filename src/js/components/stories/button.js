/* eslint-disable */
import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Button from 'src/components/Button'


storiesOf('Button', module)
  .add('hello', () => (
    <Button content={'foo button'} />
  ))
