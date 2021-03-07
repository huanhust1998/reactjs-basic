export const saveTheme =color=>({
    type:"CHANGE_THEME",
    payload:{
        color
    }
});
//action gồm type và payload,
// với tính năng thay theme thì payload chỉ đơn giản là mã màu
