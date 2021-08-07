const io = require("socket.io")(8900,
    {
        cors: {
            origin: "http://localhost:3000"
        },
    });

    let users = []; 

    const removeUser = (sockedId) => {
        users = users.filter((user) => user.sockedId !== sockedId)
    }

    const addUser = (userId, socketId) => {
        !users.some(user => user.userId === userId) && 
        users.push({userId, socketId})
    }

    const getUser = (userId) => {
        return users.find(user => user.userId === userId)
    }


    io.on("connection", (socket) => {
        console.log("a user connected")
        io.emit("welcum", "hello this is socket server")
        socket.on('addUser', (userId) => {
            addUser(userId, socket.id)
            io.emit("getUsers", users)
        })


        socket.on("sendMessage", ({senderId, receiverId, text}) => {
            const user = getUser(receiverId);
            io.to(user?.sockedId).emit("getMessage",{
                senderId, text
            })
        })


        socket.on("sendMessage", ({userId, perceiverId, text}) => {

        })

        socket.on("disconnect", () => {
            console.log("a user disconnected")
            removeUser(socket.id);
            io.emit("getUsers", users)
        })

    });



