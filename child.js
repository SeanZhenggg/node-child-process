var result = 0;

// process.send(`Child Process ${process.pid} is created`);

process.on('message', (msg) => {
    if (msg.action === 'compute' && msg.value) {
        for (let i = 0; i < msg.value; i++) {
            result += i;
        }
        process.send({
            result: result,
            id: process.pid
        });
        result = 0;
    }
})
