class S3_COMMAND {
    static create = 'create-bucket';
    static delete = 'delete-bucket';
    static list   = 'list-bucket';
    static upload = 'file-upload';
    static website = 'file-website';
}

function parse(args, state) {
        
    return args.reduce((acc, slice) => {
        const item = slice.split("=");

        const key = item[0];
        const value= item[1];
        acc[key] = value;

        return acc;

    }, state);
}

module.exports = {
    S3_COMMAND,
    parse
}