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

export default function CTNV ({navigation,route}) {
  
    return (
      <ImageBackground
        source={require('../images/background2.png')}
        style={styles.image}>
        <View style={styles.container}>

                <ImageBackground
                 style={styles.icon }
                                source={require('../images/Back.png')}>
                   <TouchableOpacity style={styles.btnIcon}
                      onPress={() => {this.props.navigation.navigate('Main')}}>


                   </TouchableOpacity>
                   </ImageBackground>
                   
          <Text style={styles.txtUser}>Trọng Phan</Text>
          <Text style={styles.txtDiaChi}>
            <ImageBackground
              style={styles.iconDiaChi}
              source={require('../images/location-sign.png')}>
            </ImageBackground>
            1827,Phường Tân Định..</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.contenthead}>
            <Text style={styles.txtcontenthead}> Thông tin nhân viên</Text>
          </View>
          <View style={styles.contentmid}>
            <View style={styles.txtTT}>

              <Text style={styles.txtContent2}> Mã NV</Text>
              <Text style={styles.txtContent2}> Tên NV</Text>
              <Text style={styles.txtContent2}> Giới Tính</Text>
              <Text style={styles.txtContent2}> Email</Text>
              <Text style={styles.txtContent2}> Số điện thoại</Text>
              <Text style={styles.txtContent2}> Địa Chỉ</Text>
              <Text style={styles.txtContent2}> Ghi Chú</Text>
            </View>

            <View>
            <View  style={styles.content2}>

              <Text style={styles.txtContent2Change}>1</Text>
              <ImageBackground
                style={styles.iconNext}
                >
              </ImageBackground>

              </View>
              <View  style={styles.content2}>

                <Text style={styles.txtContent2Change}>Trọng Phan</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>

              </View>
              <View  style={styles.content2}>

                <Text style={styles.txtContent2Change}>Nam</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>

              </View>
              <View  style={styles.content2}>

                <Text style={styles.txtContent2Change}>trongdeptrai@mail.com</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>
              </View>
              <View  style={styles.content2}>

              <Text style={styles.txtContent2Change}>+12348746348</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>
              </View>
              <View  style={styles.content2}>

               <Text style={styles.txtContent2Change}>1827,Phường Tân Định..</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>
              </View>
              <View  style={styles.content2}>

               <Text style={styles.txtContent2Change}>Khong co</Text>
                <ImageBackground
                  style={styles.iconNext}
                  source={require('../images/Next.png')}>
                </ImageBackground>
              </View>
            </View>

          </View>

          
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => {
                  this.props.navigation.navigate('');
              }}>
              <Text style={styles.txtdn}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
    alignItems: 'center',

  },

  content:{
    marginBottom:320,
  },
  image: {
    flex: 1,
  },
  icon: {
    width: 45,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
    right:200,
    marginTop:10,
  },

  btnIcon: {
    paddingTop:20,
    width: 45,
    height: 40,
    marginTop:3,
  },
  txtUser:{
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginTop: 25,
    marginLeft:5,
  },
  iconDiaChi:{
    width: 20,
    height: 20,
    alignItems: 'center',
    marginRight:8,
    marginTop: 10,
  },
  txtDiaChi:{
    fontSize: 18,
    color: 'white',

  },
  txtContent: {
    color: '#002D69',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 19,

  },
  content2:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom:20,
  },
  txtTT:{
    justifyContent: 'flex-start',
  },
  content3:{
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom:300,
  },
  contentmid:{
    flexDirection: 'row',
  },
  txtContent2:{
    fontSize: 18,
    color: 'white',
    marginRight:100,
    marginBottom:25,
    marginLeft:10,
  },
  
  txtContent2Change:{
    fontSize: 18,
    color: 'white',
    marginRight:5,

  },
  iconNext:{
    width: 30,
    height: 30,
  },
  contenthead:{
    marginTop:50,
    marginBottom:50,
  },
  txtcontenthead:{
    fontSize: 20,
    color: 'white',
    marginLeft:10,
    fontWeight: 'bold',

  },
  btnlogin: {
    backgroundColor: '#0269FC',
    borderRadius: 5,
    width: '90%',
    marginBottom: 20,
    marginLeft: 20,
    height: 52,

  },
  txtdn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 14,
  },
  txtcontentfooter:{
    fontSize: 20,
    color: 'white',
    marginLeft:10,
    fontWeight: 'bold',
  },
    btnBack:{
   fontSize: 30,
       color: 'white',
       fontWeight: '700',
       marginBottom: 130,
       marginTop: 25,
       paddingRight:100}
});