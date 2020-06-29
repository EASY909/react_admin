import * as actionTypes from './constants';

export const changeisCollapse=()=>{
    return {
        type: actionTypes.SET_COLLAPSE
    }
}
// const changeBannerList = (data) => ({
//     type: actionTypes.CHANGE_BANNER,
//     data: fromJS(data)
// });


// const changeRecommendList = (data) => ({
//     type: actionTypes.CHANGE_RECOMMEND_LIST,
//     data: fromJS(data)
// });


// export const getBannerList = () => {
//     return (dispatch) => {
//         getBannerRequest().then(data => {
            
//             dispatch({
//                 type: actionTypes.CHANGE_BANNER,
//                 data: fromJS(data.banners)
//             });
//         }).catch(() => {
//             console.log("轮播图数据传输错误");
//         })
//     }
// };

// export const getRecommendList = () => {
//     return (dispatch) => {
//         getRecommendListRequest().then(data => {
//             dispatch({
//                 type: actionTypes.CHANGE_RECOMMEND_LIST,
//                 data: fromJS(data.result)
//             });
//             dispatch ({
//                 type: actionTypes.CHANGE_ENTER_LOADING,
//                 data: false
//             });// 改变 loading
//         }).catch(() => {
//             console.log("推荐歌单数据传输错误");
//         });
//     }
// };