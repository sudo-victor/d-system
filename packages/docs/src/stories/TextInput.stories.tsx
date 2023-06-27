import type { StoryObj, Meta } from "@storybook/react"
import { TextInput, TextInputProps } from "@buscamilhas-ui/react"

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {}
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'buscamilhas.com/'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

