// module.exports = () => {
//     postComment: async (req, res) => {
//         const cubeId = req.params.cubeId;
//         const comment = {
//             author: req.body.author,
//             content: req.body.content
//         };

//         await req.storage.createComment(
//             cubeId,
//             comment
//         );

//         res.redirect(`/details/${cubeId}`);
//     };
// };

const postComments = async (req, res) => {
    const cubeId = req.params.cubeId;
    const comment = {
        author: req.body.author,
        content: req.body.content
    };

    await req.storage.createComment(
        cubeId,
        comment
    );

    res.redirect(`/details/${cubeId}`);
};

module.exports = postComments;