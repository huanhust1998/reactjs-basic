let initState = {
    color:"#FFFFFF"
}
export default function themeReducer(state = initState,action){
    switch (action.type){
        case 'CHANGE_THEME':
            console.log('themeReducer: '+JSON.stringify(state))
            return Object.assign({},state,{
                color:action.payload.color
            });
        default:
            return initState;
    }
}

//sau khi nhận action, reducer sẽ không trực tiếp thay đổi state
//mà nó nhận được, mà tạo ra các bản copy và thay đổi trên đó

//để reducer có thể kết nối với Store thì ta cần phải combine tất cả các reducer lại
