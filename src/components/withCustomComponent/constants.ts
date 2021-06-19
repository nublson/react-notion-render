import React from 'react'
import Text from '../../types/Text'

import Image, { Props as ImageProps } from '../Image'

type WrappedComponentPropsType = Text
export type CustomComponentPropsType = ImageProps

interface CustomComponent {
  match: RegExp
  component: React.ComponentType<CustomComponentPropsType>
  transformProps?: (
    props: WrappedComponentPropsType
  ) => CustomComponentPropsType
}

export const customComponents: CustomComponent[] = [
  {
    match: /!\[[^\]]*\]\((.*?)\s*("(?:.*[^"])")?\s*\)/g,
    // eslint-disable-next-line camelcase
    transformProps: ({ plain_text }) => ({
      alt: plain_text.split('![')[1].split(']')[0],
      src: plain_text.split('(')[1].split(')')[0],
      href: plain_text.split('#')[1]
    }),
    component: Image
  }
]
