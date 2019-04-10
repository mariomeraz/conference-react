import API from '../config/API'

export default class FixImageUtils{
    static fixImageUrl(filePath){
        return `${API.serverImagesURL}${filePath}`;
    }


}