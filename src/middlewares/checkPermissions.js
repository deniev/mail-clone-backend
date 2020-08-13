export default (req, res, next) => {
    req.user = {
        name: "John",
        age: 33
    }

    next()
};