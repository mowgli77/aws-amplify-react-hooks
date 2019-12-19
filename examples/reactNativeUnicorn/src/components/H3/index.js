// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WHITE } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h3: {
    fontFamily: '3270Narrow',
    fontSize: 21,
    color: WHITE
  }
})

type Props = {
  title: string
}

const H3 = memo<Props>(({ title }) => {
  const { container, h3 } = styles
  return (
    <View style={container}>
      <Text style={h3}>{title}</Text>
    </View>
  )
})

export { H3 }