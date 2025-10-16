import { remark } from "remark";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";

const articleDir = path.join(process.cwd(),"./articles");

export const getArticles = async () =>{
    const fileName = fs.readDirSync(articleDir);
    return await Promise.all(
        fileName.map(async (file)=>{
            const slug = file.replace(/\.md/,"");
            const filePath = path.join(articleDir, file);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { content, data } = matter(fileContent);
            const htmlContent = await remark().use(html).process(content);
            return{
                slug,
                html: htmlContent.toString(),
                data: data 
            }
        })
    )
}
