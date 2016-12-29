import { CounterDao } from './counters-dao'
import { knownFolders, File, Folder, path } from 'file-system'


export class CounterFS implements CounterDao {

    fileName: string = 'counters.json'  
    documents: Folder = knownFolders.documents()
    file: File = this.documents.getFile(this.fileName)    

    read(): Promise<any>{     
        return this.file.readText()
    }

    write(data): Promise<any>{
        return this.file.writeText(data)
    }

}