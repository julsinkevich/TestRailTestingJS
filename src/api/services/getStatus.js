import HTTP_STATUS_CODES from 'src/api/constants/httpStatusCodes';
import { hasStatusCode } from 'src/api/services/responseService';

export default function getStatus(client, path) {
    return client
        .getRequest(`${path}status`)
        .then(res => hasStatusCode(res, HTTP_STATUS_CODES.OK));
}
