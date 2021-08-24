import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
        
    
      },
      titles: {
        margin: '30%',
        width: '100%',
        alignContent: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
    
      }, 
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      buttonContainer: {
          position: "absolute",
          bottom: 50,
          width: '100%',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: '#5c5e62'
    
      },  

});

  export default styles;