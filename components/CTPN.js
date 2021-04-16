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
import { useState,useEffect } from 'react';
var SQLite=require('react-native-sqlite-storage') 
var db = SQLite.openDatabase({name: "Database.db", createFromLocation : '~Database.db'});

export default function CTPN ({navigation,route,props}) {
  const {IDPhieuNhap}=route.params;
  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);
  const [MaPhieuNhap, setMaPhieuNhap] = useState([]);
  const [MaCTPN, setMaCTPN] = useState([]);
  const [MaSP, setMaSP] = useState([]);
  const [SoLuong, setSoLuong] = useState([]);
  const [TongTien, setTongTien] = useState([]);
  const [TongTienPN, setTongTienPN] = useState();
  const [ChuThich, setChuThich] = useState([]);
  
  

  const[isRender,setisRender]=useState(false);
    useEffect(() => {
      
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM ChiTietPhieuNhap where MaPhieuNhap=?',
          [IDPhieuNhap],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setItems(temp);
   
            if (results.rows.length >= 1) {
              setEmpty(false);
            } else {
              setEmpty(true)
            }
   
          }
        );
   
      });
    }, []);
   
    const listViewItemSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#000'
          }}
        />
      );
    };
   
    const emptyMSG = (status) => {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
   
          <Text style={{ fontSize: 25, textAlign: 'center' }}>
            No Record Inserted Database is Empty...
            </Text>
   
        </View>
      );
    }
    const deletePN = (item) => {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM  ChiTietPhieuNhap where MaCTPN=?',
          [item.MaCTPN],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              alert('Xóa thành công');
                db.transaction((tx) => {
                  tx.executeSql(
                    'SELECT * FROM ChiTietPhieuNhap where MaPhieuNhap=?',
                    [IDPhieuNhap],
                    (tx, results) => {
                      var temp = [];
                      for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                      setItems(temp);
             
                      if (results.rows.length >= 1) {
                        setEmpty(false);
                      } else {
                        setEmpty(true)
                      }
             
                    }
                  );
                });
              setisRender(!isRender);
            } else {
              alert('Xóa thất bại');
            }
          },
        );
      });
    };
    
    const RefreshPN=()=>{

      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM ChiTietPhieuNhap where MaPhieuNhap=?',
          [IDPhieuNhap],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setItems(temp);
   
            if (results.rows.length >= 1) {
              setEmpty(false);
            } else {
              setEmpty(true)
            }
   
          }
        );
   
      });
    setisRender(!isRender);
    }
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
          </TouchableOpacity> Chi Tiết Phiếu Nhập</Text>



          <TouchableOpacity style={styles.btnIconRF}
          onPress={()=>{RefreshPN()}} >
             <ImageBackground
              style={styles.iconNV}
               source={require('../images/refresh.png')}></ImageBackground>
          </TouchableOpacity>

          <View style={styles.header}>
          <Text style={styles.headerText}>Mã Phiếu Nhập: {IDPhieuNhap}</Text>

        </View>
        <SafeAreaView>

        <View style={{height:650}}>
           <FlatList 

              data={items}
              ItemSeparatorComponent={listViewItemSeparator}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item})=>
              <TouchableOpacity 
              
              onPress={()=>{const IDMaCTPN =item.MaCTPN; 
              const IDMaPN=IDPhieuNhap;
              navigation.navigate("CTPNH",{IDMaCTPN,IDMaPN})}}>
                <View key={item.MaCTPN}
                  style={{
                    backgroundColor: 'white',
                    width: 450,
                    height: 140,
                    
                  }}
                >
                 
                    <Text style={styles.txtContent}>Mã CT Phiếu Nhập: {item.MaCTPN}</Text>
                    <Text style={styles.txtContent}>Mã SP: {item.MaSanPham}</Text>
                    <Text style={styles.txtContent}>Số Lượng: {item.SoLuong}</Text>
                    <Text style={styles.txtContent}>Giá Nhập: {item.GiaNhap}</Text>
                    <Text style={styles.txtContent}>Chú Thích: {item.ChuThich}</Text>
                   <TouchableOpacity style={styles.btnIconDel} 
                     onPress={
                      ()=> {
                        Alert.alert(
                          'Cảnh báo!',
                          'Bạn có muốn xóa CTPN này?',
                          [
                            {text: 'Có', onPress: () => {deletePN(item)}},
                            {text: 'Không', onPress: () => {}},
                          ],
                          { 
                            cancelable: true 
                          }
                        );
                        }
                      }
                    
                   >
                    <ImageBackground
                      style={styles.icon}
                      source={require('../images/Delete.png')}>
                    </ImageBackground>
                      </TouchableOpacity>
                </View>
                </TouchableOpacity>
            }
            extraData={isRender}
           />
           </View>
           
        </SafeAreaView>
         
        
         <TouchableOpacity style={styles.Add}
         onPress={()=>{
           const IDPN=IDPhieuNhap;
           console.log(IDPN);
           navigation.navigate("ThemCTPN",{IDPN})}}>
              <Text style={styles.AddText}>+</Text>

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
  btnIconRF:{
    left:190,
    bottom:170,
  },
  
  header: {
        backgroundColor: '#BED0EC',
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
        width:450,
        marginTop:-15
      },
      headerText:{
        color: '#002D69', 
        fontSize: 25,
        fontWeight: 'bold',
        paddingRight:300,
        

      },
  image: {
    flex: 1,
  },
  icon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: -5,
  },
  iconBack: {
    bottom:-20,
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginVertical: -5,
  },
  btnIcon: {
    width: 30,
    height: 30,
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
    left:10,

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
  }
});
