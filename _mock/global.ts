export function getList(list: any[], params: any): {total: number, list: any[]} {
    let  ret = [...list]
    const pi = +params.pi;
    const ps = +params.ps;
    const start = (pi - 1) * ps;
    
    if(params.no) {
        ret = ret.filter(data => data.no.indexOf(params.no) > -1);
    }

    return {
        total: ret.length,
        list: ret.slice(start, ps * pi)
    }
}

// GET 获取
// POST 创建
// PUT 更新
// DELETE 删除

// 200 ok
// 201 create
// 204 delete
// 205 refresh
// 400 Bad Request
// 401 Unauthorized
// 500 Internal Server Error