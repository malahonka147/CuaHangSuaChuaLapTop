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
  ToastAndroid,
  SafeAreaView,
  FlatList,
  ScrollView,

} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState,useEffect } from 'react';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});

export default function ThemPN ({navigation,route,props}) {  
  const [date, setDate] = useState(new Date())
  const[NhaPhanPhoi,setnhaphanphoi]=useState();

  const[ChuThich,setchuthich]=useState();
  
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT TenNhanVien,MaNhanVien FROM NhanVien',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push({label: results.rows.item(i).TenNhanVien, value: results.rows.item[i].MaNhanVien});
              console.log(label);
              console.log(value);
            setItems({items: temp});
   
            if (results.rows.length >= 1) {
              setEmpty(false);
            } else {
              setEmpty(true)
            }
            
   
          }
        );
   
      });
    }, []);
    return (
      <ImageBackground

        source={require('../images/background2.png')}
        style={styles.image}>

        <View style={styles.container}>
          <Text style={styles.txtNhanVien}>
          <TouchableOpacity style={styles.btnIcon}
          onPress={() => {navigation.navigate('QLPN')}}
            >
            <ImageBackground
              style={styles.iconBack}
              source={require('../images/Back.png')}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIconNV} >
             <ImageBackground
              style={styles.iconNV}
               source={require('../images/qlhn.png')}></ImageBackground>
          </TouchableOpacity> Thêm phiếu nhập</Text>


          
        

        <View >
        <SafeAreaView>
        <Text style={{color:'white',marginBottom:3,marginTop:10,marginLeft:10}}>Nhà Phân Phối</Text>
                <TextInput

                  style={styles.textInput}
                  
                  placeholder="Nhập tên nhà phân phối"
                  placeholderTextColor="gray"
                  onChangeText={(NhaPhanPhoi) => setnhaphanphoi(NhaPhanPhoi)}
                  defaultValue={NhaPhanPhoi}
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Nhân Viên</Text>
                <DropDownPicker
                    items={items}
                  defaultValue={items}
                  containerStyle={{height: 40}}
                  style={{backgroundColor: '#fafafa'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item=>setItems({items: item.value})}
                />
                <Text style={{color:'white',marginBottom:3,marginLeft:10}}>Ngày Lập</Text>
                <DatePicker 

                  style={{width:450}}
                  date={date}
                  mode="date"
                  onDateChange={setDate}
                />
                <Text style={{color:'white',marginBottom:3,marginTop:5,marginLeft:10}}>Chú Thích</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder="Nhập chú thích"
                  placeholderTextColor="gray"
                  onChangeText={(ChuThich) => setchuthich(ChuThich)}
                  defaultValue={ChuThich}
                  
                />
                   
                  
                   </SafeAreaView>   
           </View>
                  
           <TouchableOpacity
                  style={styles.btnthem}
                  >
                  <Text style={styles.txtdn}>Thêm</Text>
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
  header: {
        backgroundColor: '#BED0EC',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width:450,
        marginTop:9
      },
      headerText:{
        color: '#002D69',
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight:300
      },
  image: {
    flex: 1,
  },
  textInput: {
    height: 54,
    width: 450,
    marginTop: 8,
    paddingLeft: 10,
    borderColor: '#00A2C3',
    color: 'black',
    backgroundColor: 'white',
    borderWidth: 1.7,
    borderRadius: 23,
    marginBottom:10,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  iconBack: {
    bottom:-20,
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginVertical: -5,
  },
  btnIcon: {
    width: 30,
    height: 30,
    marginTop:3,
  },
  btnlogin: {
    backgroundColor: '#2E1FDD',
    borderRadius: 23,
    width: '90%',
    marginTop: 10,
    marginBottom: 5,
    height: 52,
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
    bottom:50,
    height: 40,
    width:30,
    marginLeft:380,
  },
  txtNhanVien: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
    marginBottom: 130,
    marginTop: 25,
    paddingRight:80
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
    margin: 2,
    left:10

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
    width:'10%'
  },
  AddText:{
    color: '#002D69',
    fontSize: 30,
    fontWeight:'bold'
  },
  btnthem: {
    backgroundColor: '#0269FC',
    borderRadius: 23,
    width: '90%',
    marginTop: 10,
    marginBottom: 5,
    height: 52,
  },
  txtdn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    margin: 14,
  },
});