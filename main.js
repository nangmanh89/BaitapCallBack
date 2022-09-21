var path = require('path'),
    fs = require('fs');
    let excelToJson = require('convert-excel-to-json');


let readExel = (path) => {
    return new Promise((res, rej) => {
        let result = excelToJson({
            sourceFile: path,

            columnToKey: {
                A: 'Name',
                B: 'Adress',
                C: 'Phone',
                D: 'Email'
            }
        })
        res(result)
        rej("err")
    })
}

let readJson = () => {
    try {
        let data = fs.readFileSync(path2 + `\\${fileName1}`, { encoding: 'utf8' })
        return {
            code: returnCode.readSuccessfully,
            data: data,
            message: null
        }
    } catch (err) {
        return {
            code: returnCode.fileNotExisted,
            data: null,
            message: err
        };
    }
}

let saveJson = (objecInput) => {
    let objStr = JSON.parse(objecInput)
    try {
        fs.writeFileSync(path2 + `\\${fileName2}`, objStr)
        return {
            code: returnCode.saveSuccessfully,
            data: null,
            message: null
        };
    } catch (err) {
        return {
            code: returnCode.saveErr,
            data: null,
            message: err
        };
    }
}

