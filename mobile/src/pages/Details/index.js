import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
// import Toast from 'react-native-simple-toast'
import * as MailComposer from 'expo-mail-composer'

import style from './style'
import logo from '../../../assets/logo.png'

export default function Details() {
    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident
    const message = `Olá ${incident.name}!\nEstou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de R$ ${incident.value}`

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendText() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name='arrow-left' size={28} color='#E02041'/>
                </TouchableOpacity>

                <Image source={logo}/>
            </View>

            <View style={style.incident}>
                <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.name} - {incident.city}/{incident.uf}</Text>
                
                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.description}</Text>
                
                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={style.contact}>
                <Text style={style.heroTitle}>SALVE O DIA!</Text>
                <Text style={style.heroTitle}>Seja o herói desse caso</Text>
               
                <Text style={style.heroDescription}>Entre em contato agora por:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendText}>
                        <Text style={style.actionText}>WHATSAPP</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={style.action} onPress={sendEmail}>
                        <Text style={style.actionText}>E-MAIL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
