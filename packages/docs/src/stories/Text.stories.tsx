import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from "@buscamilhas-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    size: '2xl',
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}