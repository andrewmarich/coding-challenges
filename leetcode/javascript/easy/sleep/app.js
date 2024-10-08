/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}

sleep()

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */