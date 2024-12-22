
function PromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
    const arr = Array.from(promises);
    let count = 0;
    const res: T[] = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            Promise.resolve(arr[i]).then((item) => {
                res[i] = item;

                if (++count === arr.length) {
                    resolve(res);
                }
            }).catch((e) => reject(e));
        }
    });
}
