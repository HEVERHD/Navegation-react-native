import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingScreen from '../screens/SettingScreen';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
} from 'react-native';
import { colores, styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
            drawerContent={props => <MenuInterno {...props} />}>
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
};

// menu que saldra en el menu lateral

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Partes del Avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de Menu  */}

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('Tabs')}>
                     <Icon
                    name="home-outline"
                    size={20}
                    color={colores.primary}
                />   
                    <Text style={styles.menuTexto}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingScreen')}>
                         <Icon
                    name="settings-outline"
                    size={20}
                    color={colores.primary}
                />   
                    <Text style={styles.menuTexto}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
