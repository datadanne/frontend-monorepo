import { View, Text, Pressable } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Shades from "@shades/common";

const { useAppScope } = Shades.app;

const textDefault = "hsl(0,0%,83%)";
const background = "hsl(0,0%,10%)";

// export const options = {
//   presentation: "modal",
//   headerShown: true,
//   header: () => (
//     <View style={{ height: 56, backgroundColor: background }}>
//       <Header />
//     </View>
//   ),
//   gestureResponseDistance: 2000,
// };
export const options = {
  presentation: "modal",
  headerTitle: () => (
    <View style={{ position: "relative", top: -7 }}>
      <Header />
    </View>
  ),
  headerStyle: { backgroundColor: background },
  headerShown: true,
  headerShadowVisible: false,
};

const Header = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 38,
          height: 5,
          borderRadius: 2.5,
          backgroundColor: "hsl(0,0%,32%)",
          marginTop: 4,
          marginBottom: 14,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "600", color: textDefault }}>
        Account
      </Text>
    </View>
  );
};

const AccountModal = ({ navigation }) => {
  const { actions } = useAppScope();
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "hsl(0,0%,10%)" }}>
      <Pressable
        onPress={() => {
          actions.logout();
          navigation.popToTop();
        }}
        style={({ pressed }) => ({
          paddingHorizontal: 20,
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: pressed ? "hsl(0,0%,15%)" : "hsl(0,0%,13%)", // hsl(0,0%,11%)
          borderRadius: 12,
        })}
      >
        <Text style={{ color: "#de554f", fontSize: 16 }}>Log out</Text>
      </Pressable>
    </View>
  );
};

export default AccountModal;
