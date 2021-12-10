import service from "@/utils/request";

const api ={
    queryStudent:'/queryAllStudent'
}

export function queryStudent(param){
    return service({
        url:api.queryStudent,
        method:'post',
        data:param
    })
}