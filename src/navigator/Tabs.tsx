import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs1Screen from '../screens/Tabs1Screen';
import Tabs2Screen from '../screens/Tabs2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTab } from './TopTab';

export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colores.primary,
            }}
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: colores.secondary,
              
                tabBarStyle: {
                    borderTopColor: 'white',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: props => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;

                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return (
                        <Text style={{ color: props.color }}>{iconName}</Text>
                    );
                },
            })}>
            <BottomTabAndroid.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                    tabBarIcon: props => (
                        <Text style={{ color: props.color }}>
                            {' '}
                            <Icon
                                name="home-outline"
                                size={25}
                                color={colores.secondary}
                            />{' '}
                        </Text>
                    ),
                }}
                component={Tabs1Screen}
            />
            <BottomTabAndroid.Screen
                name="TopTab"
                options={{
                   
                    title: 'Tab2',
                    tabBarIcon: props => (
                        <Text style={{ color: props.color }}>
                            {' '}
                            <Icon
                                name="options-outline"
                                size={25}
                                color={colores.secondary}
                            />{' '}
                        </Text>
                    ),
                }}
                component={TopTab}
            />
            <BottomTabAndroid.Screen
                name="StackNavigator"
                options={{
                    title: 'Stack Nav',
                    tabBarIcon: props => (
                        <Text style={{ color: props.color }}>
                            {' '}
                            <Icon
                                name="grid-outline"
                                size={25}
                                color={colores.secondary}
                            />{' '}
                        </Text>
                    ),
                }}
                component={StackNavigator}
            />
        </BottomTabAndroid.Navigator>
    );
};

// TABS PARA IOS

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: 'red',
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: props => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;

                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return (
                        <Text style={{ color: props.color }}>{iconName}</Text>
                    );
                },
            })}>
            <BottomTabIOS.Screen
                name="Tab1Screen"
                options={{
                    title: 'Tab1',
                    tabBarIcon: props => (
                        <Text style={{ color: props.color }}>T1</Text>
                    ),
                }}
                component={Tabs1Screen}
            />
            <BottomTabIOS.Screen
                name="Tab2Screen"
                options={{ title: 'Tab2' }}
                component={Tabs2Screen}
            />
            <BottomTabIOS.Screen
                name="StackNavigator"
                options={{ title: 'Stack nav' }}
                component={StackNavigator}
            />
        </BottomTabIOS.Navigator>
    );
};

{
    /* <Tab.Screen name="Tabs1Screen" options={{title : "Tab1", tabBarIcon:(props) => <Text style={{color: props.color}}>Ahhh</Text>}} component={Tabs1Screen} /> */
}
