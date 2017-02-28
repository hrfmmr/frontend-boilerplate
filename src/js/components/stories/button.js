import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from 'js/components/Button'

storiesOf('Button', module)
  .add('hello', () => (
    <Button content={'foo button'} />
  ))
