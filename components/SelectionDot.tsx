import React, { useCallback } from 'react'
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated'
import { runSpring, useValue, Circle, Group, Rect, Text, useFont } from '@shopify/react-native-skia'
import type { SelectionDotProps } from 'react-native-graph'


export function SelectionDot({
  isActive,
  color,
  circleX,
  circleY,
}: SelectionDotProps) {
  const circleRadius = useValue(0)
  const controlLineHeight = useValue(0);

  const setIsActive = useCallback(
    (active: boolean) => {
      runSpring(circleRadius, active ? 4 : 0, {
        mass: 1,
        stiffness: 1000,
        damping: 50,
        velocity: 0,
      });

      controlLineHeight.current = active ? 220 : 0;
    },
    [circleRadius]
  )

  useAnimatedReaction(
    () => isActive.value,
    (active) => {
      runOnJS(setIsActive)(active)
    },
    [isActive, setIsActive]
  )

  return (
  <Group>
    <Rect x={circleX} y={0} width={1} height={controlLineHeight} color={"#919191"} />
    <Circle cx={circleX} cy={circleY} r={circleRadius} color={color} />
    </Group>
    )
}