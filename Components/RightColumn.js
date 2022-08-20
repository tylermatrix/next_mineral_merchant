import {Flex, Text} from '@chakra-ui/react'
import ResourceMonitor from './ResourceMonitor'
import News from './News'
export default function RightColumn() {
  return (
    <Flex gap="11px" direction="column">
      <ResourceMonitor />
      <News />
    </Flex>
  )
}
