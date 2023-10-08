import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { LineGraph } from "react-native-graph";
import { SelectionDot } from "./SelectionDot";
import AnimateableText from "react-native-animateable-text";
import { useAnimatedProps, useSharedValue } from "react-native-reanimated";

type GraphPoint = {
    value: number;
    date: Date;
}

export const Graph = () => {
    const testSV = useSharedValue("");

    const onPointSelected = (point: GraphPoint) => {
      testSV.value = `${point.value}`
    }

    const props = useAnimatedProps(() => {
      return {
        text: testSV.value,
      }
    })

    return (
    <>
    <AnimateableText {...props} />
        <LineGraph 
          onPointSelected={onPointSelected} 
          style={{width: "100%", height: 220, paddingHorizontal: 16}} 
          points={formattedDummyData} 
          animated 
          enablePanGesture 
          SelectionDot={SelectionDot} 
          panGestureDelay={0} 
          color="#0ABB92" 
          lineThickness={2} 
        />
    </>
    )
};

// function generateDummyData(n = 30) {
//   const dummyData = [];

//   for (let i = 0; i < n; i++) {
//     // Generate a random value (you can modify this logic as needed)
//     const randomValue = Math.floor(Math.random() * 100);

//     // Generate a date for the current day minus i days
//     const currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() - i);

//     // Add the object to the array
//     dummyData.push({ value: randomValue, date: currentDate });
//   }

//   console.log("Generated Dummy data: ", dummyData.map((t) => t.value));

//   return dummyData;
// }

const dummyData = [
  {"date": "2023-10-08T15:11:58.642Z", "value": 83},
  {"date": "2023-10-07T15:11:58.642Z", "value": 10},
  {"date": "2023-10-06T15:11:58.642Z", "value": 74},
  {"date": "2023-10-05T15:11:58.642Z", "value": 83},
  {"date": "2023-10-04T15:11:58.642Z", "value": 11},
  {"date": "2023-10-03T15:11:58.642Z", "value": 52},
  {"date": "2023-10-02T15:11:58.642Z", "value": 77},
  {"date": "2023-10-01T15:11:58.642Z", "value": 34},
  {"date": "2023-09-30T15:11:58.642Z", "value": 61},
  {"date": "2023-09-29T15:11:58.642Z", "value": 99},
  {"date": "2023-09-28T15:11:58.642Z", "value": 96},
  {"date": "2023-09-27T15:11:58.642Z", "value": 80},
  {"date": "2023-09-26T15:11:58.642Z", "value": 89},
  {"date": "2023-09-25T15:11:58.642Z", "value": 83},
  {"date": "2023-09-24T15:11:58.642Z", "value": 84},
  {"date": "2023-09-23T15:11:58.642Z", "value": 67},
  {"date": "2023-09-22T15:11:58.642Z", "value": 60},
  {"date": "2023-09-21T15:11:58.642Z", "value": 25},
  {"date": "2023-09-20T15:11:58.642Z", "value": 65},
  {"date": "2023-09-19T15:11:58.642Z", "value": 79},
  {"date": "2023-09-18T15:11:58.643Z", "value": 55},
  {"date": "2023-09-17T15:11:58.643Z", "value": 83},
  {"date": "2023-09-16T15:11:58.643Z", "value": 93},
  {"date": "2023-09-15T15:11:58.643Z", "value": 95},
  {"date": "2023-09-14T15:11:58.643Z", "value": 80},
  {"date": "2023-09-13T15:11:58.643Z", "value": 33},
  {"date": "2023-09-12T15:11:58.643Z", "value": 79},
  {"date": "2023-09-11T15:11:58.643Z", "value": 68},
  {"date": "2023-09-10T15:11:58.643Z", "value": 37},
  {"date": "2023-09-09T15:11:58.643Z", "value": 24}
]

const formattedDummyData = dummyData.map(item => ({
  ...item,
  date: new Date(item.date),
}));