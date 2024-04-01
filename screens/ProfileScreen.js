import {
  // StyleSheet,
  Text,
  // View,
  // SafeAreaView,
  // Text,
  // Alert,
} from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
