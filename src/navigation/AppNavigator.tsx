import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import UploadScreen from '../screens/UploadScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="Upload" component={UploadScreen} />
    </Drawer.Navigator>
  );
}
