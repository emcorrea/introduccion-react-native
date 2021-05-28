import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {

    static instance = new Storage();

    store = async (key, value) => {
         try {
            await AsyncStorage.setItem(key, value);
            return true;
         } catch (error) {
            console.log("error storage", error);
            return false;
         }
    }

    get = async (key) => {
        try {   
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log("error get", error);
            throw Error(error);
        }
    }

    multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (error) {
            console.log("error multiGet", error);
            throw Error(error);
        }
    }

    getAllKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.log("error getAllKey", error);
            throw Error(error);
        }
    }

    remove = async (key) => {

        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log("errorRemove", error);
            return false;
        }
    }

}

export default Storage;