import {InstanceDb, InstanceFirebase,} from './firebase.config';

const COLLECTION_WORKS = 'works';

const worksQuery = () => {
    const query = InstanceDb().collection(COLLECTION_WORKS);
    return query;
};

export const Add = async (workEntity) => {
    await worksQuery().add({
        ...workEntity,
        workDate: InstanceFirebase().firestore.FieldValue.serverTimestamp()
    });
};

export const Update = async (workId, workEntity) => {
    await worksQuery().doc(workId).update(workEntity);
};

export const Delete = async (workId) => {
    await worksQuery().doc(workId).delete();
};

export const Select = async (workId) => {
    return await worksQuery().doc(workId).get();
};

export const Get = async () => {
    return await worksQuery().orderBy('workDate', 'desc').get();
};

export const GetNext = async(fieldOrderBy, limitWorks, lastWork) => {
    const pagination = worksQuery()
                        .orderBy(fieldOrderBy)
                        .startAfter(lastWork)
                        .limit(limitWorks);

    const data = await pagination.get();
    return data;
};

export const Watch = async (worksSnapshotCallback) => {
    worksQuery().onSnapshot((snapshot) => {
        const worksData = [];
        snapshot.forEach(doc => worksData.push({
            id: doc.id,
            ...doc
        }));
        worksSnapshotCallback(worksData);
    });
};