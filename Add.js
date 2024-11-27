import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

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

const Add = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.pageTitle}>ADD A BOOK!</Text>
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
                <Text style={styles.inputHeader}>Genre</Text>
                <View style={styles.pickerStyle}>
                    <RNPickerSelect
                        value={genre}
                        onValueChange={(value) => setGenre(value)}
                        items={[
                            {label: "Fantasy Adventure", value: "Fantasy Adventure"},
                            {label: "Comedy & Slice of Life", value: "Comedy & Slice of Life"},
                            {label: "Isekai (Other World)", value: "Isekai (Other World)"},
                            {label: "Sci-Fi & Magic", value: "Sci-Fi & Magic"},
                            {label: "Mystery & Supernatural", value: "Mystery & Supernatural"},
                            {label: "Romance & Drama", value: "Romance & Drama"},
                            {label: "Post-Apocalyptic", value: "Post-Apocalyptic"},
                            {label: "Horror", value: "Horror"},
                            {label: "Historical Fantasy", value: "Historical Fantasy"},
                            {label: "Action", value: "Action"},

                        ]}
                    />
                </View>
                <Text style={styles.inputHeader}>Cover (Image URL)</Text>
                <TextInput
                    style={styles.inputFieldSmall}
                    multiline={true}
                    value={image}
                    onChangeText={setImage}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button title={"ADD BOOK"}
                        onPress={() => {
                            let item = {
                                name: title,
                                writer: writer,
                                description: desc,
                                genre: genre,
                                image: image,
                            };
                            let indexNum = 0;
                            if (genre == 'Fantsay Adventure') {
                                indexNum = 0;
                            }
                            else if (genre == 'Comedy & Slice of Life') {
                                indexNum = 1;
                            }
                            else if (genre == 'Isekai (Other World)') {
                                indexNum = 2;
                            }
                            else if (genre == 'Sci-Fi & Magic') {
                                indexNum = 3;
                            }
                            else if (genre == 'Mystery & Supernatural') {
                                indexNum = 4;
                            }
                            else if (genre == 'Romance & Drama') {
                                indexNum = 5;
                            }
                            else if (genre == 'Post-Apocalyptic') {
                                indexNum = 6;
                            }
                            else if (genre == 'Horror') {
                                indexNum = 7;
                            }
                            else if (genre == 'Historical Fantasy') {
                                indexNum = 8;
                            }
                            else if (genre == 'Action') {
                                indexNum = 9;
                            }

                            datasource[indexNum].data.push(item);
                            navigation.navigate("Home");
                        }}
                />
            </View>
        </View>
    );
};

export default Add;
