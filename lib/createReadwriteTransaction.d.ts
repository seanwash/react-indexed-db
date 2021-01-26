export declare function createReadwriteTransaction(database: IDBDatabase, store: string, resolve: Function, reject: Function): {
    store: IDBObjectStore;
    transaction: IDBTransaction;
};
