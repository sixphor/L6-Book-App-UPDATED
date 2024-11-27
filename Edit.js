import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert, StyleSheet} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3E206D',
        flex: 1,
        padding: 20,
    },

    pageTitle: {
        fontSize: 22,
        color: '#FFD700',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#000',
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFD700',
    },

    inputHeader: {
        fontSize: 20,
        color: '#FFF',
        marginVertical: 20,
        fontWeight: 'bold',
    },

    inputFieldSmall: {
        borderWidth: 1,
        borderColor: '#FFD700',
        backgroundColor: '#FFF',

    },

    inputFieldLarge: {
        borderWidth: 1,
        borderColor: '#FFD700',
        backgroundColor: '#FFF',
        height: 100,
        padding: 10,
        textAlignVertical: 'top',
    },

    pickerStyle : {
        backgroundColor: '#FFF',
        padding: 1,
    },

    buttonStyle: {
        marginTop: 30,
    },
});

const Edit = ({navigation, route}) => {

    const [title, setTitle] = useState(route.params.name);
    const [writer, setWriter] = useState(route.params.writer);
    const [desc, setDesc] = useState(route.params.description);
    const [genre, setGenre] = useState(route.params.genre);
    const [image, setImage] = useState(route.params.image);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.pageTitle}>Edit Book!</Text>
                <Text style={styles.inputHeader}>Book Title</Text>
                <TextInput
                    style={styles.inputFieldSmall}
                    value={title}
                    onChangeText={setTitle}
                />
                <Text style={styles.inputHeader}>Writer</Text>
                <TextInput
                    style={styles.inputFieldSmall}
                    value={writer}
                    onChangeText={setWriter}
                />
                <Text style={styles.inputHeader}>Short Description</Text>
                <TextInput
                    style={styles.inputFieldLarge}
                    multiline={true}
                    value={desc}
                    onChangeText={setDesc}
                />
            </View>
            <View>
                <Text style={styles.inputHeader}>Cover (Image URL)</Text>
                <TextInput
                    style={styles.inputFieldSmall}
                    multiline={true}
                    value={image}
                    onChangeText={setImage}
                />
            </View>
            <View style={[{padding: 10, flexDirection: 'row', justifyContent: 'space-between',}]}>
                <View style={{flex: 1, margin: 10}}>
                    <Button title={"SAVE"}
                            onPress={() => {

                                let indexNum = 0;
                                if (route.params.genre === 'Comedy & Slice of Life') {
                                    indexNum = 1;
                                }
                                else if (route.params.genre === 'Isekai (Other World)') {
                                    indexNum = 2;
                                }
                                else if (route.params.genre === 'Sci-Fi & Magic') {
                                    indexNum = 3;
                                }
                                else if (route.params.genre === 'Mystery & Supernatual') {
                                    indexNum = 4;
                                }
                                else if (route.params.genre === 'Romance & Drama') {
                                    indexNum = 5;
                                }
                                else if (route.params.genre === 'Post-Apocalyptic') {
                                    indexNum = 6;
                                }
                                else if (route.params.genre === 'Horror') {
                                    indexNum = 7;
                                }
                                else if (route.params.genre === 'Historical Fantasy') {
                                    indexNum = 8;
                                }
                                else if (route.params.genre === 'Action') {
                                    indexNum = 9;
                                }

                                datasource[indexNum].data[route.params.index].name = title;
                                datasource[indexNum].data[route.params.index].writer = writer;
                                datasource[indexNum].data[route.params.index].description = desc;
                                datasource[indexNum].data[route.params.index].image = image;
                                navigation.navigate("Home");
                            }}
                    />
                </View>
                <View style={{flex: 1, margin: 10}}>
                    <Button title="DELETE"
                            onPress={() => {
                                let indexNum = 0;
                                if (route.params.genre === 'Comedy & Slice of Life') {
                                    indexNum = 1;
                                }
                                else if (route.params.genre === 'Isekai (Other World)') {
                                    indexNum = 2;
                                }
                                else if (route.params.genre === 'Sci-Fi & Magic') {
                                    indexNum = 3;
                                }
                                else if (route.params.genre === 'Mystery & Supernatural') {
                                    indexNum = 4;
                                }
                                else if (route.params.genre === 'Romance & Drama') {
                                    indexNum = 5;
                                }
                                else if (route.params.genre === 'Post-Apocalyptic') {
                                    indexNum = 6;
                                }
                                else if (route.params.genre === 'Horror') {
                                    indexNum = 7;
                                }
                                else if (route.params.genre === 'Historical Fantasy') {
                                    indexNum = 8;
                                }
                                else if (route.params.genre === 'Action') {
                                    indexNum = 9;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress: () => {
                                            datasource[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
