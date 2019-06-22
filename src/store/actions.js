export default{
    addAsync({commit},data){
        setTimeout(()=>{
            commit('testAddTwo',data);
        },500);
    }
};