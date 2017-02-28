import { configure } from '@kadira/storybook'
import 'bundle.css'

function loadStories() {
  require('../src/js/components/stories/button')
}

configure(loadStories, module)
