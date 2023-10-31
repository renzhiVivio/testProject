import { X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Sheet,
  Unspaced,
  YStack,
  XStack
} from "tamagui";

import SelectDemo from "./SelectDemo";
import { useState } from "react";

export default function DialogDemo() {

  const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  return (
    <>
    <XStack space="$2" justifyContent="center">
    <Button width="50%" onPress={toggleDialog1}>Edit Profile</Button>
    <Button width="50%" onPress={toggleDialog2}>Add User</Button>
    </XStack>
    <Dialog 
   open={visible1}
   onOpenChange={toggleDialog1}
    modal>
      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame
            padding="$4"
            space
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue="Nate Wienert"
            />
          </Fieldset>

          <SelectDemo />

          <YStack
            alignItems="flex-end"
            marginTop="$2"
          >
            <Dialog.Close
              displayWhenAdapted
              asChild
            >
              <Button
                theme="green_Button"
                aria-label="Close"
              >
                Save changes
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
    <Dialog 
   open={visible2}
   onOpenChange={toggleDialog2}
    modal>
      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame
            padding="$4"
            space
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Add User</Dialog.Title>
          <Dialog.Description>
            Test Add User
          </Dialog.Description>
          <Fieldset>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              defaultValue="Nate Wienert"
            />
          </Fieldset>

          <SelectDemo />

          <YStack
            alignItems="flex-end"
            marginTop="$2"
          >
            <Dialog.Close
              displayWhenAdapted
              asChild
            >
              <Button
                theme="green_Button"
                aria-label="Close"
              >
                Save changes
              </Button>
            </Dialog.Close>
          </YStack>

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                pos="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
    </>
  );
}
