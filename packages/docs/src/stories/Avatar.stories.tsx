import type { StoryObj, Meta } from "@storybook/react"
import { Avatar, AvatarProps } from "@buscamilhas-ui/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/sudo-victor.png',
    alt: 'Victor Souto'
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}