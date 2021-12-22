import service from "@/utils/request";

const api ={
    queryStudent:'/queryAllStudent',
    queryGrade:'/singleStudent',
    scoreLevel:'/ScoreLevel',
    login:'/login',
    register:'/register',
    querySfromC:'/AllStudentFromClass',
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

export function scoreLevel(param){
    return service({
        url:api.scoreLevel,
        method:'post',
        data:param
    })
}

export function login(param){
    return service({
        url:api.login,
        method:'post',
        data:param
    })
}

export function register(param){
    return service({
        url:api.register,
        method:'post',
        data:param
    })
}

export function querySfromC(param){
    return service({
        url:api.querySfromC,
        method:'post',
        data:param
    })
}
