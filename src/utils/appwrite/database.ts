import { Client, Databases } from 'appwrite'

let databases: Databases | null = null

export const getDatabase = (client: Client) => {
    if (!databases) {
        databases = new Databases(client)
    }
    return databases
}

export const getDatabaseDocuments = async (
    client: Client,
    databaseId: string,
    collectionId: string,
) => {
    const database = getDatabase(client)
    const response = await database.listDocuments(databaseId, collectionId)
    return response.documents
}
