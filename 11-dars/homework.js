let time = new Date();

// console.log();



function moment() {
    return {
        format(rad) {
            if (rad == "LT") {
                console.log(`${time.getHours() - 12}:${time.getMinutes()} AM`);
            } else if (rad == "LTS") {
                console.log(`${time.getHours() - 12}:${time.getMinutes()}:${time.getSeconds()} AM`);
            } else if (rad == "L") {
                console.log(`0${time.getUTCMonth() + 1}/0${time.getUTCDate()}/${time.getFullYear()}`);
            } else if (rad == "l") {
                console.log(`${time.getUTCMonth() + 1}/${time.getUTCDate()}/${time.getFullYear()}`);
            } else if (rad == "LL") {
                if (time.getUTCMonth() == 0) {
                    time.getUTCMonth() = "Yanvar";
                } else if (time.getUTCMonth() == 1) {
                    time.getUTCMonth() = "Fervral";
                } else if (time.getUTCMonth() == 2) {
                    time.getUTCMonth() = "Mart";
                }
            }
            console.log(`${time.getUTCMonth() + 1}/${time.getUTCDate()}/${time.getFullYear()}`);
        }
    };
};
moment().format('LL');