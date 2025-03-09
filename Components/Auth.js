import React, { useState } from 'react'
import { View,Text,StyleSheet ,Image,Animated, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import headerSticker from '../authTag.png'
import authImg from '../authimg.png'

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Form from './Form';
import { useNavigation } from '@react-navigation/native';

import CustomButton from './CustomButton';
import { useLoginUserMutation } from '../Slices/AuthSlice';
function Auth() {
  const navigation = useNavigation();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordConfirm,setPasswordConfirm] = useState('');
  const [authState,setAuthstate] = useState('Sign In');
  
  const { setItem } = useAsyncStorage("token");
  const [userLogin] = useLoginUserMutation();
  const handleLogin= async()=>{
    try{
   
      console.log('hi')
    const {data} = await userLogin({email,password})
    console.log('clicked')
    console.log('user',data)
    console.log(data,'token',data.token)
    if(data.token){
    await setItem(data.token);
    data.User.role==='customer'? navigation.navigate('Menu'): navigation.navigate('AdminMenu')
    
    }
  }catch(err){
    console.log(err.message)
  }

  }
  
const BgColor = authState === 'Sign In'? "red": "white"
  return (
   <View style= {styles.body}>
    <View style = {styles.imgView}>

    <Image source={headerSticker}/>
   
    </View>
    <View  style={{padding:"5%"}}>
  <LinearGradient
        colors={['#FFFFFF59', '#FFFFFF99']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={{height:"75%",opacity:1}}
       
      >  
      <View style={{padding:40}}>
    <View >
      <View  style= {styles.Authtxt}>
      <Text style={styles.txt(authState)} onPress={()=>setAuthstate('Sign In')}>Sign In</Text>
      <Text style={styles.txt1(authState)} onPress={()=>setAuthstate('Sign Up')}>Sign Up</Text>
      </View>
   
      { authState === 'Sign In' &&  <View style={styles.formStyle}>
    
     <Form placeholder= "User Email" name="user" states={setEmail}/>
    
     
     <Form placeholder="password" name="lock" states={setPassword}/>
     <View style={{justifyContent:'center',alignItems:'center',padding:20}}>
     <CustomButton button='Login' onPress={handleLogin}/>
     </View>
     </View>
      }
      { authState === 'Sign Up' &&  <View style={styles.formStyle}>

     <Form placeholder= "User Email"  name="user" value={email} states={setEmail}/>

     <Form placeholder="password"  name="lock"  states={setPassword}/>

     <Form placeholder="password Confirm"  name="lock" states={setPasswordConfirm}/>
     <View style={{marginTop:"20%"}}>
     <CustomButton button='sign Up'/>
     </View>
     </View>
      }
  
     
    </View></View></LinearGradient>
    <View  style={{position:'absolute',top:"46%",left:0,zIndex:-1,height:"70%",width:'100%'}}>
    <Image source={authImg} style={{height:'100%'}}/>
    </View>
    </View>
 

    
   </View>
  )
}
const styles = StyleSheet.create({
 
body:{
 backgroundColor:'black',
 position:'relative',
 zIndex:-1,
 height:"50%",
  flex:1,

 
},
imgView:{
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
maxWidth:"100%"

},
authBody:{
   padding: "15%",
   
},
Authtxt:{
   display:'flex',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',

  backgroundColor:'white',
  borderRadius:40,
  width:"100%"
  
 
 
}
,txt: (authState) => { 
  const bgColor = authState === 'Sign In' ? 'red' : 'white';
  return{
  color:'black',
  margin:3,
  backgroundColor:bgColor,
  
 textAlign:'center',
 borderRadius:40,
paddingRight:30,
  paddingLeft:30,
 padding:"3%"

  }
},
txt1: (authState) => { 
  const bgColor = authState === 'Sign Up' ? 'red' : 'white';
  return{
  color:'black',
  paddingRight:30,
  paddingLeft:30,
  padding:"3%",
  margin:3,
 
  backgroundColor:bgColor,
 textAlign:'center',
 borderRadius:40
  }
},
formStyle:{
  position:'relative',
  zIndex:1,
  display:'flex',
  flexDirection:'column',
  padding:10

},
forminp:{
  padding:0
}

})
export default Auth;