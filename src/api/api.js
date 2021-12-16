import service from "@/utils/request";

const api ={
    queryStudent:'/queryAllStudent',
    queryGrade:'/singleStudent',
}

export function queryStudent(param){
    return service({
        url:api.queryStudent,
        method:'post',
        data:param
    })
}

export function queryGrade(param){
    return service({
        url:api.queryGrade,
        method:'post',
        data:param
    })
}

