// import * as uuid from 'uuid';
// import * as path from 'path';

class FileService {
    getFileName(file) {
        try {
            const filename = file.filename;
            return filename;
        } catch (error) {
            console.log(error);
        }
    }
    // extend here
}

export default new FileService();