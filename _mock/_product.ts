import { MockRequest } from '@vm0100/ngmock';

import { getList } from './global';
import { product } from './tables';

export const PRODUCT = {
    '/Product': (req: MockRequest) => getList(product, req.queryString)
}