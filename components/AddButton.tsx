
import React from "react";
import { useState } from "react";
import {

  Button,

} from "tamagui";

export default function AddButton() {
    const [count, setCount] = useState<number>(1);
    const IncreateButtonComponent = () => {
        const views = [];
        for (let i = 0; i < count; i++) {
            views.push(
                <Button >Button {`${i+1}`}</Button>
            );
        }
        return views;

    }
  return (
    <React.Fragment>
        <Button onPress={() => setCount(c=>c+1)}>Edit Profile {`${count}`}</Button>
        <IncreateButtonComponent />
</React.Fragment>

  );
}
