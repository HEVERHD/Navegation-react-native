import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {

  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}>
      
      <Drawer.Screen name="StackNavigator" options={{title : "Home"}} component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" options={{title : "Setting"}} component={SettingScreen} />
    </Drawer.Navigator>
  );
}