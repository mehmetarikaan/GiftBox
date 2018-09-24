import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { CardSection, Button } from '../ortak';


class ProfileSettings extends Component {

    constructor() {
        super()
        this.state = {
            imageSource: null
        };
    }

    selectPhoto() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageSource: source
                });
            }
        });
    }
    render() {
        return (
            // Tüm sayfa
            <View style={styles.container}>

                {/* Fotoğraf kısmı  */}
                <View style={styles.imagecontainer}>
                    <Text style={{ marginBottom: 5, fontSize: 20, color: 'black', fontWeight: 'bold' }}>AD SOYAD</Text>
                    <Image style={styles.image} source={this.state.imageSource != null ? this.state.imageSource : require('../img/profilephoto.png')} />
                    <TouchableOpacity style={styles.button} onPress={this.selectPhoto.bind(this)}>
                        <Text style={styles.text}>Resim Değiştir</Text>
                    </TouchableOpacity>
                </View>

                {/* Çekiliş hakkı ve puanın yer aldığı kısım */}
                <View style={styles.blackCard}>

                    {/* Çekiliş hakkı kısmı */}
                    <View style={styles.blackCardSection}>
                        <Text style={styles.textStyle}>Çekiliş Hakkı:</Text>
                        <TextInput
                            placeholder="0"
                            placeholderTextColor="#ffde00"
                            style={styles.blackinputStyle}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    {/* Puan kısmı */}
                    <View style={styles.blackCardSection}>
                        <Text style={styles.textStyle}>Puanı:</Text>
                        <TextInput
                            placeholder="0"
                            placeholderTextColor="#ffde00"
                            style={styles.blackinputStyle}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>

                {/* Form ve Button kısmı */}
                <View style={styles.formcontainer}>

                    {/* Form kısmı */}
                    <CardSection>
                        <TextInput
                            placeholder="Ad Soyad"
                            style={styles.inputStyle}
                            value={this.props.names}
                            onChangeText={names => this.props.profileUpdate(names)}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput
                            placeholder="E-mail"
                            style={styles.inputStyle}
                            value={this.props.email}
                            onChangeText={email => this.props.profileUpdate(email)}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput
                            placeholder="Şifre"
                            style={styles.inputStyle}
                            value={this.props.password}
                            onChangeText={password => this.props.profileUpdate(password)}
                        />
                    </CardSection>

                    <CardSection>
                        <TextInput
                            placeholder="Doğum Tarihi"
                            style={styles.inputStyle}
                            value={this.props.dateofbirth}
                            onChangeText={dateofbirth => this.props.profileUpdate(dateofbirth)}
                        />
                    </CardSection>

                    {/* Button kısmı */}
                    <CardSection>
                        <Button>GÜNCELLE</Button>
                    </CardSection>
                    <CardSection>
                        <Button>ANASAYFA</Button>
                    </CardSection>

                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create(
    {
        // Tüm sayfa stili
        container: {
            flex: 1,
            backgroundColor: '#ffde00'
        },
        // Fotoğrafın yer aldığı kısmın stili
        imagecontainer: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffde00',
        },
        // Fotoğrafın yer aldığı kısımdaki butonun stili
        button: {
            width: 150,
            height: 30,
            backgroundColor: '#ffde00',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            padding: 3
        },
        text: {
            color: 'black',
            textAlign: 'center',
        },
        // Fotoğrafın stili
        image: {
            width: 110,
            height: 110,
            borderRadius: 100,
            marginBottom: 8
        },
        // Siyah kısımda yer alan stiller
        blackCard: {
            flexDirection: 'row',
            backgroundColor: 'black',
            padding: 3,
        },
        blackCardSection: {
            flexDirection: 'row',
            flex: 1
        },
        textStyle: {
            padding: 5,
            fontSize: 18,
            color: '#ffde00'
        },
        blackinputStyle: {
            fontSize: 18,
            color: 'black',
            textAlign: 'left',
            padding: 0,
            flex: 2
        },
        // Form kısmında yer alan stiller
        formcontainer: {
            flex: 5,
            padding: 5
        },
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2,
            padding: 5
        }
    }
);

const options = {
    title: 'Select a photo',
    takePhotoButtonTitle: 'Take a photo',
    chooseFromLibraryButtonTitle: 'Choose from gallery',
    quality: 1
};
export default ProfileSettings;
