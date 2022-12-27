import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{
                paddingTop: top,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarShowIcon:true,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color, focused })=> {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbox-outline';
                            break;

                        case 'Contacts':
                            iconName = 'person-circle-outline';
                            break;

                        case 'Album':
                            iconName = 'albums-outline';
                            break;
                    }
                    return (
                        <Icon
                        name={iconName}
                        size={20}
                        color={color}
                    />
                    );
                },
            })}>
            <Tab.Screen name="Chat" options={{}} component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactScreen} />
            <Tab.Screen name="Album" component={AlbumScreen} />
        </Tab.Navigator>
    );
};
