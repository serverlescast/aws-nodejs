const publicPolicie = require('./public')
const companyPolicie = require('./company')

class S3_PERMISSIONS {
    static public = 'public';
    static company = 'company'; 
}

function policySwitch(type) {
    switch (type) {
        case S3_PERMISSIONS.company: {
            return companyPolicie
        }
        case S3_PERMISSIONS.public: {
            return publicPolicie
        }
        default: {
            throw new Error('Policy is not supported');
        }

    }
}

module.exports = {
    policySwitch,
    S3_PERMISSIONS   
}