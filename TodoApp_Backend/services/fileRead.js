import fsProm from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";


//absolut path
// get the dir name 
// import.meta.url will give url like with %2 hence we need to convert it into a file path which we do through fileURLToPath and then wrap it into a __dirname in order to get dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

export const ReadTodosFromFile = async () => {
    try {
        const filePath = path.join(__dirname, "../database/db.json");
        const data = await fsProm.readFile(filePath, "utf-8");
        
        // if file is empty 
        if (!data.trim()) {
            return {success: true, allTodosData:[]}
        }

        // if file has data
        return { success: true, allTodosData: JSON.parse(data) };

    } catch (error) {
        return {success:false, erroe:error.message}
    }
}