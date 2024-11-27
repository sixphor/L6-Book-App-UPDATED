import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Button, SectionList, Image } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {datasource} from "./Data";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3E206D',
        flex: 1,
        padding: 10,
    },

    listContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#4A2A80',
        marginHorizontal: 10,
        overflow: 'hidden',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 3,
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#6A0DAD',
    },

    headerText: {
        color: '#000000',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    bookTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginLeft: 3,
        flexWrap: 'wrap',
        display: 'flex',
        width: '200',
    },

    bookWriter: {
        color: "#acacac",
        marginLeft: 3,
        fontWeight: 'thin',
        fontStyle: 'italic',
    },

    bookDesc: {
        fontSize: 14,
        width: '200',
        marginLeft: 3,
        color: '#D8BFD8',
    },

    image: {
        width: 100,
        height: 140,
        marginRight: 10,
        borderRadius: 5,
    },

    titleContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFD700',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },

    listHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 5,
    },
});

const Home = ({navigation}) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity style={styles.listContainer}
                              onPress={() =>
                              {
                                  navigation.navigate('Edit', {
                                      index: index, genre: section.genre, name: item.name,
                                      writer: item.writer, description: item.description,
                                      image: item.image,
                                  });
                              }
                              }
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.bookTitle}>{item.name}</Text>
                    <Text style={styles.bookWriter}>By: {item.writer}</Text>
                    <Text style={[styles.bookDesc]}>{item.description}</Text>
                    <Text></Text>
                    <Text>⭐⭐⭐⭐⭐</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.titleContainer}>
                <Text style={styles.listHeader}>Ultimate Book List</Text>
                <Button title={"ADD BOOK"}
                        onPress={() => {navigation.navigate('Add')}}
                />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { genre, bgColor, icon, iconColour } }) => (
                    <View style={[styles.header, { backgroundColor: bgColor }]}>
                        <FontAwesome5 name={icon} size={20} color={iconColour} />
                        <Text style={[styles.headerText]}>{genre}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
