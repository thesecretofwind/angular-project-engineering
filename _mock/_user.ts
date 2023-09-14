import { MockRequest, MockStatusError } from '@vm0100/ngmock';

import { Iuser, user, user as users } from './tables';

function login(params: {userCode: string, password: string}) :string {
    if(params.userCode.trim().length < 1 || params.password.trim().length < 1) {
        throw new MockStatusError(422, '账号或密码不能为空')
    }

    const user = users.find( item => item.userCode === params.userCode && item.password === params.password) 

    if(!user) {
        throw new MockStatusError(422, '用户名或密码错误')
    }

    return user.uid;
}

function addUser(params:Iuser): string {
    if(user.findIndex(item => item.userCode === params.userCode)) {
        throw new MockStatusError(422, '已存在相同的账号')
    }

    const uid = (users.length + 1).toString();
    Object.assign(params, {uid});
    users.push(params);
    return uid;
}

export const UserComponent = {
    'POST/login': (req: MockRequest) => login(req.body),
    'POST/users': (req: MockRequest) => addUser(req.body)
}