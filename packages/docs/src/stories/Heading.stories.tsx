import type { StoryObj, Meta } from "@storybook/react"
import { Heading, HeadingProps } from "@buscamilhas-ui/react"

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Meu título',
    size: 'md',
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrao o heading sempre será um `h2`, mas podemos alterar com a propriedade `as`'
      }
    }
  }
}