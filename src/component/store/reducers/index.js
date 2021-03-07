//để reducer có thể kết nối với Store thì chúng ta
//phải combine tất cả các reducer lại
import {combineReducers} from "redux";
import color from './themeReducer'

export default combineReducers({
    color
})