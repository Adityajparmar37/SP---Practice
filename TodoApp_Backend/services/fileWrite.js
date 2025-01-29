import fsProm from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const WriteToDosFromFile = async (data) => {
    try {
        const filePath = path.join(__dirname, "../database/db.json");
        await fsProm.writeFile(filePath, JSON.stringify(data, null, 2));
        return {success:true}
    } catch (error) {
        console.log("File Writing Funciton error" , error);
        return {success:false, error:error.message}
    }
}