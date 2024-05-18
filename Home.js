import { useState } from "react";
import { View } from "react-native";
import { Appbar, TextInput, Text, Button } from "react-native-paper";

function Home() {
  const [forRead, forWrite] = useState("");
  const [msgList, updateMsg] = useState([
    { name: "user", msg: "Hi" },
    { name: "user", msg: "test !!" },
    { name: "user", msg: "mic test 123" },
  ]);

  function handleSend() {
    updateMsg([...msgList, { name: "user", msg: forRead }]);
    forWrite("");
  }

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <Appbar.Header style={{ backgroundColor: "#cddc39" }}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Chat-App" />
        <Appbar.Action icon="magnify" />
      </Appbar.Header>

      {/* chat body */}
      <View style={{ flex: 1, padding: 10 }}>
        {msgList.map((item, index) => {
          return (
            <View key={index}>
              <Text style={{ fontSize: 60 }}>{item.msg}</Text>
            </View>
          );
        })}
      </View>

      {/* message input */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          value={forRead}
          onChangeText={(item) => forWrite(item)}
          mode="outlined"
          style={{ margin: 20, width: "65%" }}
          label="Type Your Message"
          activeOutlineColor="tomato"
        />
        <Button mode="contained" onPress={handleSend}>
          Send
        </Button>
      </View>
    </View>
  );
}

export default Home;
