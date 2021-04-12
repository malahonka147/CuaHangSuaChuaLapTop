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

export default class QLNhanVien extends React.Component {
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
          <Text style={styles.txtNhanVien}>
          <TouchableOpacity style={styles.btnIcon}
            onPress={() => {this.props.navigation.navigate('Main')}}>
            <ImageBackground
              style={styles.icon}
              source={require('../assets/Back.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIconNV} >
             <ImageBackground
              style={styles.iconNV}
               source={require('../assets/NhanVien.png')}></ImageBackground>
          </TouchableOpacity> Quản lý nhân viên</Text>


          <View style={styles.header}>
          <Text style={styles.headerText}>Nhân Viên</Text>

        </View>

           <TouchableOpacity style={styles.btnNhanVien}>
            <Text style={styles.txtContent}>Jack</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight:185
      },
  image: {
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  btnIcon: {
    paddingTop:20,
    width: 30,
    height: 40,
    marginTop:3,
  },
  iconNV: {
      top:10,
      width: 45,
      height: 35,
      alignSelf: 'center',
      marginVertical: -5,

    },
    btnIconNV: {
      paddingTop:20,
      width: 50,
      height: 50,
      marginTop:3,
    },
  btnIconDel:{
    marginTop:-31,
    paddingLeft:290,
    marginBottom: -10,
    height: 59,
  },
  txtNhanVien: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 130,
    marginTop: 25,
    paddingRight:100
  },
  btnNhanVien:{
    backgroundColor: 'white',
    width: '80%',
    marginTop: -0,
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
    top: 225,
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
