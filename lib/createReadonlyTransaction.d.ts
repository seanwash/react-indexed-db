export declare function createReadonlyTransaction(database: IDBDatabase, store: string, resolve: Function, reject: Function): {
    store: IDBObjectStore;
    transaction: IDBTransaction;
};
