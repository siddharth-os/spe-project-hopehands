export const url = "http://localhost:8081"

export function getToken(){
    const token = localStorage.getItem("jwtToken");
    if(token!==null){
        return 'Bearer '+token;
    }
    return null;
}
export function danger(){
    localStorage.clear();
}
export function getRole(){
    return localStorage.getItem('authRole');
}
 export function isAdmin(){
    if(getToken() && getRole()==='0'){
        return true;
    }
    else
        return false;
}

export function isOrganization(){
    if(getToken() && getRole()==='1'){
        return true;
    }
    return false;
}

export function isUser(){
    if(getToken() && getRole()==='2'){
        return true;
    }
    return false;
}
