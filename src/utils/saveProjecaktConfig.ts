
// import {checkConfigFile} from '@/utils/checkProjecaktConfig.ts'
//     // localStorage.setItem('projectPath','D:/TEST')
//     const checkConfig = async () => {
//         const isok =  await checkConfigFile(window)
//         console.log('isok:', isok);
//     }

//     checkConfig()

// const saveFun = ({ name, data }: SaveConfigFileParams)=>{
//    // 检查是否有配置文件路径
//     const projectPath:string|null = localStorage.getItem('projectPath') 
//     if (!projectPath) {
//         return false   
//     }
//     // 通过electronAPI调用main进程的方法
//     const filePath = projectPath + "/shanAutoconfig.json";
//     // fs.writeFile(filePath, JSON.stringify(data), (err) => {
//     //     if (err) {
//     //         console.log(err);
//     //     } else {
//     //         console.log("写入成功");
//     //     }
//     // });
//     return true;
// }