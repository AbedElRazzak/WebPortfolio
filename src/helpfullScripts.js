

export function getPrefix() {

    var envMode = ""
    if (import.meta.env.DEV == true) {
        envMode = "DEV"
    }else if (import.meta.env.PROD == true) {
        envMode = "PROD"
    }

    if (envMode == "DEV") {
        return "dev"
    }else if (envMode == "PROD") {
        return "prod"
    }
}