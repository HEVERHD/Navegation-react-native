import { StyleSheet } from 'react-native';

export const colores = {
    primary:"#5056D6",
    secondary:"#aaafff",
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },

    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 50,

    },

    menuTexto:{
        fontSize:20,
        marginHorizontal:10,
    },

    menuBoton:{
        marginVertical: 10,
        flexDirection:"row",
        alignItems:"center"
    },

    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:"center",
        marginRight: 10,

    },
    botonGrandeTexto:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    },
    avatarContainer:{
        marginTop:10,
        alignItems: "center"
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:100,
    },

});
