import React, { useState }from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableHighlight, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
    
const Calc = () => {

    const msg1 = "Maigreur Morbide";
    const msg2 = "Maigreur";
    const msg3 = "Poids Normal";
    const msg4 = "Surpoids"

    const [msg,setMsg] = useState("");

    const [taille, setTaille] = React.useState();
    const [poids, setPoids] = React.useState();

    const onPress = () => {

        if ((taille != null && taille >= 40 && taille <= 210)&&( poids != null && poids >= 5 && poids <= 200)){
            let tailleCarre = Math.pow(taille / 100,2);
            let BMI = poids / tailleCarre;
            if (BMI < 16.5) {
                setMsg(msg1);

            } else if ( BMI < 18.5 ) {
                setMsg(msg2); 

            } else if (  BMI < 25 ) {
                setMsg(msg3); 

            } else  {
                setMsg(msg4); 
            }
        } else {
            Alert.alert("Faux Valeur",
                        "Poids ou taille hors norme",)
        }

        setTaille("")
        setPoids("")
    }

  return (
  <View style={styles.container}>
     <StatusBar style="auto" />

    <ImageBackground source={require("../assets/bg.jpeg")} resizeMode="cover" style={styles.imageBG}> 
        

        <View style={styles.viewHeader}>
            <Image
                style={styles.logo}
                source={require("../assets/icon1.png")}
            />
        </View> 



        <View style={styles.viewMain}>
            <TextInput style={styles.input} onChangeText={(e)=>{setPoids(e)}} value={poids} keyboardType="numeric" placeholder="Poids"/>
            <TextInput style={styles.input} onChangeText={(t)=>{setTaille(t)}} value={taille} keyboardType="numeric" placeholder="Taille"/>
        </View>


        <View style={styles.viewFooter}>

            <TouchableHighlight onPress={onPress} style={styles.viewBouton}>
                <Text style={styles.msgBtn}>Calculate BMI</Text>
            </TouchableHighlight>

            <View style={styles.countContainer}>
                <Text style={styles.resultat}>
                    {msg}
                </Text>
            </View>

        </View> 
    </ImageBackground>
  </View>
   );
  }

  const styles = StyleSheet.create({

    //page
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },

    //image background 
    imageBG: {
        flex: 1,
        justifyContent: "center"
    },

    //header
    viewHeader: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },
    logo: {
        width: 50,
        height: 50,
      },

    //main
    viewMain: {
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0,
        padding: 10,
        flexBasis:"20%",
    },

    //footer
    viewFooter: {
        flex: 2,
        justifyContent:"center",
        alignItems:"center",
    },

    resultat: {
        color: "purple",
        fontSize: 16,
        lineHeight: 44,
        fontWeight: "bold",
        textAlign: "center",
        width:"80%"
      },
    
    msgBtn: {
        color: "Grey",
        fontSize: 16,
        lineHeight: 44,
        fontWeight: "bold",
        textAlign: "center",
        width:"80%"
    },
      
  });

export default Calc;