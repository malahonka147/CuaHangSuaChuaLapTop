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

export default class ChamCong extends React.Component {
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
          <Text style={styles.txtChamcong}> <TouchableOpacity style={styles.btnIcon}
          onPress={() => {this.props.navigation.navigate('Main')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity> <ImageBackground
              style={styles.iconCCong}
              source={require('../assets/calculator1.png')}></ImageBackground> Quản lý chấm công</Text>
          <View style={styles.header}>
          <Text style={styles.headerText}>Chấm công</Text>
        </View>
           <TouchableOpacity style={styles.btnDate}>
            <Text style={styles.txtContent}>17/08/2021</Text>
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
        marginTop:10
      },
      headerText:{
        color: '#002D69',
        fontSize: 24,
        fontWeight: 'bold',
        paddingRight:250
      },
  image: {
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginVertical: -5,
    marginLeft:3,
  },
  iconCCong:{
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginVertical: 0,

  },
  btnIcon: {
    paddingTop:10,
    width: 30,
    height: 40,
    marginTop:3,
  },
  btnIconDel:{
    paddingLeft:300,
    top:-35,
    height: 59,
  },
  txtChamcong: {
    fontSize: 30,
    color: 'white',
    marginBottom: 130,
    marginTop: 25,
    paddingRight:100,
    marginLeft:1,
    fontWeight: '700',
  },
  btnDate:{
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
    top: 218,
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
