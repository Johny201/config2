const nconf = require("nconf")

export default function (c) {
    if (c === "l") {
        nconf.argv()
            .env()
            .file({
                file: `${process.cwd()}/server/lib/config/config_l.json`,
            })
    } else if (c === "ls") {
        nconf.argv()
            .env()
            .file({
                file: `${process.cwd()}/server/lib/config/config_ls.json`,
            })
    } else if (c === "d") {
        nconf.argv()
            .env()
            .file({
                file: "/opt/server/server/src/config/config_d.json",
            })
    } else {
        nconf.argv()
            .env()
            .file({
                file: `${process.cwd()}/server/lib/config/config_p.json`,
            })
    }
    return nconf
}
