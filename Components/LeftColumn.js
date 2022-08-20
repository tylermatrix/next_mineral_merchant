import {Flex, Text} from '@chakra-ui/react'
import Minerals from './Minerals'
import Travel from './Travel'
import PriceFeed from './PriceFeed'
export default function LeftColumn() {
  return (
    <Flex direction="column" gap="11px">
      <Flex gap="11px">
        <Minerals />
        <Travel />
      </Flex>
      <PriceFeed />
    </Flex>
  )
}
