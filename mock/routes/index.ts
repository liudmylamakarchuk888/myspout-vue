import faker from 'faker'
import { Response, Request } from 'express'
var fs = require('fs'), json;

class jsonReader {

    readJsonFileSync(filepath: string, encoding: String = 'utf8') {
        if (typeof (encoding) === 'undefined') {
            encoding = 'utf8';
        }

        var file = fs.readFileSync(filepath, encoding);

        return JSON.parse(file);
    }

    public getFile(file: string) {
        var filepath = __dirname + '/../sampleFiles/' + file;
        return this.readJsonFileSync(filepath);
    }

}

export const getRecentItems = (req: Request, res: Response) => {
    return res.json({
        code: 20000,
        data: new jsonReader().getFile('getRecentItems.json')
    })
}

export const getEntities = function (req, res, next) {

    res.send(new jsonReader().getFile('getEntities.json'));
}

export const recentItems = (req: Request, res: Response) => {

    res.send(new jsonReader().getFile('getRecentItems10.json'));
}

export const getApplicationPreferences = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getApplicationPreferences.json'));
}


export const getAuthorizableEntities = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getAuthorizableEntities.json'));
}



export const getEntityRelationshipIcons = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getEntityRelationshipIcons.json'));
}


export const getFlexApplicationPreferences = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getFlexApplicationPreferences.json'));
}


export const getForms = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getForms.json'));
}


export const getIconsInFolder = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getIconsInFolder.json'));
}

export const getWorkflows = (req: Request, res: Response) => {
    res.send(new jsonReader().getFile('getWorkflows.json'));
}


