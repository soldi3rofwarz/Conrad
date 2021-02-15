import {InstanceDb, InstanceFirebase } from './firebase.config';

const COLLECTION_USERS = 'users';

const usersQuery = () => {
    const query = InstanceDb().collection(COLLECTION_USERS);
    return query;
};

export const currentUser = () => {
    const user = InstanceFirebase().auth().currentUser;
    if(user) {
        return user;
    }
    else {
        return null;
    }
};

export const onAuthChanged = (response) => {
    InstanceFirebase().auth().onAuthStateChanged(response);
};

export const signout = async () => {
    await InstanceFirebase().auth().signOut();
};

export const signin = async (email, password) => {
    await InstanceFirebase().auth().signInWithEmailAndPassword(email, password);
};

export const Add = async (userEntity) => {
    const {email, password} = userEntity;
    const result = await InstanceFirebase().auth().createUserWithEmailAndPassword(email, password);
    await usersQuery().add(userEntity);
};

export const Update = async (userId, userEntity) => {
    await usersQuery().doc(userId).update(userEntity);
};

export const Delete = async (userId) => {
    await usersQuery().doc(userId).delete();
};

export const Select = async (userId) => {
    return await usersQuery().doc(userId).get();
};

export const Get = async () => {
    return await usersQuery().get();
};

export const Watch = async (usersSnapshotCallback) => {
    usersQuery().onSnapshot((snapshot) => {
        const usersData = [];
        snapshot.forEach(doc => usersData.push({
            id: doc.id,
            ...doc
        }));
        usersSnapshotCallback(usersData);
    });
};