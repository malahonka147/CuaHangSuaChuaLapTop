import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class DoiTac extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {
    return (
      <ImageBackground

        source={require('../assets/background2.png')}
        style={styles.image}>

        <View style={styles.container}>
          <Text style={styles.txtDoiTac}> <TouchableOpacity style={styles.btnIcon}
          onPress={() => {this.props.navigation.navigate('Main')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity> <ImageBackground
              style={styles.iconDT}
              source={require('../assets/contract1.png')}></ImageBackground> Quản lý đối tác</Text>



          <View style={styles.header}>
          <Text style={styles.headerText}>Đối tác</Text>
        </View>
           <TouchableOpacity style={styles.btnDoiTac}>
            <Text style={styles.txtContent}>B&J</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnIconDel} >
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Delete.png')}>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Add}
           onPress={this.addNote.bind(this)}>
              <Text style={styles.AddText}>+</Text>
          </TouchableOpacity>
          </View>
      </ImageBackground>

    );
  }
  addNote(){
    if(this.state.noteText){
      var d= new Date();
      this.state.noteArray.push({
        'date' : d.getFullYear()+
        "/" +(d.getMonth() + 1)+
        "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({noteArray:this.state.noteArray})
      this.setState({noteText:''});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },
  header: {
        backgroundColor: '#BED0EC',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width:'80%',
        marginTop:9
      },
      headerText:{
        color: '#002D69',
        fontSize: 24,
        fontWeight: 'bold',
        paddingRight:280
      },
  image: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
    marginLeft:15
  },
  iconDT:{
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginVertical: 0,
    marginLeft:-6,

  },
  btnIcon: {
    paddingTop:20,
    width: 45,
    height: 45,
    marginTop:3,
  },
  btnIconDel:{
    marginTop:-31,
    paddingLeft:280,
    marginBottom: -10,
    height: 59,
  },
  txtDoiTac: {
   fontSize: 30,
   color: 'white',
   fontWeight: '700',
   marginBottom: 130,
   marginTop: 25,
   paddingRight:100
  },
  btnDoiTac:{
    backgroundColor: 'white',
    width: '80%',
    marginTop: 0,
    marginBottom: -10,
    height: 59,
  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 19,

  },
  Add:{
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BED0EC',
    padding: 1,
    top: 220,
    right:50,
    height: 55,
    width:'20%'
  },
  AddText:{
    color: '#002D69',
    fontSize: 30,
    fontWeight:'bold'
  }
});
